import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import { isHexColor } from "ishex";
import tw, { getColor } from "tailwind-rn";
import HybridIonicons from "../HybridIonicons";
import * as defaultStyles from "../../const/defaultStyles";

// TODO: Take a good look into everything from Form (FormContainer and FormSubmitButton because they are so unorganized)

const FormSubmitButton = ({
  title,
  hybridIconName,
  iconSize = 30,
  containerBgColor = "green",
  buttonMainColor = "green",
  onPress = () => {},
  disabled = false,
}) => {
  return (
    <View style={tw(`p-4 bg-${containerBgColor}-100`)}>
      <View
        style={tw(
          `flex-row py-3 px-6 items-center justify-between rounded-xl bg-${buttonMainColor}-400`
        )}
      >
        <View style={tw("flex-row flex-1 justify-center")}>
          <Text style={tw(`text-lg font-bold text-${buttonMainColor}-900`)}>
            {title}
          </Text>
        </View>
        {hybridIconName && (
          <View style={tw("w-6 items-center")}>
            <HybridIonicons
              hybridName={hybridIconName}
              size={iconSize}
              color={getColor(`${buttonMainColor}-900`)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

FormSubmitButton.propTypes = {
  title: PropTypes.string,
  hybridIconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  containerBgColor: PropTypes.string,
  buttonBgColor: PropTypes.string,
  textColor: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

export default FormSubmitButton;
