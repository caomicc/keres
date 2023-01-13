import type * as Contentful from 'contentful';

import type { TypeLinkItemFields } from './TypeLinkItem';

export interface TypeLinkSectionFields {
  title?: Contentful.EntryFields.Symbol;
  URLs?: Contentful.Entry<TypeLinkItemFields>[];
  isFavorite?: Contentful.EntryFields.Boolean;
}

export type TypeLinkSection = Contentful.Entry<TypeLinkSectionFields>;
