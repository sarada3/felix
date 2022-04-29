import { ThemeProvider } from "styled-components";
import { RouteProvider } from "./context";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";

import App from "./App";

function AppWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouteProvider>
        <App />
      </RouteProvider>
    </ThemeProvider>
  );
}

export default AppWrapper;
