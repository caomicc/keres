import { createClient } from 'contentful';

import { parsePage } from './pageParsers';

// create client
const client = createClient({
  space: process.env.CF_SPACE_ID ?? 'check_CF_SPACE_ID',
  accessToken:
    process.env.CF_DELIVERY_ACCESS_TOKEN ?? 'check_CF_DELIVERY_ACCESS_TOKEN',
  environment: process.env.CF_ENVIRONMENT || 'master',
});

// create preview client via ?preview=1 to see drafts (I think)
const previewClient = createClient({
  space: process.env.CF_SPACE_ID ?? 'check_CF_SPACE_ID',
  accessToken:
    process.env.CF_DELIVERY_ACCESS_TOKEN ?? 'check_CF_DELIVERY_ACCESS_TOKEN',
  host: 'preview.contentful.com',
  environment: process.env.CF_ENVIRONMENT || 'master',
});

// figure out which one to show
const getClient = (preview: boolean) => (preview ? previewClient : client);

// page type params
type GetPageParams = {
  slug: string;
  locale?: string;
  pageContentType?: string;
  preview?: boolean;
  type?: string;
};

// query function
const getPageQuery = (params: GetPageParams) => ({
  limit: 1,
  include: 5,
  locale: params.locale,
  content_type: params.pageContentType,
  'fields.slug': params.slug, // slug doesnt work?
  'fields.type': params.type,
});

export async function getPage(params: GetPageParams) {
  // get query from pagequery function
  const query = getPageQuery(params);
  // get entries from query
  const { items } = await getClient(!!params.preview).getEntries(query);
  // construct page
  const page = items[0];

  // parse page or return null
  return page ? parsePage(page) : null;
}

// gets type of page -- used in blog posts
type GetPagesOfTypeParams = {
  locale?: string;
  pageContentType: string;
  personType?: string;
  type?: string;
  preview?: boolean;
};

// gets type of page -- used in blog posts
export async function getPagesOfType(params: GetPagesOfTypeParams) {
  const { pageContentType, preview, locale } = params;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const client = getClient(!!preview);

  const { items: pages } = await client.getEntries({
    limit: 100,
    locale,
    'fields.type': params.type,
    content_type: pageContentType,
  });
  // parse page, or don't
  return pages ? pages.map((page) => parsePage(page)) : [];
}
