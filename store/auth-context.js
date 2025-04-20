import { createContext, useState } from "react";

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

  function authenticate(token, userId) {
    setAuthToken(token);
    setUserId(userId);
  }

  function logout() {
    setAuthToken(null);
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

  console.log("user id:", userId);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
