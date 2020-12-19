import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  HamburgerHeaderButton,
  SimpleHeaderButton,
} from "../../components/nav";
import { CARS_SCREEN } from "../../const/navNames";
import { CarsScreen } from "../../screens";

const Stack = createStackNavigator();

const CarsStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => <HamburgerHeaderButton navigation={navigation} />,
      headerRight: () => (
        <SimpleHeaderButton
          title="New Car"
          iconName="add-circle"
          hybrid
          onPress={() => console.log("NEW CAR")}
        />
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
