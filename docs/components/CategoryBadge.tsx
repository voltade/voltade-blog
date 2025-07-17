interface CategoryBadgeProps {
    name: string;
    count: string;
    color: "blue" | "green" | "purple" | "orange";
    description: string;
    href: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ name, count, color, description, href }) => {
    const getColorStyles = (color: string) => {
        switch (color) {
            case "blue":
                return {
                    background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
                    iconColor: "#3b82f6",
                };
            case "green":
                return {
                    background: "linear-gradient(135deg, #10b981, #047857)",
                    iconColor: "#10b981",
                };
            case "purple":
                return {
                    background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                    iconColor: "#8b5cf6",
                };
            case "orange":
                return {
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    iconColor: "#f59e0b",
                };
            default:
                return {
                    background: "linear-gradient(135deg, #6b7280, #4b5563)",
                    iconColor: "#6b7280",
                };
        }
    };

    const styles = getColorStyles(color);

    return (
        <div className="category-badge-card">
            <a href={href} className="category-link" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="category-icon" style={{ color: styles.iconColor }}>
                    {color === "blue" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <title>blue</title>
                            <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" />
                        </svg>
                    )}
                    {color === "green" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <title>green</title>
                            <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM4 5V19H20V5H4ZM6 7H18V9H6V7ZM6 11H18V13H6V11ZM6 15H18V17H6V15Z" />
                        </svg>
                    )}
                    {color === "purple" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <title>purple</title>
                            <path d="M20 22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13Z" />
                        </svg>
                    )}
                    {color === "orange" && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <title>orange</title>
                            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" />
                        </svg>
                    )}
                </div>

                <div className="category-content">
                    <h4 className="category-name">{name}</h4>
                    <p className="category-description">{description}</p>
                    <div className="category-count">
                        <span className="count-number" style={{ background: styles.background }}>
                            {count}
                        </span>
                        <span className="count-label">articles</span>
                    </div>
                </div>
            </a>

            <style>
                {`
                    .category-badge-card {
                        background: white;
                        border-radius: 1rem;
                        padding: 1.5rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        transition: all 0.3s ease;
                        cursor: pointer;
                        border: 1px solid #e2e8f0;
                    }

                    .category-badge-card:hover {
                        transform: translateY(-2px);
                        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                        border-color: ${styles.iconColor};
                    }

                    .category-icon {
                        margin-bottom: 1rem;
                    }

                    .category-content {
                        text-align: left;
                    }

                    .category-name {
                        font-size: 1.125rem;
                        font-weight: 700;
                        color: #1a202c;
                        margin-bottom: 0.5rem;
                    }

                    .category-description {
                        color: #4a5568;
                        font-size: 0.875rem;
                        line-height: 1.5;
                        margin-bottom: 1rem;
                    }

                    .category-count {
                        display: flex;
                        align-items: center;
                        gap: 0.5rem;
                    }

                    .count-number {
                        color: white;
                        padding: 0.25rem 0.75rem;
                        border-radius: 1rem;
                        font-size: 0.75rem;
                        font-weight: 600;
                    }

                    .count-label {
                        color: #718096;
                        font-size: 0.875rem;
                    }
                `}
            </style>
        </div>
    );
};
