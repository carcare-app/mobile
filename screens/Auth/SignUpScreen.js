import React from "react";
import { View, Text } from "react-native";
import { FormContainer, FormSubmitButton } from "../../components/Form";

// TODO: Take a good look into this screen because it's so unorganized

const SignUpScreen = () => {
  return (
    <FormContainer
      backgroundColor="orange"
      SubmitButton={() => (
        <FormSubmitButton
          title="Sign Up"
          hybridIconName="add-circle"
          containerBgColor="orange"
          buttonMainColor="orange"
        />
      )}
    >
      <Text>Sign Up</Text>
    </FormContainer>
  );
};

export default SignUpScreen;
