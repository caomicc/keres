import {
  Box,
  List,
  ListItem,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import type { TypeLinkSection } from '@/api/generated-types';

import { LinkItem } from './LinkItem';

export type SectionProps = Pick<TypeLinkSection, 'fields'>;

export const LinkSection = ({ fields }: SectionProps) => {
  const { title, URLs } = fields;
  const titleColor = useColorModeValue('pink.600', 'gray.100');

  return (
    <>
      <Box>
        <h2>
          <Box
            as="span"
            flex="1"
            textAlign="left"
            fontSize={'lg'}
            fontStyle={'italic'}
            color={titleColor}
          >
            {title}
          </Box>
        </h2>
        <Stack>
          <List spacing={1}>
            {URLs?.map((url: any) => (
              <ListItem key={url.id}>
                <LinkItem fields={url.fields} />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Box>
    </>
  );
};
