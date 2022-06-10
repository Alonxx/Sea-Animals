import { Home, Ocean, DDGame } from "./src/screens";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Ocean"
            component={Ocean}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="DDGame"
            component={DDGame}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
