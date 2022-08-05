import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import theme from "./theme/theme";
import store from "./core/app/store/store";

function AppUtillTest({ children }: any) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );
}

export default AppUtillTest;
