import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider as MainTheme } from "styled-components";
import { ThemeProvider } from "@material-ui/core/styles";
import { store } from "~/store";
import { theme, mainTheme } from "~/theme";
import CustomRouter from "~/routes/Router";

const App = () => {
  return (
    <Provider store={store}>
      <MainTheme theme={mainTheme}>
        <ThemeProvider theme={theme}>
          <CustomRouter />
        </ThemeProvider>
      </MainTheme>
    </Provider>
  );
};

export default App;
