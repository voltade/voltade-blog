// components/BlogCard.tsx
interface BlogCardProps {
    title: string;
    description: string;
    category: string;
    readTime: string;
    date: string;
    image: string;
    link: string;
    featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
    title,
    description,
    category,
    readTime,
    date,
    image,
    link,
    featured = false,
}) => {
    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case "product updates":
                return "#3b82f6";
            case "crm":
                return "#8b5cf6";
            case "sales & marketing":
                return "#10b981";
            case "product support":
                return "#f59e0b";
            case "grants":
                return "#ff5656ff";
            default:
                return "#6b7280";
        }
    };

    return (
        <article className={`blog-card ${featured ? "featured" : ""}`}>
            <div className="blog-card-image">
                <a href={link}>
                    <img src={image} alt={title} loading="lazy" />
                    <div className="blog-card-overlay">
                        <span className="category-badge" style={{ backgroundColor: getCategoryColor(category) }}>
                            {category}
                        </span>
                    </div>
                </a>
            </div>

            <div className="blog-card-content">
                <h3 className="blog-card-title">
                    <a href={link}>{title}</a>
                </h3>

                <p className="blog-card-description">{description}</p>

                <div className="blog-card-meta">
                    <span className="blog-card-date">{date}</span>
                    <span className="blog-card-divider">•</span>
                    <span className="blog-card-read-time">{readTime}</span>
                </div>

                <a href={link} className="blog-card-link">
                    Read More
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-labelledby="readMoreArrowTitle"
                    >
                        <title id="readMoreArrowTitle">→</title>
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </a>
            </div>

            <style>{`
                .blog-card {
                    background: white;
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    position: relative;
                }

                .blog-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
                }

                .blog-card.featured {
                    border: 2px solid #667eea;
                    box-shadow: 0 10px 15px -3px rgba(102, 126, 234, 0.1);
                }

                .blog-card.featured::before {
                    content: "⭐ Featured";
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    z-index: 2;
                }

                .blog-card-image {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                }

                .blog-card-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }

                .blog-card:hover .blog-card-image img {
                    transform: scale(1.05);
                }

                .blog-card-overlay {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                }

                .category-badge {
                    color: white;
                    padding: 0.375rem 0.75rem;
                    border-radius: 0.5rem;
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .blog-card-content {
                    padding: 1.5rem;
                }

                .blog-card-title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    line-height: 1.4;
                    margin-bottom: 0.75rem;
                }

                .blog-card-title a {
                    color: #1a202c;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .blog-card-title a:hover {
                    color: #667eea;
                }

                .blog-card-description {
                    color: #4a5568;
                    line-height: 1.6;
                    margin-bottom: 1rem;
                    display: -webkit-box;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .blog-card-meta {
                    display: flex;
                    align-items: center;
                    color: #718096;
                    font-size: 0.875rem;
                    margin-bottom: 1.25rem;
                }

                .blog-card-divider {
                    margin: 0 0.5rem;
                }

                .blog-card-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: #667eea;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.2s ease;
                }

                .blog-card-link:hover {
                    color: #764ba2;
                    gap: 0.75rem;
                }

                .blog-card-link svg {
                    transition: transform 0.2s ease;
                }

                .blog-card-link:hover svg {
                    transform: translateX(2px);
                }
            `}</style>
        </article>
    );
};
