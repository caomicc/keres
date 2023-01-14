import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';

import type { TypeLinkGroup } from '@/api/generated-types';

import { LinkFavoriteSection } from './LinkFavoriteSection';
import { LinkWildCard } from './LinkWildCard';
import { RichTextRenderer } from './RichTextRenderer';

export type GroupProps = Pick<TypeLinkGroup, 'fields'>;

export const LinkGroup = ({ fields }: GroupProps) => {
  const { title, description, sections } = fields;

  return (
    <Stack pt={8}>
      <Heading fontSize={'2xl'}>{title}</Heading>
      <RichTextRenderer richTextBodyField={description} renderH2Links={false} />
      <SimpleGrid columns={2} spacing={4}>
        <Box>
          {sections?.map((section: any) => {
            return (
              <LinkFavoriteSection
                key={`favorites${section.sys.id}`}
                fields={section.fields}
              />
            );
          })}
        </Box>
        <Box>
          <Stack spacing={4}>
            {sections?.map((section: any) => {
              return <LinkWildCard key={section.sys.id} section={section} />;
            })}
          </Stack>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};
