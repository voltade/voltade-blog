// functions/api/newsletter.js
// Newsletter subscription API for Voltade Blog

export async function onRequestPost(context) {
    try {
        const body = await context.request.json().catch(() => ({}));
        const { name, email, phone } = body;

        console.log("Newsletter subscription:", { name, email, phone });

        // Validate input
        if (!name || !email) {
            return new Response(JSON.stringify({ error: "Name and email are required" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(JSON.stringify({ error: "Invalid email format" }), {
                status: 400,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            });
        }

        // Check if email already exists
        const existingContact = await context.env["blog-contact-list"].get(`contact:${email}`);
        if (existingContact) {
            return new Response(
                JSON.stringify({
                    success: true,
                    message: "You're already subscribed! Thanks for your continued interest.",
                    existing: true,
                }),
                {
                    status: 200,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
        }

        // Create connection object
        const connection = {
            name,
            email,
            phone: phone || "",
            connectedAt: new Date().toISOString(),
            source: "blog-newsletter",
            userAgent: context.request.headers.get("User-Agent") || "",
            ip: context.request.headers.get("CF-Connecting-IP") || "",
            country: context.request.cf?.country || "",
        };

        // Store contact in KV
        await context.env["blog-contact-list"].put(`contact:${email}`, JSON.stringify(connection), {
            metadata: {
                name,
                connectedAt: connection.connectedAt,
                source: connection.source,
            },
        });

        // Update contact count
        const currentCountStr = await context.env["blog-contact-list"].get("stats:total_contacts");
        const newCount = currentCountStr ? parseInt(currentCountStr) + 1 : 1;
        await context.env["blog-contact-list"].put("stats:total_contacts", newCount.toString());

        // Send Telegram notification
        try {
            const telegramSuccess = await sendTelegramNotification(connection, context.env);
            console.log(`Telegram notification: ${telegramSuccess ? "✅ Success" : "❌ Failed"}`);
        } catch (telegramError) {
            console.error("Telegram notification error:", telegramError);
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: "🎉 Successfully subscribed! We'll keep you updated with the latest insights and resources.",
                subscriber_count: newCount,
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    } catch (error) {
        console.error("Newsletter subscription error:", error);
        return new Response(
            JSON.stringify({
                error: "Failed to subscribe. Please try again.",
                details: error.message,
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    }
}

// Handle OPTIONS requests for CORS
export async function onRequestOptions(context) {
    return new Response(null, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Max-Age": "86400",
        },
    });
}

// Telegram notification function
async function sendTelegramNotification(connection, env) {
    try {
        const message =
            `🎯 **New Blog Subscriber!**\n\n` +
            `👤 **Name:** ${connection.name}\n` +
            `📧 **Email:** ${connection.email}\n` +
            `📞 **Phone:** ${connection.phone || "Not provided"}\n` +
            `🌍 **Country:** ${connection.country || "Unknown"}\n` +
            `📅 **Subscribed:** ${new Date(connection.connectedAt).toLocaleString()}\n` +
            `🔗 **Source:** ${connection.source}\n\n` +
            `💡 *New subscriber interested in SME grants and business insights!*`;

        const response = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: env.TELEGRAM_CHAT_ID,
                message_thread_id: env.TELEGRAM_THREAD_ID,
                text: message,
                parse_mode: "Markdown",
                link_preview_options: {
                    is_disabled: true,
                },
            }),
        });

        if (!response.ok) {
            const error = await response.text();
            console.error("Telegram API error:", error);
            return false;
        }

        return true;
    } catch (error) {
        console.error("Telegram notification failed:", error);
        return false;
    }
}
