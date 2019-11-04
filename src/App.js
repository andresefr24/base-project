import React from "react";
import Button from "~/components/Button";
import { Provider } from "react-redux";
import Home from "~/pages/home";
import { store } from "~/store";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
