import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { NativeBaseProvider, View } from "native-base";
import { ThemeProvider } from "styled-components/native";
import designSystem from "./src/styles";
import Home from "./src/screens/Home";

const App = () => {
  const [loaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoSemiBold: require("./assets/fonts/Roboto-BlackItalic.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={designSystem}>
      <ThemeProvider
        theme={{ ...designSystem.colors, borderRadius: designSystem.radii }}
      >
        <SafeAreaView>
          <View mx={4} mt={2}>
            <Home />
          </View>
        </SafeAreaView>
      </ThemeProvider>
    </NativeBaseProvider>
  );
};

export default App;
