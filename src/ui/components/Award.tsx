import { Box, Text } from '@chakra-ui/react';

import type { TypeAward } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export const Award = ({ fields }: TypeAward) => {
  const { name, issuer, certificateUrl } = fields;
  return (
    <Box>
      <Text lineHeight={8}>
        <ChakraNextLink
          fontWeight={'700'}
          color={'pink.600'}
          href={certificateUrl || ''}
        >
          {name}
        </ChakraNextLink>{' '}
        by {issuer}
      </Text>
    </Box>
  );
};
