import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HamburgerHeaderButton, SimpleNavButton } from "../../components/Nav";
import { PROFILE_SCREEN } from "../../const/navNames";
import { ProfileScreen } from "../../screens";

const Stack = createStackNavigator();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={({ navigation }) => ({
      headerLeft: () => <HamburgerHeaderButton navigation={navigation} />,
      headerRight: () => (
        <SimpleNavButton
          title="Sign Out"
          iconName="log-out"
          hybrid
          iconColor="#eb5a46"
          onPress={() => console.log("SIGN OUT")}
        />
      ),
    })}
  >
    <Stack.Screen
      name={PROFILE_SCREEN}
      component={ProfileScreen}
      options={{
        title: "Profile",
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
