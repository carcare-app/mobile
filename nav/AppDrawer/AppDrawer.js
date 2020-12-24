import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Platform } from "react-native";
import { DrawerItemIcon } from "../../components/Nav";
import {
  DASHBOARD_STACK,
  CARS_STACK,
  GAS_STATIONS_STACK,
  PROFILE_STACK,
} from "../../const/navNames";
import {
  DashboardStack,
  CarsStack,
  GasStationsStack,
  ProfileStack,
} from "../AppStacks";

const Drawer = createDrawerNavigator();

const AppDrawer = () => (
  <Drawer.Navigator hideStatusBar={Platform.OS === "android"}>
    <Drawer.Screen
      name={DASHBOARD_STACK}
      component={DashboardStack}
      options={{
        drawerLabel: "Dashboard",
        drawerIcon: ({ size, color }) => (
          <DrawerItemIcon nameHybrid="speedometer" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name={CARS_STACK}
      component={CarsStack}
      options={{
        drawerLabel: "Cars",
        drawerIcon: ({ size, color }) => (
          <DrawerItemIcon nameHybrid="car" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name={GAS_STATIONS_STACK}
      component={GasStationsStack}
      options={{
        drawerLabel: "Gas Stations",
        drawerIcon: ({ size, color }) => (
          <DrawerItemIcon nameHybrid="flame" size={size} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name={PROFILE_STACK}
      component={ProfileStack}
      options={{
        drawerLabel: "Profile",
        drawerIcon: ({ size, color }) => (
          <DrawerItemIcon nameHybrid="person" size={size} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

export default AppDrawer;
