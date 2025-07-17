import "../css/homepage-layout.css";

interface HomepageLayoutProps {
    children: React.ReactNode;
}

export const HomepageLayout: React.FC<HomepageLayoutProps> = ({ children }) => {
    return <div className="homepage-layout">{children}</div>;
};
