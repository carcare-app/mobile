import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";

const HybridIonicons = ({ hybridName, size, color }) => (
  <Ionicons
    name={Platform.OS === "ios" ? `ios-${hybridName}` : `md-${hybridName}`}
    size={size}
    color={color}
  />
);

HybridIonicons.propTypes = {
  hybridName: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default HybridIonicons;
