import { Box, Stack } from '@chakra-ui/react';

import type { TypeAward } from '@/api/generated-types';

export const Award = ({ fields }: TypeAward) => {
  const { name, issued, role, issuer, certificateUrl } = fields;
  return (
    <Stack>
      <Box>{name}</Box>
      <Box>{issued}</Box>
      <Box>{role}</Box>
      <Box>{issuer}</Box>
      <Box>{certificateUrl}</Box>
    </Stack>
  );
};
