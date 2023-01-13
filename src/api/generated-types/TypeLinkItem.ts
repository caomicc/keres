import type * as Contentful from 'contentful';

export interface TypeLinkItemFields {
  name?: Contentful.EntryFields.Symbol;
  url?: Contentful.EntryFields.Symbol;
}

export type TypeLinkItem = Contentful.Entry<TypeLinkItemFields>;
