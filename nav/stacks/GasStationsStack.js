import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HamburgerHeaderButton } from "../../components/nav";
import { GAS_STATIONS_SCREEN } from "../../const/navNames";
import { GasStationsScreen } from "../../screens";

const Stack = createStackNavigator();

const GasStationsStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => <HamburgerHeaderButton navigation={navigation} />,
    })}
  >
    <Stack.Screen
      name={GAS_STATIONS_SCREEN}
      component={GasStationsScreen}
      options={{ title: "Gas Stations" }}
    />
  </Stack.Navigator>
);

export default GasStationsStack;
