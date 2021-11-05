import { IBlogPost } from "../../@types/generated/contentful";

type BlogPostViewProps = {
    entry: IBlogPost;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ entry }) => {
    return (
        <>
            <b>Full blog post!</b>{' '}{entry.fields.title} at slug {entry.fields.slug}
        </>
    );
};

export default BlogPostView;
