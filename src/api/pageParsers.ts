import stringify from 'fast-safe-stringify';

import type { TypePage } from './generated-types';

export const parsePage = (page: unknown): TypePage => {
  // Kill circular references
  return JSON.parse(stringify(page)) as TypePage;
};
