import { Box, Text } from '@chakra-ui/react';

import type { TypeEducation } from '@/api/generated-types';

export const Education = ({ fields }: TypeEducation) => {
  const { degree, institution, endDate } = fields;
  const graduated = new Date(endDate || '').getFullYear();

  return (
    <Box>
      <Text lineHeight={8}>
        {degree} @ {institution} in {graduated}
      </Text>
    </Box>
  );
};
