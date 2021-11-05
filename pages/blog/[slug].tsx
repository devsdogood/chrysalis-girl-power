import { ContentTypes } from "../../@types/contentTypes";
import { IBlogPostFields } from "../../@types/generated/contentful";
import BlogPostView from "../../components/views/BlogPostView";
import {
  getStaticPathsGeneric,
  getStaticPropsGeneric
} from "../../utils/next-static-utils";

export default BlogPostView;

export const getStaticPaths = getStaticPathsGeneric<IBlogPostFields>(
  ContentTypes.BlogPost
);

export const getStaticProps = getStaticPropsGeneric<IBlogPostFields>(
  ContentTypes.BlogPost
);
