import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import Input from "../UI/Input";
import Button from "../UI/Button";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

  const {
    email: emailIsInvalid,
    confirmEmail: emailsDontMatch,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case "email":
        setEnteredEmail(enteredValue);
        break;
      case "confirmEmail":
        setEnteredConfirmEmail(enteredValue);
        break;
      case "password":
        setEnteredPassword(enteredValue);
        break;
      case "confirmPassword":
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.form}>
      <View>
        <Input
          label="Email Address"
          invalid={emailIsInvalid}
          textInputConfig={{
            onChangeText: updateInputValueHandler.bind(this, "email"),
            value: enteredEmail,
            keyboardType: "email-address",
          }}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            invalid={emailsDontMatch}
            textInputConfig={{
              onChangeText: updateInputValueHandler.bind(this, "confirmEmail"),
              value: enteredConfirmEmail,
              keyboardType: "email-address",
            }}
          />
        )}
        <Input
          label="Password"
          invalid={passwordIsInvalid}
          textInputConfig={{
            onChangeText: updateInputValueHandler.bind(this, "password"),
            value: enteredPassword,
            secureTextEntry: true,
          }}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            isinvalid={passwordsDontMatch}
            textInputConfig={{
              onChangeText: updateInputValueHandler.bind(
                this,
                "confirmPassword"
              ),
              value: enteredConfirmPassword,
              secureTextEntry: true,
            }}
          />
        )}
        <View style={styles.buttonContainer}>
          <Button onPress={submitHandler}>
            {isLogin ? "Log In" : "Sign Up"}
          </Button>
        </View>
      </View>
    </View>
  );
}

export default AuthForm;

const styles = StyleSheet.create({
  form: {
    marginTop: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 8,
  },
});
