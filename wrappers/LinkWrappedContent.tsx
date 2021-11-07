import Link from "next/link";
import React from "react";
import { IImageWithLink } from "../@types/generated/contentful";
import BlockRenderer from "./BlockRenderer";

type LinkWrappedContentProps = {
  entry: IImageWithLink;
};

const LinkWrappedContent: React.FC<LinkWrappedContentProps> = ({ entry }) => {
  return (
    <Link href={entry.fields.link}>
      <a>
        {entry.fields.content.map((block) => (
          <BlockRenderer key={block.sys.id} block={block} />
        ))}
      </a>
    </Link>
  );
};

export default LinkWrappedContent;
