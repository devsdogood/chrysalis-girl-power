import React from 'react';
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IContentSection } from "../../@types/generated/contentful";
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { RenderEntry, RenderImage } from './RenderEntries';
import { RenderBold } from './RenderMarks';
import { RenderQuote, RenderParagraph, RenderHeading3, RenderHeading4, RenderHyperlink, RenderHR } from './RenderNodes';

const options = {
  renderMark: {
    [MARKS.BOLD]: RenderBold,
  },
  renderNode: {
    [BLOCKS.QUOTE]: RenderQuote, 
    [BLOCKS.PARAGRAPH]: RenderParagraph,
    [BLOCKS.HEADING_3]: RenderHeading3,
    [BLOCKS.HEADING_4]: RenderHeading4,
    [BLOCKS.EMBEDDED_ENTRY]: RenderEntry,
    [INLINES.EMBEDDED_ENTRY]: RenderEntry,
    [BLOCKS.EMBEDDED_ASSET]: RenderImage,
    [INLINES.HYPERLINK]: RenderHyperlink,
    [BLOCKS.HR]: RenderHR,
  }
};

type ContentSectionProps = { entry: IContentSection };

const ContentSection: React.FC<ContentSectionProps> = ({ entry }) => (
  <>
    {documentToReactComponents(entry.fields.content, options)}
  </>
);

export default ContentSection;
