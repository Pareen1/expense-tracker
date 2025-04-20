import { useState, useContext } from "react";
import { Alert } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { signIn } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function SigninScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const { token, userId } = await signIn({ email, password });

      if (token && userId) {
        authCtx.authenticate(token, userId);
      } else {
        Alert.alert(
          "Login failed",
          "Could not retrieve session data. Please try again."
        );
      }
      setIsAuthenticating(false);
    } catch (error) {
      console.error("Sign in error:", error);
      setIsAuthenticating(false);
      Alert.alert(
        "Authentication failed",
        "Could not log you in. Please check your credentials."
      );
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Signing you in..." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default SigninScreen;
