import { Stack } from "expo-router";
import "../global.css";
import { ThemeProvider } from "@/utils/context/theme.context";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
