import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeCopyFields {
    internalName?: Contentful.EntryFields.Symbol;
    copy?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeCopy = Contentful.Entry<TypeCopyFields>;
