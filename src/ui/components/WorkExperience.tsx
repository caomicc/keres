import { Box, Text } from '@chakra-ui/react';

import type { TypeWorkExperience } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';

export const WorkExperience = ({ fields }: TypeWorkExperience) => {
  const { jobTitle, employer, website, endDate } = fields;
  return (
    <Box>
      <Text lineHeight={8}>
        {endDate ? 'Previously' : 'Currently'} {jobTitle} @{' '}
        <ChakraNextLink
          fontWeight={'700'}
          color={'pink.600'}
          href={website || ''}
        >
          {employer}
        </ChakraNextLink>
      </Text>
    </Box>
  );
};
