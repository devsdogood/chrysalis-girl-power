import { RenderMark } from "@contentful/rich-text-react-renderer";

export const RenderBold: RenderMark[string] = (text) => (
  <b className="fs-5" style={{ color: "#808A25" }}>
    {text}
  </b>
);
