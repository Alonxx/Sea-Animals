import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SSRProvider } from "@react-aria/ssr";
import { Ocean } from "./src/screens/Ocean";
import { NativeBaseProvider } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <Ocean />
    </NativeBaseProvider>
  );
};

export default App;
