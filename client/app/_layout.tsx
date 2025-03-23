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
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { Lobster_400Regular } from "@expo-google-fonts/lobster";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    InterRegular: Inter_400Regular,
    LobsterRegular: Lobster_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  const theme = {
    ...DefaultThemes,
    colors: {
      ...DefaultThemes.colors,
      primary: "#FF8C00",
      secondary: "yellow",
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
