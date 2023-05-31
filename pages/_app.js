import { ThemeProvider, theme } from '@/ui/theme';
import '@/ui/fonts';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
