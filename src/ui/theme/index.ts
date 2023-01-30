import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fonts from './fonts';

const colorMode: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  fonts,
  colors,
  colorMode,
  // components: {
  //   Button,
  // },
});

export default customTheme;
