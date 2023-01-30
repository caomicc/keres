import type { ThemeConfig } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

import colors from './colors';
import fonts from './fonts';

const config: ThemeConfig = {
  initialColorMode: 'dark', // 'dark' | 'light'
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  fonts,
  colors,
  config,
  // components: {
  //   Button,
  // },
});

export default customTheme;
