import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  HeaderButtons,
  HeaderButton,
  Item,
} from "react-navigation-header-buttons";

const SimpleHeaderButton = ({
  title,
  iconName,
  onPress,
  IconComponent = Ionicons,
  iconSize = 24,
  iconColor = "rgb(0, 122, 255)",
}) => {
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
      <Item title={title} iconName={iconName} onPress={onPress} />
    </HeaderButtons>
  );
};

export default SimpleHeaderButton;
