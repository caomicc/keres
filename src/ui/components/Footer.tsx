import {
  Box,
  Container,
  Divider,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { ChakraNextLink } from './ChakraNextLink';

export default function Footer() {
  const linkColor = useColorModeValue('pink.600', 'blue.200');

  return (
    <>
      <Box w={'full'}>
        <Container maxW={'2xl'} padding={0}>
          <Box px={4} py={4} w={'full'}>
            <Divider mb={8} />
            <Text>
              🛠 Built with{' '}
              <ChakraNextLink fontWeight={700} href={'#'} color={linkColor}>
                Next.js
              </ChakraNextLink>
              ,{' '}
              <ChakraNextLink fontWeight={700} href={'#'} color={linkColor}>
                Contentful
              </ChakraNextLink>
              , and{' '}
              <ChakraNextLink fontWeight={700} href={'#'} color={linkColor}>
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
