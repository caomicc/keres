import { Box, Tag, Text } from '@chakra-ui/react';

import type { TypeSkills } from '@/api/generated-types';

export const Skills = ({ fields }: TypeSkills) => {
  const { skills } = fields;
  const categoryTags = skills?.map((category: any) => (
    <Tag mr={2} my={1} key={category.id}>
      {category}
    </Tag>
  ));
  return <Box>{categoryTags ? <Text>{categoryTags}</Text> : <></>}</Box>;
};
