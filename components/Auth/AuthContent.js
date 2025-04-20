import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AuthForm from "./AuthForm";
import Button from "../UI/Button";
import { GlobalStyles } from "../../constants/styles";

function AuthContent({ isLogin, onAuthenticate }) {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    confirmEmail: false,
    password: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("Signup");
    } else {
      navigation.navigate("Login");
    }
  }

  function submitHandler(credentials) {
    let { email, confirmEmail, password, confirmPassword } = credentials;
    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const confirmEmailIsValid = email === confirmEmail;
    const confirmPasswordIsValid = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && !confirmEmailIsValid) ||
      (!isLogin && !confirmPasswordIsValid)
    ) {
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !confirmEmailIsValid,
        password: !passwordIsValid,
        confirmPassword: !confirmPasswordIsValid,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttonContainer}>
        <Button onPress={switchAuthModeHandler}>
          {isLogin ? "Sign Up" : "Sign In"}
        </Button>
      </View>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    marginTop: 64,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
});
