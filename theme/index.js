import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      950: '#020617',
      900: '#0f172a',
    },
  },
});

export { ChakraProvider as ThemeProvider, theme };
