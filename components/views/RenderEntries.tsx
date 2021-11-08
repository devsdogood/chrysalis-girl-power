import { NodeRenderer } from "@contentful/rich-text-react-renderer";
import { Asset } from "contentful";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { ContentTypes, EmbeddedEntries } from "../../@types/contentTypes";
import { IContentRow } from "../../@types/generated/contentful";
import BlockRenderer from "../../wrappers/BlockRenderer";


type EntryRenderProps = {
  blocks: IContentRow["fields"]["items"];
};

export const RenderRow: React.FC<EntryRenderProps> = ({ blocks }) => (
  <Row className="resources-row">
    {blocks.map((block) => (
      <Col md={4} key={block.sys.id}>
        <div style={{ height: 200 }}>
          <BlockRenderer block={block} />
        </div>
      </Col>
    ))}
  </Row>
);

export const EntryRenderMap = {
  [ContentTypes.ContentRow]: RenderRow,
};

export const RenderEntry: NodeRenderer = (node) => {
  const nodeSysId = node.data.target.sys.contentType.sys.id as EmbeddedEntries;
  const Component = EntryRenderMap[nodeSysId];

  // @ts-ignore TODO: fix types for this
  return <Component blocks={node.data.target.fields.items} />;
};

export const RenderImage: NodeRenderer = (node) => {
  const image = node.data.target as Asset;

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Image
        src={`https:${image.fields.file.url}`}
        alt={image.fields.description}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};
