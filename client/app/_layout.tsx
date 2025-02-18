import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/utils/context/theme.context";
import {
  MD3LightTheme as DefaultThemes,
  PaperProvider,
} from "react-native-paper";
import { ToastProvider } from "react-native-toast-notifications";

export default function RootLayout() {
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
          <Stack />
        </PaperProvider>
      </ThemeProvider>
    </ToastProvider>
  );
}
