import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import { ChakraNextLink } from './ChakraNextLink';

const Links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Curriculum Vitae',
    url: '/curriculum-vitae',
  },
  {
    title: 'Gallery',
    url: '/gallery',
  },
  {
    title: 'Links',
    url: '/links',
  },
];

const NavLink = ({ title, url }: { title: string; url: string }) => (
  <ChakraNextLink
    px={2}
    py={1}
    fontWeight={700}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('pink.100', 'gray.700'),
    }}
    href={url}
  >
    {title}
  </ChakraNextLink>
);

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navBackgroundColor = useColorModeValue('white', 'gray.900');
  const navBorderColor = useColorModeValue('pink.200', 'gray.700');

  return (
    <>
      <Box w={'full'} position={'fixed'} top={0} zIndex={10}>
        <Container maxW={'2xl'} py={0} px={{ base: 4, md: 0 }}>
          <Box
            bg={navBackgroundColor}
            borderWidth={2}
            borderColor={navBorderColor}
            px={4}
            my={4}
            py={0}
            w={'full'}
            borderRadius={'2xl'}
          >
            <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
              <HStack spacing={4} alignItems={'center'}>
                {/* <Box>
                  <NavLink url={'/'} title={'👀'} />
                </Box> */}
                <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}
                >
                  {Links.map((link) => (
                    <NavLink
                      key={link.title}
                      url={link.url}
                      title={link.title}
                    />
                  ))}
                </HStack>
              </HStack>
              <Flex alignItems={'center'}>
                <Button rounded={'lg'} onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
              </Flex>
            </Flex>

            {isOpen ? (
              <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                  {Links.map((link) => (
                    <NavLink
                      key={link.title}
                      url={link.url}
                      title={link.title}
                    />
                  ))}
                </Stack>
              </Box>
            ) : null}
          </Box>
        </Container>
      </Box>
    </>
  );
}
