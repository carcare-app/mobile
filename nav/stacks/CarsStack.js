import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SimpleHeaderButton } from "../../components";
import { CARS_SCREEN } from "../../const/navNames";
import { CarsScreen } from "../../screens";

const Stack = createStackNavigator();

const CarsStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => (
        <SimpleHeaderButton
          title="Menu"
          iconName="ios-menu"
          onPress={navigation.openDrawer}
        />
      ),
      headerRight: () => (
        <SimpleHeaderButton title="New Car" iconName="ios-add-circle" />
      ),
    })}
  >
    <Stack.Screen
      name={CARS_SCREEN}
      component={CarsScreen}
      options={{ title: "Cars" }}
    />
  </Stack.Navigator>
);

export default CarsStack;
