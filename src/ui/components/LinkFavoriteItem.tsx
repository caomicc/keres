import { Box, Text } from '@chakra-ui/react';

import type { TypeLinkItem } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export type LinkItemProps = Pick<TypeLinkItem, 'fields'>;

export const LinkFavoriteItem = ({ fields }: LinkItemProps) => {
  const { url, name, description } = fields;
  return (
    <Box>
      <Text fontSize={'lg'}>
        <ChakraNextLink fontWeight={700} href={url || ''}>
          {name}
        </ChakraNextLink>{' '}
        {description ? `- ${description}` : ''}
      </Text>
    </Box>
  );
};
