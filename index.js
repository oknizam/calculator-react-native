import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { registerRootComponent } from "expo";

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

registerRootComponent(RNRedux);
