import { Box, Stack } from '@chakra-ui/react';

import type { TypePortfolioItem } from '@/api/generated-types';

export const PortfolioItem = ({ fields }: TypePortfolioItem) => {
  const { name, role, url, projectDate, description, screenshot } = fields;
  return (
    <Stack>
      <Box>{name}</Box>
      <Box>{role}</Box>
      <Box>{url}</Box>
      <Box>{projectDate}</Box>
      <Box>{description}</Box>
      <Box>{screenshot?.fields.file.url}</Box>
    </Stack>
  );
};
