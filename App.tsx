import { Home, Ocean, DDGame, Lenguage } from "./src/screens";
import { NativeBaseProvider } from "native-base";

import { Route, Routes, NativeRouter } from "react-router-native";
import LottieView from "lottie-react-native";

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
          }}
          autoPlay
          loop
          source={require("./src/assets/UI/ocean.json")}
        >
          <Routes>
            <Route path="/" element={<Lenguage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ocean" element={<Ocean />} />
            <Route path="/ddgame" element={<DDGame />} />
          </Routes>
        </LottieView>
      </NativeRouter>
    </NativeBaseProvider>
  );
};

export default App;
