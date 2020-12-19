import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppDrawer from "./drawer";

const AppNavigator = () => (
  <NavigationContainer>
    <AppDrawer />
  </NavigationContainer>
);

export default AppNavigator;
