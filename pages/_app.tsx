import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import store from '../core/app/store/store';
import GlobalStyle from '../theme/globalStyle';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
export default MyApp;
