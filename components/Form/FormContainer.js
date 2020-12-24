import React from "react";
import PropTypes from "prop-types";
import { SafeAreaView, View, Text } from "react-native";
import tw from "tailwind-rn";
import * as defaultStyles from "../../const/defaultStyles";

// TODO: Take a good look into everything from Form (FormContainer and FormSubmitButton because they are so unorganized)

const FormContainer = ({ children, backgroundColor, SubmitButton }) => {
  return (
    <View
      style={tw(`flex-1${backgroundColor ? ` bg-${backgroundColor}-100` : ""}`)}
    >
      <SafeAreaView style={tw("flex-1")}>
        <View style={[defaultStyles.screen, tw(`flex-1`)]}>{children}</View>
        {<SubmitButton />}
      </SafeAreaView>
    </View>
  );
};

FormContainer.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  SubmitButton: PropTypes.func,
};

export default FormContainer;
