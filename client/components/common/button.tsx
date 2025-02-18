import { windowHeight } from "@/utils/constants/app.constants";
import { commonStyles } from "@/utils/styles/commom.style";
import { external } from "@/utils/styles/external.style";
import color from "@/utils/themes/app.colors";
import { Pressable, StyleSheet, Text } from "react-native";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  backgroundColor,
  textColor,
  disabled,
}) => {
  const widthNumber = width || "100%";
  return (
    <Pressable
      style={[
        styles.container,
        {
          width: widthNumber,
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
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.buttonBg,
    height: windowHeight(40),
    borderRadius: 6,
    ...external.ai_center,
    ...external.js_center,
  },
});

export default Button;
