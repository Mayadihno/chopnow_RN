import {
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { windowHeight } from "@/utils/constants/app.constants";
import { commonStyles } from "@/utils/styles/commom.style";
import { external } from "@/utils/styles/external.style";
import color from "@/utils/themes/app.colors";
import fonts from "@/utils/themes/app.fonts";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  backgroundColor,
  textColor,
  disabled,
  height,
  loading,
  loadingText,
}) => {
  const widthNumber = width || "100%";

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: widthNumber,
          height: height || windowHeight(50),
          backgroundColor: backgroundColor || color.buttonBg,
          opacity: disabled || loading ? 0.7 : 1,
        },
      ]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading && (
        <ActivityIndicator
          style={{ marginRight: 10 }}
          size="large"
          color={textColor || color.whiteColor}
        />
      )}
      <Text
        style={[
          commonStyles.extraBold,
          {
            color: textColor || color.whiteColor,
            fontFamily: fonts.poppins.semiBold,
          },
        ]}
      >
        {loading ? loadingText : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.buttonBg,
    borderRadius: 6,
    ...external.ai_center,
    ...external.js_center,
    flexDirection: "row",
  },
});

export default Button;
