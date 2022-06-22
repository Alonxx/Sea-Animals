import { Home, Ocean, DDGame, Lenguage } from "./src/screens";
import { NativeBaseProvider } from "native-base";

import { Route, Routes, NativeRouter } from "react-router-native";
import LottieView from "lottie-react-native";
import { LogBox } from "react-native";
import ignoreWarnings from "ignore-warnings";

ignoreWarnings("warn", ["ViewPropTypes", "[react-native-gesture-handler]"]);

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  "NativeBase: The contrast ratio of",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  "EventEmitter.removeListener",
]);

const App = () => {
  return (
    <NativeBaseProvider>
      <NativeRouter>
        <LottieView
          resizeMode="cover"
          style={{
            minHeight: "100%",
            minWidth: "100%",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
          autoPlay
          loop
          source={require("./src/assets/UI/ocean.json")}
        ></LottieView>
        <Routes>
          <Route path="/" element={<Lenguage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ocean" element={<Ocean />} />
          <Route path="/ddgame" element={<DDGame />} />
        </Routes>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
