import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import tw, { getColor } from "tailwind-rn";
import { SimpleNavButton } from "../../components/Nav";
import { AUTH_SIGN_IN_SCREEN, AUTH_SIGN_UP_SCREEN } from "../../const/navNames";
import { AuthScreens } from "../../screens";

const BottomTab = createBottomTabNavigator();

const AuthBottomTab = () => (
  <BottomTab.Navigator initialRouteName={AUTH_SIGN_IN_SCREEN}>
    <BottomTab.Screen
      name={AUTH_SIGN_UP_SCREEN}
      component={AuthScreens.SignUp}
      options={{
        title: "Sign Up",
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={[tw("text-xs"), focused ? tw("text-orange-600") : { color }]}
          >
            Sign Up
          </Text>
        ),
        tabBarIcon: ({ focused, color, size }) => (
          <SimpleNavButton
            title="Sign In"
            iconName="-add-circle"
            iconColor={focused ? getColor("orange-600") : color}
            iconSize={size}
          />
        ),
      }}
    />
    <BottomTab.Screen
      name={AUTH_SIGN_IN_SCREEN}
      component={AuthScreens.SignIn}
      options={{
        title: "Sign In",
        tabBarLabel: ({ focused, color }) => (
          <Text
            style={[tw("text-xs"), focused ? tw("text-green-600") : { color }]}
          >
            Sign In
          </Text>
        ),
        tabBarIcon: ({ focused, color, size }) => (
          <SimpleNavButton
            title="Sign In"
            iconName="-log-in"
            iconColor={focused ? getColor("green-600") : color}
            iconSize={size}
          />
        ),
      }}
    />
  </BottomTab.Navigator>
);

export default AuthBottomTab;
