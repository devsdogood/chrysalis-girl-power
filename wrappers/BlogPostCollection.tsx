import { Container } from "react-bootstrap";

const BlogPostCollection: React.FC = ({ children }) => {
    return (
        <Container className="mt-5">
            {children}
        </Container>
    );
}

export default BlogPostCollection;
