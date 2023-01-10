import type * as Contentful from 'contentful';

import type { TypePageFields } from './generated-types';

export * from './generated-types';
export type TypePage = Contentful.Entry<TypePageFields>;
