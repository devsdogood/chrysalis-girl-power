import React from 'react';
import { documentToReactComponents, NodeRenderer } from "@contentful/rich-text-react-renderer";
import { IContentRow, IContentSection } from "../../@types/generated/contentful";
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import Image from 'next/image';
import { Card, Row, Col } from "react-bootstrap";
import styles from "../../styles/quotes.module.css";
import BlockRenderer from '../../wrappers/BlockRenderer';
import { ContentTypes, EmbeddedEntries } from '../../@types/contentTypes';
import { Asset } from 'contentful';
import Link from 'next/link';

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
const RenderParagraph: OptionRenderFunction = (_, children) => ( <div>{children}</div> );
const RenderHeading2: OptionRenderFunction = (_, children) => ( <h2 style={{color:"#808A25"}}>{children}</h2> );

type EntryRenderProps = {
  blocks: IContentRow['fields']['items'];
};

const RenderRow: React.FC<EntryRenderProps> = ({ blocks }) => (
  <Row className="resources-row">
    {blocks.map((block) => (
      <Col md={4} key={block.sys.id}>
        <div style={{height: 200}}>
          <BlockRenderer block={block} />
        </div>
      </Col>
    ))}
  </Row>
);

const EntryRenderMap = {
  [ContentTypes.ContentRow]: RenderRow,
};

const entryRender: NodeRenderer = (node) => {
  const nodeSysId = node.data.target.sys.contentType.sys.id as EmbeddedEntries;
  const Component = EntryRenderMap[nodeSysId];

  // @ts-ignore TODO: fix types for this
  return <Component blocks={node.data.target.fields.items} />;
};

const renderImage: NodeRenderer = (node) => {
  const image = node.data.target as Asset;

  return (
    <div style={{position: 'relative', height: '100%'}}>
      <Image
        src={`https:${image.fields.file.url}`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

const renderHyperlink: NodeRenderer = (node, children) => (
  <Link href={node.data.uri}>
    <a>{children}</a>
  </Link>
);

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string): JSX.Element => <b className="fs-5" style={{color: "#808A25"}}>{text}</b>,
  },
  renderNode: {
    [BLOCKS.QUOTE]: RenderQuote, 
    [BLOCKS.PARAGRAPH]: RenderParagraph,
    [BLOCKS.HEADING_2]: RenderHeading2,
    [BLOCKS.EMBEDDED_ENTRY]: entryRender,
    [INLINES.EMBEDDED_ENTRY]: entryRender,
    [BLOCKS.EMBEDDED_ASSET]: renderImage,
    [INLINES.HYPERLINK]: renderHyperlink,
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
