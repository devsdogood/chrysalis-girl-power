import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "../../@types/generated/contentful";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { Card, Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/quotes.module.css";
import build from 'next/dist/build';

type OptionRenderFunction = (node: any, children: React.ReactChild[]) => JSX.Element;

const RenderQuote: OptionRenderFunction = (node, children) =>  (
  <Col xs={12}>
    <Card className={`${styles.quotes} my-2 p-4 border-4 fst-italic fw-normal`}>
      <blockquote className="blockquote ml-2 fs-6">
        {children}
      </blockquote>
    </Card>
  </Col>
);

const RenderParagraph: OptionRenderFunction = (node, children) => ( <div>{children}</div> );

const RenderHeading2: OptionRenderFunction = (node, children) => ( <h2 style={{color:"#808A25"}}>{children}</h2> );

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string): JSX.Element => <b className="fs-5" style={{color: "#808A25"}}>{text}</b>,
  },
  renderNode: {
    [BLOCKS.QUOTE]: RenderQuote, 
    [BLOCKS.PARAGRAPH]: RenderParagraph,
    [BLOCKS.HEADING_2]: RenderHeading2,
  }
};

type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({ entry }: ContentSectionProps) => (
  <>
    {/* @ts-ignore */}
    {documentToReactComponents(entry.fields.content, options)}
  </>
);

export default ContentSection;
