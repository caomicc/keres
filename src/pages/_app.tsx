// import '../styles/global.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import customTheme from '../ui/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={customTheme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
