import { Entry } from "contentful";
import { IContentSection, IImageWithLink, IPage, IPageFields } from "./generated/contentful";

/**
 * `contentful-typescript-codegen` doesn't generate an enum of content types
 * so we do it manually here. Github issue at:
 * https://github.com/intercom/contentful-typescript-codegen/issues/54
 */
export enum ContentTypes {
    Author = 'author',
    BlogPost = 'blogPost',
    BlogPostCollection = 'blogPostCollection',
    ContentRow = 'contentRow',
    ContentSection = 'contentSection',
    LinkWrappedContent = 'imageWithLink',
    Mentor = 'mentor',
    MentorCollection = 'mentorCollection',
    NavigationItem = 'navigationItem',
    NavigationMenu = 'navigationMenu',
    Page = 'page',
};

/** Collections which map to single entries */
export const CollectionMap = {
    [ContentTypes.BlogPostCollection]: [
        ContentTypes.BlogPost,
    ],
    [ContentTypes.MentorCollection]: [
        ContentTypes.Mentor,
    ],
}

export type NonCollectionPageFields = IContentSection | IImageWithLink;

/** IDs of content types embeddable into `IContentSection` */
export type EmbeddedEntries = 'contentRow';

/** Get the fields from an array-like entry */
export type IEntryFieldsItem<T extends Entry<IPageFields | IPageFieldsItem['fields']>> = T['fields']['content'][number];

/** Top-level collections on the page (announcement collection, event calendar, etc). `IContentSection` is excluded since it isn't a collection. */
export type IPageFieldsItem = Exclude<IEntryFieldsItem<IPage>, NonCollectionPageFields>;

/** Child items on the page (content section, announcement, etc).*/
export type IPageItemFieldsItem = IEntryFieldsItem<IPageFieldsItem> | NonCollectionPageFields;

export const isIPage = (block: IPage | IPageFieldsItem | IPageItemFieldsItem): block is IPage => (block as IPage).sys?.contentType?.sys?.id === 'page';

export const isIPageFieldsItem = (block: IPageFieldsItem | IPageItemFieldsItem): block is IPageFieldsItem => Array.isArray((block as IPageFieldsItem).fields?.content);
