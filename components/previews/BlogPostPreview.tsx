import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { IBlogPost } from "../../@types/generated/contentful";

type BlogPostPreviewProps = {
  entry: IBlogPost;
};

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ entry }) => {
  return (
    <Row>
      <Col md="2">
        <div style={{ position: "relative", height: "10rem" }}>
          {entry.fields.thumbnail && (
            <Card.Img
              as={Image}
              variant="top"
              src={`https:${entry.fields.thumbnail.fields.file.url}`}
              layout="fill"
              objectFit="contain"
              alt={entry.fields.thumbnail.fields.description}
            />
          )}
        </div>
      </Col>
      <Col>
        <Card.Body>
          <Card.Title>{entry.fields.title}</Card.Title>
          <Card.Text>{entry.fields.description}</Card.Text>
          <Link href={`/blog/${entry.fields.slug}`} passHref>
            <a className="styled-link">Read More</a>
          </Link>
        </Card.Body>
      </Col>
    </Row>
  );
};

export default BlogPostPreview;
