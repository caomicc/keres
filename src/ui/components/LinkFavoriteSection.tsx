import { Box, Highlight, Stack, useColorModeValue } from '@chakra-ui/react';

import type { TypeLinkSection } from '@/api/generated-types';

import { LinkFavoriteItem } from './LinkFavoriteItem';

export type SectionProps = Pick<TypeLinkSection, 'fields'>;

export const LinkFavoriteSection = ({ fields }: SectionProps) => {
  const { URLs, isFavorite } = fields;
  const favoriteColor = useColorModeValue('pink.600', 'gray.600');
  const highlightText = useColorModeValue('pink.800', 'gray.200');
  const highlightBackground = useColorModeValue('pink.100', 'gray.700');

  return (
    <>
      {isFavorite ? (
        <Box
          border={'2px solid'}
          borderColor={favoriteColor}
          rounded={'xl'}
          padding={4}
        >
          <Stack>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontSize={'xl'}
              display={'flex'}
            >
              <Highlight
                query={'Favorites'}
                styles={{
                  px: '4',
                  py: '1',
                  rounded: 'lg',
                  bg: highlightBackground,
                  color: highlightText,
                  fontWeight: 700,
                }}
              >
                Favorites
              </Highlight>
            </Box>
            {URLs?.map((url: any) => (
              <LinkFavoriteItem fields={url.fields} key={url.id} />
            ))}
          </Stack>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};
