import { Box, Container } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import type { ReactNode } from 'react';

import Navigation from '@/ui/components/Navigation';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  navigation?: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <Box>
      <SkipNavLink>Skip to content</SkipNavLink>
      <Navigation />
      <SkipNavContent />
      <Container maxW="2xl" mt={32} mb={16}>
        {props.meta}
        {props.children}
      </Container>
    </Box>
  );
};

export { Main };
