import { Box, Container, Divider, Text } from '@chakra-ui/react';

import { ChakraNextLink } from './ChakraNextLink';

export default function Footer() {
  return (
    <>
      <Box w={'full'}>
        <Container maxW={'2xl'} padding={0}>
          <Box px={4} py={4} w={'full'}>
            <Divider mb={8} />
            <Text>
              🛠 Built with{' '}
              <ChakraNextLink fontWeight={700} href={'#'}>
                Next.js
              </ChakraNextLink>
              ,{' '}
              <ChakraNextLink fontWeight={700} href={'#'}>
                Contentful
              </ChakraNextLink>
              , and{' '}
              <ChakraNextLink fontWeight={700} href={'#'}>
                Vercel
              </ChakraNextLink>
              .
            </Text>
          </Box>
        </Container>
      </Box>
    </>
  );
}
