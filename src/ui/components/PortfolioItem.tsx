import { Box, Stack } from '@chakra-ui/react';

import type { TypePortfolioItem } from '@/api/generated-types';

export const PortfolioItem = ({ fields }: TypePortfolioItem) => {
  const { name, role, url, projectDate, description, screenshot } = fields;
  return (
    <Stack>
      <Box></Box>
    </Stack>
  );
};
