import type * as Contentful from 'contentful';

export interface TypeGalleryFields {
  internalName?: Contentful.EntryFields.Symbol;
  images?: Contentful.Asset[];
}

export type TypeGallery = Contentful.Entry<TypeGalleryFields>;
