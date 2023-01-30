import { Box, Text, useColorModeValue } from '@chakra-ui/react';

import type { TypeAward } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export const Award = ({ fields }: TypeAward) => {
  const { name, issuer, certificateUrl } = fields;
  const linkColor = useColorModeValue('pink.600', 'gray.400');
  return (
    <Box>
      <Text lineHeight={8}>
        <ChakraNextLink
          fontWeight={'700'}
          color={linkColor}
          href={certificateUrl || ''}
        >
          {name}
        </ChakraNextLink>{' '}
        by {issuer}
      </Text>
    </Box>
  );
};
