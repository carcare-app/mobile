import React from "react";
import PropTypes from "prop-types";
import SimpleNavButton from "../SimpleNavButton/SimpleNavButton";

const HamburgerHeaderButton = ({ navigation }) => (
  <SimpleNavButton
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
