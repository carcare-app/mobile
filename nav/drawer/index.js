import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  DASHBOARD_STACK,
  CARS_STACK,
  GAS_STATIONS_STACK,
} from "../../const/navNames";
import { DashboardStack, CarsStack, GasStationsStack } from "../stacks";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name={DASHBOARD_STACK}
        component={DashboardStack}
        options={{
          drawerLabel: "Dashboard",
          drawerIcon: ({ size, color }) => (
            <View style={{ width: 22, alignItems: "center" }}>
              <Ionicons name="ios-speedometer" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={CARS_STACK}
        component={CarsStack}
        options={{
          drawerLabel: "Cars",
          drawerIcon: ({ size, color }) => (
            <View style={{ width: 22, alignItems: "center" }}>
              <Ionicons name="ios-car" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={GAS_STATIONS_STACK}
        component={GasStationsStack}
        options={{
          drawerLabel: "Gas Stations",
          drawerIcon: ({ size, color }) => (
            <View style={{ width: 22, alignItems: "center" }}>
              <Ionicons name="ios-flame" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
