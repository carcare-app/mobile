import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppDrawer from "./AppDrawer/AppDrawer";
import AuthBottomTab from "./AuthBottomTab/AuthBottomTab";

const AppNavigator = () => {
  const user = useSelector((state) => !!state.user);

  return (
    <NavigationContainer>
      {user ? <AppDrawer /> : <AuthBottomTab />}
    </NavigationContainer>
  );
};

export default AppNavigator;
