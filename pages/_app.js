import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider, theme } from '@/ui/theme';
import '@/ui/fonts';
import '@/styles/prism-night-owl.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
