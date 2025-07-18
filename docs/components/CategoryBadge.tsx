interface CategoryBadgeProps {
    name: string;
    count: string;
    color: "blue" | "green" | "purple" | "orange" | "red";
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
            case "red":
                return {
                    background: "linear-gradient(135deg, #ff5656ff, #d11a09ff)",
                    iconColor: "#ff5656ff",
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#f59e0b"
                        >
                            <title>orange</title>
                            <path d="M440-120v-80h320v-284q0-117-81.5-198.5T480-764q-117 0-198.5 81.5T200-484v244h-40q-33 0-56.5-23.5T80-320v-80q0-21 10.5-39.5T120-469l3-53q8-68 39.5-126t79-101q47.5-43 109-67T480-840q68 0 129 24t109 66.5Q766-707 797-649t40 126l3 52q19 9 29.5 27t10.5 38v92q0 20-10.5 38T840-249v49q0 33-23.5 56.5T760-120H440Zm-80-280q-17 0-28.5-11.5T320-440q0-17 11.5-28.5T360-480q17 0 28.5 11.5T400-440q0 17-11.5 28.5T360-400Zm240 0q-17 0-28.5-11.5T560-440q0-17 11.5-28.5T600-480q17 0 28.5 11.5T640-440q0 17-11.5 28.5T600-400Zm-359-62q-7-106 64-182t177-76q89 0 156.5 56.5T720-519q-91-1-167.5-49T435-698q-16 80-67.5 142.5T241-462Z" />
                        </svg>
                    )}
                    {color === "red" && (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#EA3323"
                        >
                            <title>red</title>
                            <path d="m223-120-89-481q-37 7-65.5-17T40-680q0-33 23.5-56.5T120-760q33 0 56.5 23.5T200-680q0 14-4 26t-12 22q22 13 44.5 21.5T276-602q44 0 81.5-22t58.5-60l25-46q-19-11-30-29t-11-41q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 23-11 41t-30 29l25 46q21 38 58.5 60t81.5 22q25 0 47.5-8t44.5-21q-8-10-12-22.5t-4-26.5q0-33 23.5-56.5T840-760q33 0 56.5 23.5T920-680q0 38-28.5 62T826-601l-89 481H223Z" />
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
