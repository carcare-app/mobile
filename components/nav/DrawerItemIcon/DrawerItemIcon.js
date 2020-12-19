import React from "react";
import PropTypes from "prop-types";
import { View, Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "tailwind-rn";

const DrawerItemIcon = ({ nameHybrid, size, color }) => {
  return (
    <View style={tw("w-6 items-center")}>
      <Ionicons
        name={Platform.OS === "ios" ? `ios-${nameHybrid}` : `md-${nameHybrid}`}
        size={size}
        color={color}
      />
    </View>
  );
};

DrawerItemIcon.propTypes = {
  nameHybrid: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default DrawerItemIcon;
