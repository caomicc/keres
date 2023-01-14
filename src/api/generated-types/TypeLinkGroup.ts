import type * as CFRichTextTypes from '@contentful/rich-text-types';
import type * as Contentful from 'contentful';

import type { TypeLinkItemFields } from './TypeLinkItem';
import type { TypeLinkSectionFields } from './TypeLinkSection';

export interface TypeLinkGroupFields {
  title?: Contentful.EntryFields.Symbol;
  description?: CFRichTextTypes.Block | CFRichTextTypes.Inline;
  sections?: Contentful.Entry<TypeLinkItemFields | TypeLinkSectionFields>[];
}

export type TypeLinkGroup = Contentful.Entry<TypeLinkGroupFields>;
