import { NodeRenderer } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { Col, Card } from "react-bootstrap";
import styles from "./ContentSection.module.css"

export const RenderQuote: NodeRenderer = (_, children) => (
  <Col xs={12}>
    <Card className={`${styles.quotes} my-2 p-4 border-4 fst-italic fw-normal`}>
      <blockquote className="blockquote ml-2 fs-6">{children}</blockquote>
    </Card>
  </Col>
);

export const RenderParagraph: NodeRenderer = (_, children) => (
  <p className="my-4">{children}</p>
);

export const RenderHeading3: NodeRenderer = (_, children) => (
  <h3 className={styles.name}>{children}</h3>
);

export const RenderHeading4: NodeRenderer = (_, children) => (
  <h4 className={styles.title}>{children}</h4>
);

export const RenderHR: NodeRenderer = (_, __) => <hr className="my-3" />;

export const RenderHyperlink: NodeRenderer = (node, children) => (
  <Link href={node.data.uri}>
    <a className="styled-link">{children}</a>
  </Link>
);
