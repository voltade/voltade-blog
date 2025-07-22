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
                console.log("✅ Grants directory exists");
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
            let indexContent = await fs.readFile(this.indexPath, "utf8");

            // STEP 1: Find what's already in the index
            const existingLinks = this.extractExistingGrantLinks(indexContent);
            console.log(`📋 Found ${existingLinks.length} existing grant links:`, existingLinks);

            // STEP 2: Find which posts are truly new
            const newPosts = blogEntries.filter((entry) => {
                const expectedLink = `/grants/${entry.slug}`;
                const isNew = !existingLinks.includes(expectedLink);
                if (isNew) {
                    console.log(`🆕 NEW POST: ${entry.title} -> ${expectedLink}`);
                }
                return isNew;
            });

            if (newPosts.length === 0) {
                console.log(`ℹ️ No new posts found. Index already up to date.`);
                return;
            }

            console.log(`🚀 Adding ${newPosts.length} new posts to index`);

            // STEP 3: Generate cards for new posts only
            const newBlogCards = this.generateBlogCards(newPosts);

            // STEP 4: Find and update the grants section
            const grantsHeaderIndex = indexContent.indexOf("## Grants");
            if (grantsHeaderIndex === -1) {
                console.log(`❌ No "## Grants" header found`);
                return;
            }

            const afterHeader = indexContent.substring(grantsHeaderIndex);
            const sectionMatch = afterHeader.match(
                /## Grants\s*\n+(<section className=\"blog-grid\" id=\"grants\">)([\s\S]*?)(<\/section>)/
            );

            if (sectionMatch) {
                const existingContent = sectionMatch[2].trim();
                const updatedContent = existingContent
                    ? `\n${newBlogCards}\n${existingContent}\n` // Prepend new posts
                    : `\n${newBlogCards}\n`;

                const newSection = `${sectionMatch[1]}${updatedContent}${sectionMatch[3]}`;
                const fullMatch = sectionMatch[0];
                indexContent = indexContent.replace(fullMatch, `## Grants\n\n${newSection}`);

                console.log(`✅ Prepended ${newPosts.length} new posts to existing section`);
            }

            // STEP 5: Update category count based on actual posts in index
            const actualCount = this.countGrantsInIndex(indexContent);
            const categoryRegex = /(<CategoryBadge\s+name="Grants"\s+count=")(\d+)(")/;

            if (indexContent.match(categoryRegex)) {
                indexContent = indexContent.replace(categoryRegex, `$1${actualCount}$3`);
                console.log(`🔄 Updated category count to actual count: ${actualCount}`);
            }

            await fs.writeFile(this.indexPath, indexContent, "utf8");
            console.log(`✅ Successfully added ${newPosts.length} new posts. Total grants: ${actualCount}`);
        } catch (error) {
            console.error("❌ Error updating index:", error);
        }
    }

    extractExistingGrantLinks(indexContent) {
        // Extract all grant links from the current index
        const grantLinkRegex = /link="(\/grants\/[^"]+)"/g;
        const links = [];
        let match;

        while ((match = grantLinkRegex.exec(indexContent)) !== null) {
            links.push(match[1]);
        }

        return [...new Set(links)]; // Remove duplicates
    }

    countGrantsInIndex(indexContent) {
        // Count actual BlogCard components in grants section
        const grantsMatch = indexContent.match(/## Grants[\s\S]*?(?=## |$)/);
        if (!grantsMatch) return 0;

        const grantsSection = grantsMatch[0];
        const blogCardMatches = grantsSection.match(/<BlogCard\s/g);
        return blogCardMatches ? blogCardMatches.length : 0;
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
