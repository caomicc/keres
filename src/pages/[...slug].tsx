/* eslint-disable @typescript-eslint/naming-convention */
import type { GetServerSideProps } from 'next';
import React from 'react';

import type { TypePage } from '@/api/generated-types';
import { BlockRenderer } from '@/ui/components/renderer';

import { getPage } from '../api/api';
import { PageContentTypes } from '../api/constants';
import { isPreviewEnabled } from '../api/preview';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import ErrorPage from './_error';

type LandingProps = {
  page: TypePage;
};

export default function Landing({ page }: LandingProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const { name, content } = page.fields;
  return (
    <>
      <Main
        meta={
          <Meta
            title={name || ''}
            description={''}
            // noFollow={seo.fields.noFollow === true}
            // noIndex={seo.fields.noIndex === true}
            // keywords={seo.fields.seoKeywords}
          />
        }
      >
        <BlockRenderer block={content} />
      </Main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
  locale,
}) => {
  const slug = params?.slug ?? '/';
  const preview = isPreviewEnabled(query);
  const formattedSlug = Array.isArray(slug)
    ? slug.join('/')
    : slug.replaceAll(',', '/');
  const page = await getPage({
    slug: formattedSlug,
    preview,
    locale,
    pageContentType: PageContentTypes.Page,
  });
  return {
    props: { page },
  };
};
