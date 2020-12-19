import React from "react";
import PropTypes from "prop-types";
import SimpleHeaderButton from "../SimpleHeaderButton/SimpleHeaderButton";

const HamburgerHeaderButton = ({ navigation }) => (
  <SimpleHeaderButton
    title="Menu"
    iconName="menu"
    hybrid
    onPress={navigation.openDrawer}
  />
);

HamburgerHeaderButton.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default HamburgerHeaderButton;
