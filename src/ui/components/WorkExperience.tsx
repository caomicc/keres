import { Box, Text, useColorModeValue } from '@chakra-ui/react';

import type { TypeWorkExperience } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export const WorkExperience = ({ fields }: TypeWorkExperience) => {
  const { jobTitle, employer, website, endDate } = fields;
  const linkColor = useColorModeValue('pink.600', 'gray.400');

  return (
    <Box>
      <Text lineHeight={8}>
        {endDate ? 'Previously' : 'Currently'} {jobTitle} @{' '}
        <ChakraNextLink
          fontWeight={'700'}
          color={linkColor}
          href={website || ''}
        >
          {employer}
        </ChakraNextLink>
      </Text>
    </Box>
  );
};
