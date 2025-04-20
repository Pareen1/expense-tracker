import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ExpensesContextProvider from "./store/expenses-context";
import AuthContextProvider from "./store/auth-context";
import RootNavigation from "./navigation/RootNavigation"; // new file

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AuthContextProvider>
        <ExpensesContextProvider>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ExpensesContextProvider>
      </AuthContextProvider>
    </>
  );
}
