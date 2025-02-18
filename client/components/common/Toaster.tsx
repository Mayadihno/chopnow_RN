import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "@/utils/constants/app.constants";
import { Toast } from "react-native-toast-notifications";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info" | "danger";
  placement?: "top" | "bottom" | "center";
  duration?: number;
  animationType?: "slide-in" | "zoom-in" | undefined;
  style?: object;
  textStyle?: object;
}

export const showToast = ({
  message,
  type = "info",
  placement = "bottom",
  duration = 4000,
  animationType = "slide-in",
  style = {
    borderRadius: 10,
    paddingHorizontal: windowWidth(25),
    paddingVertical: windowHeight(15),
  },
  textStyle = {
    color: "#ffffff",
    fontSize: fontSizes.FONT16,
    fontWeight: "bold",
  },
}: ToastProps) => {
  Toast.show(message, {
    type,
    placement,
    duration,
    animationType,
    style,
    textStyle,
  });
};
