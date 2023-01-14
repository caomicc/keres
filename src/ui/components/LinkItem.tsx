import { Box, useColorModeValue } from '@chakra-ui/react';

import type { TypeLinkItem } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export type LinkItemProps = Pick<TypeLinkItem, 'fields'>;

export const LinkItem = ({ fields }: LinkItemProps) => {
  const { name, url, description } = fields;
  const linkColor = useColorModeValue('gray.900', 'gray.300');

  return (
    <Box>
      <ChakraNextLink color={linkColor} fontWeight={700} href={url || ''}>
        {name}
      </ChakraNextLink>{' '}
      {description ? `- ${description}` : ''}
    </Box>
  );
};
