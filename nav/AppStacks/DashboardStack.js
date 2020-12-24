import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HamburgerHeaderButton } from "../../components/Nav";
import { DASHBOARD_SCREEN } from "../../const/navNames";
import { DashboardScreen } from "../../screens";

const Stack = createStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => <HamburgerHeaderButton navigation={navigation} />,
    })}
  >
    <Stack.Screen
      name={DASHBOARD_SCREEN}
      component={DashboardScreen}
      options={{
        title: "Dashboard",
      }}
    />
  </Stack.Navigator>
);

export default DashboardStack;
