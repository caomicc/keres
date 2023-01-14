import type * as Contentful from 'contentful';

export interface TypeLinkItemFields {
  name?: Contentful.EntryFields.Symbol;
  url?: Contentful.EntryFields.Symbol;
  description?: Contentful.EntryFields.Text;
}

export type TypeLinkItem = Contentful.Entry<TypeLinkItemFields>;
