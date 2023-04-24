
import { ThemeProvider, DefaultTheme } from "@react-navigation/native";

import {
  // Import `SplashScreen` from `expo-router` instead of `expo-splash-screen`
  SplashScreen,

  // This example uses a basic Layout component, but you can use any Layout.
  Slot,
} from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useFonts, Inter_500Medium } from "@expo-google-fonts/inter";
import { Provider } from "../context/auth";


export default function RootLayout() {
  // Load the font `Inter_500Medium`
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
  });


  if (!fontsLoaded) {
    // The native splash screen will stay visible for as long as there
    // are `<SplashScreen />` components mounted. This component can be nested.

    return (
      <SplashScreen />
    )
  }

  // Render the children routes now that all the assets are loaded.
  return (
    // Setup the auth context and render our layout inside of it.
    <SafeAreaProvider>
      <ThemeProvider value={DefaultTheme}>
        <Provider>
          <Slot />
        </Provider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}