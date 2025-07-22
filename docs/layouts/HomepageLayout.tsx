import "../css/homepage-layout.css";

interface HomepageLayoutProps {
    children: React.ReactNode;
}

export const HomepageLayout: React.FC<HomepageLayoutProps> = ({ children }) => {
    return (
        <div>
            <div className="homepage-layout">{children}</div>
            <footer className="custom_footer">
                <p>&copy; 2025 Voltade. All rights reserved.</p>
            </footer>
        </div>
    );
};
