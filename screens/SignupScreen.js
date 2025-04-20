import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signUp } from "../util/auth";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signUpHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, userId } = await signUp({ email, password });
      if (token && userId) {
        authCtx.authenticate(token, userId);
      } else {
        Alert.alert(
          "Almost there!",
          "Could not create user. Please check your credentials."
        );
      }
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert(
        "Authentication failed",
        "Could not create user. Please check your credentials."
      );
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
