import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IBlogPost } from "../../@types/generated/contentful";
import { Col, Container, Row } from "react-bootstrap";
import { imageBlur } from "../../utils/image-blur";
import Head from "next/head";

type BlogPostViewProps = {
  entry: IBlogPost;
};

const BlogPostView: React.FC<BlogPostViewProps> = ({ entry }) => {
  return (
    <>
      <Head>
        <title>{entry.fields.title}</title>
        <meta name="description" content={entry.fields.description} />
      </Head>
      <Container className="mt-5">
        <Row>
          <Col lg="12">
            <article>
              <header className="mb-4">
                <h1 className="fw-bolder mb-1">{entry.fields.title}</h1>
                <div className="text-muted fst-italic mb-2">
                  Posted on {entry.fields.published} by{" "}
                  {entry.fields.author.fields.fullName}
                </div>
              </header>
              {entry.fields.thumbnail && (
                <figure style={{ height: "20vh", position: "relative" }}>
                  <Image
                    blurDataURL={imageBlur(entry.fields.thumbnail.fields.file.url)}
                    placeholder='blur'
                    src={`https:${entry.fields.thumbnail.fields.file.url}`}
                    layout="fill"
                    alt={entry.fields.thumbnail.fields.description}
                    objectFit="contain"
                  />
                </figure>
              )}
              <section className="mb-5">
                {documentToReactComponents(entry.fields.content)}
              </section>
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BlogPostView;
