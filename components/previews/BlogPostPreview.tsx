import Link from 'next/link'
import { IBlogPost } from "../../@types/generated/contentful";

type BlogPostPreviewProps = {
  entry: IBlogPost;
};

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ entry }) => {
  return (
    <p>
      {entry.fields.title} at slug{" "}
      <Link href={`/blog/${entry.fields.slug}`}>{entry.fields.slug}</Link>
    </p>
  );
};

export default BlogPostPreview;
