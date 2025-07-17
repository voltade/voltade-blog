import { useEffect } from "react";
import { NewsletterForm } from "../components/NewsletterForm";
import "../css/blog-page.css";

interface BlogLayoutProps {
    children: React.ReactNode;
    frontmatter?: {
        title?: string;
        description?: string;
        date?: string;
        category?: string;
        readTime?: string;
        author?: string;
        image?: string;
        tags?: string[];
    };
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({ children, frontmatter }) => {
    // Add blog-page class to body for CSS targeting
    useEffect(() => {
        document.body.classList.add("blog-page");
        return () => document.body.classList.remove("blog-page");
    }, []);

    const {
        title,
        description,
        date,
        category,
        readTime,
        author = "Voltade Team",
        image,
        tags = [],
    } = frontmatter || {};

    useEffect(() => {
        console.log(image);
    }, [image]);

    return (
        <div className="blog-layout">
            <article className="blog-content vocs_Content">
                {" "}
                {/* Add vocs_Content for article */}
                {/* Hero Section */}
                {(title || image) && (
                    <header className="blog-header vocs_Header">
                        {" "}
                        {/* Add vocs_Header */}
                        {title && <h1 className="blog-title vocs_H1 vocs_Heading">{title}</h1>}{" "}
                        {/* h1 gets vocs_H1 + vocs_Heading */}
                        {description && <p className="blog-description vocs_Paragraph">{description}</p>}{" "}
                        {/* p gets vocs_Paragraph */}
                        {image && (
                            <div className="blog-hero-image">
                                <img src={image} alt={title || "Blog post image"} />
                            </div>
                        )}
                        {/* Author Section */}
                        <div className="author-section">
                            <div className="author-info">
                                <div className="author-avatar">
                                    <img
                                        src="/images/assets/Favicon.png"
                                        alt={author}
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>
                                <div className="author-details">
                                    <span className="author-name vocs_Paragraph">{author}</span>{" "}
                                    {/* span follows p - vocs_Paragraph */}
                                    <div className="post-meta">
                                        {date && <span className="post-date vocs_Paragraph">{date}</span>}
                                        {date && readTime && <span className="meta-divider vocs_Paragraph">•</span>}
                                        {readTime && <span className="read-time vocs_Paragraph">{readTime}</span>}
                                        {(date || readTime) && category && (
                                            <span className="meta-divider vocs_Paragraph">•</span>
                                        )}
                                        {category && (
                                            <span className="badge badge-primary vocs_Paragraph">{category}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                )}
                {/* Main Content */}
                <div className="blog-main">{children}</div>
                {/* Tags Section */}
                {tags.length > 0 && (
                    <div className="blog-tags">
                        {tags.map((tag) => (
                            <span key={tag} className="blog-tag vocs_Paragraph">
                                {" "}
                                {/* span follows p */}
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
                {/* Related Articles */}
                <div className="related-articles">
                    <h2 className="vocs_H2 vocs_Heading">Related Articles</h2> {/* h2 gets vocs_H2 + vocs_Heading */}
                    <ul>
                        <li>
                            <a href="/whatsapp/business-guide">WhatsApp Business Integration Guide</a>
                        </li>
                        <li>
                            <a href="/crm/automation-strategies">CRM Automation Best Practices</a>
                        </li>
                        <li>
                            <a href="/sales-marketing/lead-management">Lead Management Optimization</a>
                        </li>
                        <li>
                            <a href="/product-support/troubleshooting">Technical Support Resources</a>
                        </li>
                    </ul>
                </div>
                {/* Newsletter Signup */}
                <h2 className="vocs_H2 vocs_Heading">Connect With Us !</h2> {/* h2 gets vocs_H2 + vocs_Heading */}
                <NewsletterForm />
            </article>
        </div>
    );
};
