import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleHeaderButton } from "../../components";
import { GAS_STATIONS_SCREEN } from "../../const/navNames";
import { GasStationsScreen } from "../../screens";

const Stack = createStackNavigator();

const GasStationsStack = () => (
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
      name={GAS_STATIONS_SCREEN}
      component={GasStationsScreen}
      options={{ title: "Gas Stations" }}
    />
  </Stack.Navigator>
);

export default GasStationsStack;
