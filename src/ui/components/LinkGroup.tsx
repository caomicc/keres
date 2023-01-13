import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  SimpleGrid,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

import type { TypeLinkGroup } from '@/api/generated-types';

import { ChakraNextLink } from './ChakraNextLink';
import { RichTextRenderer } from './RichTextRenderer';

export const LinkGroup = ({ fields }: TypeLinkGroup) => {
  const { title, description, sections } = fields;
  const favoriteColor = useColorModeValue('pink.600', 'blue.200');

  return (
    <Stack pt={8}>
      <Heading fontSize={'2xl'}>{title}</Heading>
      <RichTextRenderer richTextBodyField={description} renderH2Links={false} />
      <SimpleGrid columns={2} spacing={4}>
        <Box>
          <Box
            border={'2px solid'}
            borderColor={favoriteColor}
            rounded={'xl'}
            padding={2}
          >
            {sections?.map((section: any) => (
              <>
                {section.fields.isFavorite ? (
                  <Box key={section.id}>
                    <Box as="span" flex="1" textAlign="left" fontSize={'xl'}>
                      Favorites 💕
                    </Box>

                    {section.fields.URLs?.map((url: any) => (
                      <Box key={url.id}>
                        <ChakraNextLink href={url.fields.url}>
                          {url.fields.name}
                        </ChakraNextLink>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  ''
                )}
              </>
            ))}
          </Box>
        </Box>
        <Box>
          <Box padding={0}>
            <Accordion allowToggle>
              {sections?.map((section: any) => (
                <>
                  {section.fields.isFavorite ? (
                    <></>
                  ) : (
                    <AccordionItem key={section.id}>
                      <Heading>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            fontSize={'xl'}
                          >
                            {section.fields.title}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </Heading>
                      <AccordionPanel pb={4}>
                        {section.fields.URLs?.map((url: any) => (
                          <Box key={url.id}>
                            <ChakraNextLink href={url.fields.url}>
                              {url.fields.name}
                            </ChakraNextLink>
                          </Box>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                </>
              ))}
            </Accordion>
          </Box>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};
