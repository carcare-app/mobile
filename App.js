import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import store from "./store";
import AppNavigator from "./nav";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      <StatusBar theme="dark" />
    </>
  );
};

export default App;
