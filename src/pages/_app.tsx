import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from "@mui/material";
import { theme } from "../../utils/theme";
import createEmotionCache from '../../utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import UserAuthProvider from '../../utils/userContext';
const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <UserAuthProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </UserAuthProvider>
    </CacheProvider>
  )
}
export default MyApp;
