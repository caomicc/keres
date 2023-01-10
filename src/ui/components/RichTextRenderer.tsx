/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-restricted-syntax */
import {
  AspectRatio,
  Box,
  Code,
  Divider,
  Heading,
  Icon,
  ListItem,
  OrderedList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Tr,
  UnorderedList,
} from '@chakra-ui/react';
import type { RenderNode } from '@contentful/rich-text-react-renderer';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { faLink, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
// import dynamic from 'next/dynamic';
import React from 'react';

import { ChakraNextLink } from './ChakraNextLink';

function slugifyString(string: string) {
  return string
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .toLowerCase();
}

const renderTableNode: RenderNode = {
  [BLOCKS.TABLE]: (_node, childrenTable) => childrenTable,
  // [BLOCKS.PARAGRAPH]: (_node, childrenParagraph) => childrenParagraph,
  [BLOCKS.TABLE_ROW]: (_node, childrenTableRow) => <Tr>{childrenTableRow}</Tr>,
  [BLOCKS.TABLE_CELL]: (_node, childrenTableCell) => (
    <Td>{childrenTableCell}</Td>
  ),
  [BLOCKS.TABLE_HEADER_CELL]: (_node, childrenTableHeaderCell) => (
    <Th>{childrenTableHeaderCell}</Th>
  ),
};

const renderInlineEmbeddedEntries: RenderNode = {
  [INLINES.EMBEDDED_ENTRY]: (node, _children) => {
    const { fields, sys } = node.data.target;
    const entryContentType = sys.contentType.sys.id || sys.id || '';
    switch (entryContentType) {
      case 'link':
        return (
          <ChakraNextLink
            target={fields.openInNewWindow ? '_blank' : ''}
            href={`${fields.href}`}
            fontWeight={700}
            color={'green.700'}
            rel={fields.openInNewWindow ? 'nofollow noreferrer' : ''}
          >
            {fields.label}
          </ChakraNextLink>
        );
      // case 'formattedText':
      //   return (
      //     <FormattedText
      //       style={fields.style}
      //       color={fields.color}
      //       text={fields.text}
      //     />
      //   );
      // case 'imageWithAiTags':
      //   return <ImageWithAiTags fields={fields} />;
      // case 'blogPost':
      //   return (
      //     <ChakraNextLink
      //       href={`/blog/${fields.slug}`}
      //       fontWeight={700}
      //       color={'green.700'}
      //     >
      //       {fields.pageTitle}
      //     </ChakraNextLink>
      //   );
      // case 'buttonLink':
      //   return (
      //     <Button
      //       as="a"
      //       variant={(fields as TypeButtonLinkFields).variant || 'navy'}
      //       href={(fields as TypeButtonLinkFields).href}
      //     >
      //       {(fields as TypeButtonLinkFields).label}
      //     </Button>
      //   );
      default:
        return null;
    }
  },
};

const renderBlockEmbeddedEntries: RenderNode = {
  [BLOCKS.EMBEDDED_ENTRY]: (node, _children) => {
    const { sys } = node.data.target;
    // const { fields, sys } = node.data.target;
    const entryContentType = sys.contentType.sys.id || sys.id || '';
    switch (entryContentType) {
      case 'Video':
        return <>Video</>;
      default:
        return null;
    }
  },
};
const renderBlockEmbeddedAsset: RenderNode = {
  [BLOCKS.EMBEDDED_ASSET]: (node) => {
    const { fields } = node.data.target;
    // if (renderNativeImg) {
    //   return (
    //     <Box>
    //       <img
    //         src={`https:${fields.file.url}`}
    //         alt={fields.description}
    //         width={fields.file.details.image.width}
    //         height={fields.file.details.image.height}
    //       />
    //     </Box>
    //   );
    // }
    return (
      <Box pos={'relative'}>
        <AspectRatio
          ratio={
            fields.file.details.image.width / fields.file.details.image.height
          }
          maxW={fields.file.details.image.width ?? 'full'}
          w={'full'}
          // margin={'0 auto'}
        >
          <Image
            src={`http:${fields.file.url}`}
            alt={fields.title}
            fill={true}
          />
        </AspectRatio>
      </Box>
    );
  },
};

export function getRichTextRenderOptions(
  _links: any,
  options: {
    renderH2Links?: any;
    renderMark?: any;
    renderNativeImg?: any;
    renderText?: any;
  }
) {
  const { renderH2Links } = options;
  // const { renderH2Links, renderNativeImg } = options;

  const renderNode: RenderNode = {
    [INLINES.HYPERLINK]: (node, children) => (
      <ChakraNextLink
        href={node.data.uri}
        target="_blank"
        rel="nofollow noreferrer"
      >
        {children}
      </ChakraNextLink>
    ),
    [BLOCKS.HR]: () => <Divider borderColor={'orange.500'} />,
    [BLOCKS.HEADING_1]: (_node, children) => (
      <Heading
        as={'span'}
        fontSize={{ base: '3xl', md: '4xl', lg: '3.5rem' }}
        lineHeight={1.3}
      >
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => {
      const slug = children || '';
      if (renderH2Links) {
        return (
          <Box>
            <Heading
              id={`${slugifyString(slug[0 as keyof typeof slug])}`}
              as={'h2'}
              fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
              lineHeight={1.3}
            >
              {children}{' '}
              <ChakraNextLink
                href={`#${slugifyString(slug[0 as keyof typeof slug])}`}
                aria-label={'Link Icon'}
              >
                <Icon
                  fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
                  as={FontAwesomeIcon}
                  icon={faLink}
                  color={'green.600'}
                />
              </ChakraNextLink>
            </Heading>
          </Box>
        );
      }
      return (
        <Heading
          as={'h2'}
          fontSize={{ base: '2xl', md: '3xl', lg: '5xl' }}
          lineHeight={1.3}
        >
          {children}
        </Heading>
      );
    },
    [BLOCKS.HEADING_3]: (_node, children) => (
      <Heading
        as={'h3'}
        fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
        lineHeight={1.3}
      >
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_4]: (_node, children) => (
      <Heading
        as={'h4'}
        fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
        lineHeight={1.3}
      >
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_5]: (_node, children) => (
      <Heading
        as={'h5'}
        fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
        lineHeight={1.3}
      >
        {children}
      </Heading>
    ),
    [BLOCKS.HEADING_6]: (_node, children) => (
      <Heading
        as={'h6'}
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        lineHeight={1.3}
      >
        {children}
      </Heading>
    ),
    [BLOCKS.PARAGRAPH]: (_node, children) => {
      const isEmptyChildren = children?.toString().trim() === '';
      if (isEmptyChildren) return null;
      return (
        <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>{children}</Text>
      );
    },
    [BLOCKS.QUOTE]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, childrenParagraph) => childrenParagraph,
          [BLOCKS.QUOTE]: (_node, childrenQuote) => childrenQuote,
        },
      });
      return (
        <Box pb={4}>
          <Icon
            fontSize={'7xl'}
            as={FontAwesomeIcon}
            icon={faQuoteLeft}
            color={'orange.300'}
          />
          <Text
            as="blockquote"
            pos={'relative'}
            zIndex={'10'}
            fontFamily={`'Roboto Slab', 'AvenirPro', sans-serif`}
            fontWeight={400}
            fontSize={'2xl'}
          >
            {transformedChildren}
          </Text>
        </Box>
      );
    },
    [BLOCKS.TABLE]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderMark: options.renderMark,
        renderNode: { ...renderTableNode, ...renderInlineEmbeddedEntries },
      });
      return (
        <TableContainer>
          <Table variant="simple">
            <Tbody>{transformedChildren}</Tbody>
          </Table>
        </TableContainer>
      );
    },

    [BLOCKS.UL_LIST]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, childrenParagraph) => childrenParagraph,
          [BLOCKS.UL_LIST]: (_node, childrenUlList) => (
            <UnorderedList
              mt={2}
              mb={6}
              pl={8}
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            >
              {childrenUlList}
            </UnorderedList>
          ),
          [INLINES.HYPERLINK]: (_node, childrenHyperlink) => (
            <ChakraNextLink
              fontWeight={700}
              color={'blue.700'}
              href={_node.data.uri}
              target="_blank"
              rel="nofollow noreferrer"
            >
              {childrenHyperlink}
            </ChakraNextLink>
          ),
        },
      });
      return transformedChildren;
    },

    [BLOCKS.OL_LIST]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.PARAGRAPH]: (_node, childrenParagraph) => childrenParagraph,
          [BLOCKS.OL_LIST]: (_node, childrenUlList) => (
            <OrderedList
              mt={2}
              mb={6}
              pl={8}
              fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
            >
              {childrenUlList}
            </OrderedList>
          ),
          [INLINES.HYPERLINK]: (_node, childrenHyperlink) => (
            <ChakraNextLink
              fontWeight={700}
              color={'blue.700'}
              href={_node.data.uri}
              target="_blank"
              rel="nofollow noreferrer"
            >
              {childrenHyperlink}
            </ChakraNextLink>
          ),
        },
      });
      return transformedChildren;
    },
    [BLOCKS.LIST_ITEM]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderMark: options.renderMark,
        renderNode: {
          [BLOCKS.UL_LIST]: (_node, _childrenUlList) => {
            const transformedChildren2 = documentToReactComponents(
              node as any,
              {
                renderMark: options.renderMark,
                renderNode: {
                  [BLOCKS.LIST_ITEM]: (_nodeLevel2, childrenListItemLevel2) => (
                    <ListItem fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
                      {childrenListItemLevel2}
                    </ListItem>
                  ),
                },
              }
            );
            return transformedChildren2;
          },
          [INLINES.HYPERLINK]: (_node, childrenHyperlink) => (
            <ChakraNextLink
              fontWeight={700}
              color={'blue.700'}
              href={_node.data.uri}
              target="_blank"
              rel="nofollow noreferrer"
            >
              {childrenHyperlink}
            </ChakraNextLink>
          ),
        },
      });
      return (
        <ListItem fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>
          {transformedChildren}
        </ListItem>
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderNode: renderInlineEmbeddedEntries,
      });
      return transformedChildren;
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, _children) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderNode: renderBlockEmbeddedEntries,
      });
      return <>{transformedChildren}</>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const transformedChildren = documentToReactComponents(node as any, {
        renderNode: renderBlockEmbeddedAsset,
      });
      return <>{transformedChildren}</>;
    },
  };

  return {
    renderMark: {
      [MARKS.BOLD]: (text: React.ReactNode) => (
        <Text as="b" fontWeight={700}>
          {text}
        </Text>
      ),
      [MARKS.ITALIC]: (text: React.ReactNode) => (
        <Text as="em" fontStyle={'italic'}>
          {text}
        </Text>
      ),
      [MARKS.UNDERLINE]: (text: React.ReactNode) => (
        <Text as="span" textDecoration={'underline'}>
          {text}
        </Text>
      ),
      [MARKS.CODE]: (text: React.ReactNode) => <Code>{text}</Code>,
    },
    renderNode,
  };
}

export const RichTextRenderer = (props: {
  richTextBodyField: any;
  renderH2Links: any;
}) => {
  const { richTextBodyField, renderH2Links } = props;

  return (
    <>
      {documentToReactComponents(
        richTextBodyField,
        getRichTextRenderOptions(richTextBodyField, { renderH2Links })
      )}
    </>
  );
};
