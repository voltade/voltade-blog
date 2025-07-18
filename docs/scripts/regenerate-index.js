import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class BlogIndexGenerator {
    constructor() {
        this.grantsDir = path.join(__dirname, "../pages/grants/");
        this.indexPath = path.join(__dirname, "../pages/index.mdx");

        console.log(`🔍 Grants directory: ${this.grantsDir}`);
        console.log(`🔍 Index file path: ${this.indexPath}`);
        console.log(`🔍 Current __dirname: ${__dirname}`);
    }

    async scanGrantsDirectory() {
        try {
            console.log(`🔍 Checking if grants directory exists: ${this.grantsDir}`);
            try {
                await fs.access(this.grantsDir);
                console.log(`✅ Grants directory exists`);
            } catch (error) {
                console.log(`❌ Grants directory does not exist: ${error.message}`);
                return [];
            }

            const files = await fs.readdir(this.grantsDir);
            console.log(`🔍 All files in grants directory:`, files);

            const mdxFiles = files.filter((file) => file.endsWith(".mdx"));
            console.log(`📊 Found ${mdxFiles.length} grant posts:`, mdxFiles);

            const blogEntries = [];

            for (const file of mdxFiles) {
                const filePath = path.join(this.grantsDir, file);
                console.log(`🔍 Processing file: ${filePath}`);

                const content = await fs.readFile(filePath, "utf8");
                const frontmatter = this.parseFrontmatter(content);
                console.log(`🔍 Frontmatter for ${file}:`, frontmatter);

                if (frontmatter.title) {
                    blogEntries.push({
                        filename: file,
                        slug: file.replace(".mdx", ""),
                        ...frontmatter,
                    });
                    console.log(`✅ Processed: ${frontmatter.title}`);
                } else {
                    console.log(`⚠️ No title found for ${file}`);
                }
            }

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

                if (value.startsWith('"') && value.endsWith('"')) {
                    value = value.slice(1, -1);
                }

                if (value.startsWith("[") && value.endsWith("]")) {
                    try {
                        value = JSON.parse(value);
                    } catch (_) {}
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
            console.log(`🔍 Checking if index file exists: ${this.indexPath}`);
            let indexContent = await fs.readFile(this.indexPath, "utf8");
            console.log(`🔍 Index file length: ${indexContent.length} characters`);

            const newBlogCards = this.generateBlogCards(blogEntries);
            console.log(`🔍 Generated blog cards for ${blogEntries.length} grant posts`);

            const grantsHeaderIndex = indexContent.indexOf("## Grants");
            if (grantsHeaderIndex === -1) {
                console.log(`❌ No \"## Grants\" header found in index.mdx`);
                return;
            }
            console.log(`✅ Found ## Grants header at position ${grantsHeaderIndex}`);

            const afterHeader = indexContent.substring(grantsHeaderIndex);
            const sectionMatch = afterHeader.match(
                /## Grants\s*\n+(<section className=\"blog-grid\" id=\"grants\">)([\s\S]*?)(<\/section>)/
            );

            if (sectionMatch) {
                console.log(`🔍 Found existing section, prepending new cards...`);
                const existingContent = sectionMatch[2].trim();
                const updatedContent = existingContent
                    ? `\n${newBlogCards}\n${existingContent}\n`
                    : `\n${newBlogCards}\n`;

                const newSection = `${sectionMatch[1]}${updatedContent}${sectionMatch[3]}`;
                const fullMatch = sectionMatch[0];
                indexContent = indexContent.replace(fullMatch, `## Grants\n\n${newSection}`);
                console.log(`✅ Prepended new cards to existing section`);
            } else {
                console.log(`🔍 No section found, adding new section after header...`);
                const newSection = `## Grants\n\n<section className=\"blog-grid\" id=\"grants\">\n${newBlogCards}\n</section>`;
                indexContent = indexContent.replace("## Grants", newSection);
                console.log(`✅ Added new section after header`);
            }

            const allBlogCards = indexContent.match(/<BlogCard[^>]*>/g);
            const grantsCards = allBlogCards ? allBlogCards.length : blogEntries.length;

            // Update category count
            const categoryRegex = /(<CategoryBadge\s+name="Grants"\s+count=")(\d+)(")/;
            const categoryMatch = indexContent.match(categoryRegex);
            console.log(`🔍 Category badge match:`, categoryMatch);

            if (categoryMatch) {
                const currentCount = parseInt(categoryMatch[2]);
                const newCount = currentCount + blogEntries.length;
                indexContent = indexContent.replace(categoryRegex, `$1${newCount}$3`);
                console.log(`🔄 Updated category count to ${newCount}`);
            } else {
                console.log(`⚠️ Could not find CategoryBadge for Grants to update count`);
            }

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

const isMainModule = import.meta.url === `file://${process.argv[1]}`;

if (isMainModule) {
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

export { BlogIndexGenerator };
