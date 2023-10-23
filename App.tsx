import { SafeAreaProvider } from "react-native-safe-area-context";
import Calculator from "./components/Calculator";
import { StatusBar } from "react-native";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
export default function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("black");
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="default" backgroundColor={"#000"} />
      <Calculator />
    </SafeAreaProvider>
  );
}
