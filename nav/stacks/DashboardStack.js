import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleHeaderButton } from "../../components";
import { DASHBOARD_SCREEN } from "../../const/navNames";
import { DashboardScreen } from "../../screens";

const Stack = createStackNavigator();

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        <SimpleHeaderButton
          title="Menu"
          iconName="ios-menu"
          onPress={navigation.openDrawer}
        />
      ),
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
