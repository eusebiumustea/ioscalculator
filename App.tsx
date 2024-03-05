import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform, StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { CalculatorUI } from "./components";
export default function App() {
  useEffect(() => {
    async function setDarkNavBar() {
      if (Platform.OS === "android") {
        NavigationBar.setBackgroundColorAsync("black");
      }
    }
    setDarkNavBar();
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor={"#000"} />
      <CalculatorUI />
    </SafeAreaProvider>
  );
}
