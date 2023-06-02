import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      950: '#0a0a0a', // From TailwindCSS Colors
      900: '#171717',
      800: '#262626',
    },
    secondary: {
      950: '#3b0764', // From TailwindCSS Colors
      500: '#a855f7',
    },
    gray: {
      200: '#f1f3f5', // From OpenColor
    },
    slateblue: {
      900: '#0f172a', // From TailwindCSS Colors
      600: '#475569',
    },
  },
  fonts: {
    heading: "'Open Sans', sans-serif",
    body: "'Source Code Pro Variable', sans-serif",
  },
});

export { ChakraProvider as ThemeProvider, theme };
