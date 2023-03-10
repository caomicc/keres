/* eslint-disable @typescript-eslint/naming-convention */
import type { GetServerSideProps } from 'next';
import ErrorPage from 'next/error';
import React from 'react';

import { getPage } from '../api/api';
import { PageContentTypes } from '../api/constants';
import type { TypePage } from '../api/generated-types';
import { isPreviewEnabled } from '../api/preview';
import { Meta } from '../layouts/Meta';
import { Main } from '../templates/Main';
import { BlockRenderer } from '../ui/components/renderer';

type PageProps = {
  page: TypePage;
};

export default function Index({ page }: PageProps) {
  if (!page) {
    return <ErrorPage statusCode={404} />;
  }

  const { name, slug, content } = page.fields;
  return (
    <>
      <Main
        // navigation={navigation}
        meta={
          <Meta
            title={name || ''}
            description={slug || ''}
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
  const slug = String(params?.slug ?? 'home');
  const preview = isPreviewEnabled(query);
  const page = await getPage({
    slug,
    preview,
    locale,
    pageContentType: PageContentTypes.Page,
  });

  return {
    props: { page },
  };
};
