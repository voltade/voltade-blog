import { defineConfig } from "vocs";

export default defineConfig({
    title: "Voltade Blog",
    description: "AI-powered CRM insights and guides for businesses",
    iconUrl: "/images/assets/Favicon.png",
    logoUrl: "/images/assets/Favicon.png",
    baseUrl: "https://voltade-blog-page.pages.dev",

    topNav: [
        {
            text: "Get Started",
            link: "/product-updates/",
        },
    ],

    socials: [
        {
            icon: "github",
            link: "https://github.com/voltade/voltade-os",
        },
    ],
    search: {
        boostDocument(documentId) {
            // Boost homepage and all blog categories
            return documentId === "/" ||
                documentId.startsWith("/product-updates") ||
                documentId.startsWith("/sales-marketing") ||
                documentId.startsWith("/crm") ||
                documentId.startsWith("/grants") ||
                documentId.startsWith("/product-support")
                ? 2
                : 1;
        },
    },

    sidebar: [
        {
            text: "Home",
            link: "/",
        },
        {
            text: "Product Updates",
            collapsed: true,
            items: [
                { text: "Latest Updates", link: "/product-updates/latest-updates" },
                { text: "Automated Lead", link: "/product-updates/round-robin-lead-assignment" },
                { text: "Chatbot Integration", link: "/product-updates/chatbot-integration" },
                { text: "Broadcast Features", link: "/product-updates/broadcast-features" },
            ],
        },
        {
            text: "CRM Guides",
            collapsed: true,

            items: [
                { text: "Overview", link: "/crm/overview" },
                { text: "Best CRM Software", link: "/crm/best-software" },
                { text: "AI CRM Revolution", link: "/crm/ai-crm-revolution" },
                { text: "Automation Strategies", link: "/crm/automation-strategies" },
                { text: "Cost Reduction", link: "/crm/cost-reduction-strategies" },
                { text: "Software Selection Guide", link: "/crm/software-selection-guide" },
                { text: "Getting Started", link: "/crm/getting-started" },
            ],
        },
        {
            text: "Sales & Marketing",
            collapsed: true,
            items: [
                { text: "CRM Phone Integration", link: "/sales-marketing/crm-phone-integration" },
                { text: "Conversational AI Sales", link: "/sales-marketing/conversational-ai-sales" },
                { text: "Conversational AI Guide", link: "/sales-marketing/conversational-ai-guide" },
                { text: "Sales Management Mistakes", link: "/sales-marketing/sales-management-mistakes" },
                { text: "WhatsApp Automation", link: "/sales-marketing/whatsapp-automation" },
                { text: "WhatsApp Business Features", link: "/sales-marketing/whatsapp-business-features" },
                { text: "Sales Tools", link: "/sales-marketing/sales-tools" },
                { text: "WhatsApp CRM Techniques", link: "/sales-marketing/whatsapp-crm-techniques" },
            ],
        },
        {
            text: "Product Support",
            collapsed: true,

            items: [{ text: "Profile Permissions", link: "/product-support/profile-permissions" }],
        },
    ],
    theme: {
        colorScheme: "light",
    },
    // Optional: Configure layout for better spacing
    editLink: {
        pattern: "https://github.com/your-username/voltade-blog/edit/main/docs/:path",
        text: "Edit this page",
    },
});
