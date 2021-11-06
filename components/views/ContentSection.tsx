import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "../../@types/generated/contentful";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/quotes.module.css";


const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="fs-5" style={{color: "#808A25"}}>{text}</b>,
  },
  renderNode: {
    [BLOCKS.QUOTE]: (node, children) => (
      <Col xs={12}>
        <Card className={`${styles.quotes} my-2 p-4 border-4 fst-italic fw-normal`}>
          <blockquote className="blockquote ml-2 fs-6">
            {children}
          </blockquote>
        </Card>
      </Col>), 
    [BLOCKS.PARAGRAPH]: (node, children) => <div>{children}</div>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 style={{color:"#808A25"}}>{children}</h2>
  },
};

type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({ entry }: ContentSectionProps) => (
  <>
    {documentToReactComponents(entry.fields.content, options)}
  </>
);

export default ContentSection;
