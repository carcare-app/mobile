import React from "react";
import { View, Text } from "react-native";
import { FormContainer, FormSubmitButton } from "../../components/Form";

// TODO: Take a good look into this screen because it's so unorganized

const SignInScreen = () => {
  return (
    <FormContainer
      backgroundColor="green"
      SubmitButton={() => (
        <FormSubmitButton title="Sign In" hybridIconName="log-in" />
      )}
    >
      <Text>Sign In</Text>
    </FormContainer>
  );
};

export default SignInScreen;
