import { Box, Container } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import type { ReactNode } from 'react';

import Footer from '@/ui/components/Footer';
import Navigation from '@/ui/components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  navigation?: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <Box
    // bgGradient="linear(to-b, gray.50, gray.200)"
    >
      <SkipNavLink>Skip to content</SkipNavLink>
      <Navigation />
      <SkipNavContent />
      <Container maxW="2xl" pt={32} pb={6}>
        {props.meta}
        {props.children}
      </Container>
      <Footer />
    </Box>
  );
};

export { Main };
