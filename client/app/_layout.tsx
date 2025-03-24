import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/utils/context/theme.context";
import {
  MD3LightTheme as DefaultThemes,
  PaperProvider,
} from "react-native-paper";
import { ToastProvider } from "react-native-toast-notifications";
import { StatusBar } from "react-native";
import color from "@/utils/themes/app.colors";
import { useFonts } from "expo-font";

import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

import { Lobster_400Regular } from "@expo-google-fonts/lobster";

import {
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,

    // Lobster
    Lobster_400Regular,

    // Inter
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  const theme = {
    ...DefaultThemes,
    colors: {
      ...DefaultThemes.colors,
    },
  };
  return (
    <ToastProvider>
      <ThemeProvider>
        <PaperProvider theme={theme}>
          <StatusBar barStyle="light-content" backgroundColor={color.primary} />
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
          </Stack>
        </PaperProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}
