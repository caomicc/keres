import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

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
    title: 'Project Showcase',
    url: '/project-showcase',
  },
];

const NavLink = ({ title, url }: { title: string; url: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('pink.100', 'gray.700'),
    }}
    href={url}
  >
    {title}
  </Link>
);

export default function Navigation() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box w={'full'} position={'fixed'} top={0}>
        <Container maxW={'4xl'}>
          <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderWidth={2}
            borderColor={useColorModeValue('pink.200', 'gray.900')}
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
                <Button onClick={toggleColorMode}>
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
