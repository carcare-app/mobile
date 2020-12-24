import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const SimpleNavButton = ({
  title,
  iconName,
  onPress,
  IconComponent = Ionicons,
  iconSize = 24,
  iconColor = "rgb(0, 122, 255)",
  hybrid = false,
}) => {
  if (iconName.startsWith("-")) {
    hybrid = true;
    iconName = iconName.slice(1);
  }

  return (
    <HeaderButtons
      HeaderButtonComponent={(props) => (
        <HeaderButton
          IconComponent={IconComponent}
          iconSize={iconSize}
          color={iconColor}
          {...props}
        />
      )}
    >
      <Item
        title={title}
        iconName={
          IconComponent === Ionicons && hybrid
            ? Platform.OS === "ios"
              ? `ios-${iconName}`
              : `md-${iconName}`
            : iconName
        }
        onPress={onPress}
      />
    </HeaderButtons>
  );
};

SimpleNavButton.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  onPress: PropTypes.func,
  IconComponent: PropTypes.node,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  hybrid: PropTypes.bool,
};

export default SimpleNavButton;
