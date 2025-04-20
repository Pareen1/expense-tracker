import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({
  token: "",
  userId: "",
  isAuthenticated: false,
  authenticate: (token, userId) => {},
  logout: () => {},
  signup: (email, password) => {},
  login: (email, password) => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedUserId = await AsyncStorage.getItem("userId");

      if (storedToken && storedUserId) {
        setAuthToken(storedToken);
        setUserId(storedUserId);
      }
    }

    fetchToken();
  }, []);

  function authenticate(token, userId) {
    setAuthToken(token);
    setUserId(userId);
    AsyncStorage.setItem("token", token);
    AsyncStorage.setItem("userId", userId);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userId");
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    userId: userId,
    signup: (email, password) => {},
    login: (email, password) => {},
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
