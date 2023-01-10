import { Box, Stack } from '@chakra-ui/react';

import type { TypeWorkExperience } from '@/api/generated-types';

export const WorkExperience = ({ fields }: TypeWorkExperience) => {
  const { jobTitle, description, employer, website, startDate, endDate } =
    fields;
  return (
    <Stack>
      <Box>{jobTitle}</Box>
      <Box>{description}</Box>
      <Box>{employer}</Box>
      <Box>{website}</Box>
      <Box>{startDate}</Box>
      <Box>{endDate}</Box>
    </Stack>
  );
};
