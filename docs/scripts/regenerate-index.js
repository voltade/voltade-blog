const fs = require("node:fs").promises;
const path = require("node:path");

class BlogIndexGenerator {
    constructor() {
        this.grantsDir = path.join(__dirname, "../docs/pages/grants/");
        this.indexPath = path.join(__dirname, "../docs/pages/index.mdx");
    }

    async scanGrantsDirectory() {
        try {
            const files = await fs.readdir(this.grantsDir);
            const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

            console.log(`📊 Found ${mdxFiles.length} grant posts`);

            const blogEntries = [];

            for (const file of mdxFiles) {
                const filePath = path.join(this.grantsDir, file);
                const content = await fs.readFile(filePath, "utf8");
                const frontmatter = this.parseFrontmatter(content);

                if (frontmatter.title) {
                    blogEntries.push({
                        filename: file,
                        slug: file.replace(".mdx", ""),
                        ...frontmatter,
                    });
                    console.log(`✅ Processed: ${frontmatter.title}`);
                }
            }

            // Sort by date (newest first)
            blogEntries.sort((a, b) => new Date(b.date) - new Date(a.date));

            return blogEntries;
        } catch (error) {
            console.error("❌ Error scanning grants directory:", error);
            return [];
        }
    }

    parseFrontmatter(content) {
        const frontmatterRegex = /^---\n([\s\S]*?)\n---/;
        const match = content.match(frontmatterRegex);

        if (!match) return {};

        const frontmatterText = match[1];
        const frontmatter = {};

        frontmatterText.split("\n").forEach((line) => {
            const [key, ...valueParts] = line.split(":");
            if (key && valueParts.length > 0) {
                let value = valueParts.join(":").trim();

                // Remove quotes
                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1);
                }

                // Parse arrays
                if (value.startsWith("[") && value.endsWith("]")) {
                    try {
                        value = JSON.parse(value);
                    } catch (e) {
                        // Keep as string if parsing fails
                    }
                }

                frontmatter[key.trim()] = value;
            }
        });

        return frontmatter;
    }

    generateBlogCards(blogEntries) {
        return blogEntries
            .map((entry) => {
                return `    <BlogCard
        title="${entry.title}"
        description="${entry.description}"
        category="${entry.category}"
        readTime="${entry.readTime}"
        date="${entry.date}"
        image="${entry.image || "/images/blog/grants/default-grant.jpg"}"
        link="/grants/${entry.slug}"
    />`;
            })
            .join("\n");
    }

    async updateIndexFile(blogEntries) {
        try {
            let indexContent = await fs.readFile(this.indexPath, "utf8");

            // Generate new blog cards
            const newBlogCards = this.generateBlogCards(blogEntries);

            // Find and replace grants section
            const grantsRegex = /(## Grants\s*\n\s*<section className="blog-grid" id="grants">)([\s\S]*?)(<\/section>)/;

            if (grantsRegex.test(indexContent)) {
                const newGrantsSection = `$1\n${newBlogCards}\n$3`;
                indexContent = indexContent.replace(grantsRegex, newGrantsSection);
                console.log(`🔄 Updated existing grants section`);
            } else {
                // If grants section doesn't exist, add it
                const categoriesIndex = indexContent.indexOf("## Categories");
                if (categoriesIndex !== -1) {
                    const grantsSection = `\n## Grants\n\n<section className="blog-grid" id="grants">\n${newBlogCards}\n</section>\n\n`;
                    indexContent =
                        indexContent.slice(0, categoriesIndex) + grantsSection + indexContent.slice(categoriesIndex);
                    console.log(`➕ Added new grants section`);
                }
            }

            // Update category count
            const categoryRegex = /(<CategoryBadge\s+name="Grants"\s+count=")(\d+)(")/;
            indexContent = indexContent.replace(categoryRegex, `$1${blogEntries.length}$3`);

            await fs.writeFile(this.indexPath, indexContent, "utf8");

            console.log(`✅ Updated index.mdx with ${blogEntries.length} grant posts`);
        } catch (error) {
            console.error("❌ Error updating index file:", error);
            throw error;
        }
    }

    async regenerateIndex() {
        try {
            console.log("🔄 Starting blog index regeneration...");
            const blogEntries = await this.scanGrantsDirectory();

            if (blogEntries.length > 0) {
                await this.updateIndexFile(blogEntries);
                console.log(`🎉 Successfully regenerated index with ${blogEntries.length} entries`);
            } else {
                console.log("📝 No grant posts found, skipping index update");
            }

            return blogEntries;
        } catch (error) {
            console.error("❌ Error regenerating index:", error);
            throw error;
        }
    }
}

// Run if called directly
if (require.main === module) {
    const generator = new BlogIndexGenerator();

    generator
        .regenerateIndex()
        .then((entries) => {
            console.log(`✅ Success! Generated ${entries.length} entries`);
            process.exit(0);
        })
        .catch((error) => {
            console.error("❌ Failed:", error);
            process.exit(1);
        });
}

module.exports = { BlogIndexGenerator };
