import { windowHeight } from "@/utils/constants/app.constants";
import { commonStyles } from "@/utils/styles/commom.style";
import { external } from "@/utils/styles/external.style";
import color from "@/utils/themes/app.colors";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  backgroundColor,
  textColor,
  disabled,
  height,
}) => {
  const widthNumber = width || "100%";
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          width: widthNumber,
          height: height,
          backgroundColor: backgroundColor || color.buttonBg,
        },
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          commonStyles.extraBold,
          { color: textColor || color.whiteColor },
        ]}
      >
        {title}
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
  },
});

export default Button;
