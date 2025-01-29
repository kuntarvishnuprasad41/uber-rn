import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
// import { StatusBar } from "expo-status-bar";
// import { useEffect } from "react";
import "react-native-reanimated";

import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { StatusBar, useColorScheme } from "react-native";
import { useFonts } from "expo-font";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
  });

  const [loaded] = useFonts({
    "Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
    "Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
    "Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <Stack>
        <Stack.Screen name={"index"} options={{ headerShown: false }} />
        <Stack.Screen name={"(root)"} options={{ headerShown: false }} />
        <Stack.Screen name={"(auth)"} options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SafeAreaView>
  );
}
