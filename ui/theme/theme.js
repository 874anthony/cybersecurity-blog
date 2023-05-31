import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      950: '#0a0a0a',
      900: '#171717',
      800: '#262626',
    },
    secondary: {
      900: '#0f172a',
      600: '#475569',
    },
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Source Code Pro Variable', sans-serif",
  },
});

export { ChakraProvider as ThemeProvider, theme };
