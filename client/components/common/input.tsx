import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { fontSizes, windowHeight } from "@/utils/constants/app.constants";
import color from "@/utils/themes/app.colors";
import fonts from "@/utils/themes/app.fonts";

const CustomTextInput: React.FC<PaperTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  mode = "outlined",
  error = "",
  style = {},
  inputStyle = {},
  showToggleIcon = false,
  hasError = false,
  showIcon = false,
  disable = false,
  multiline = false,
  iconName,
  ...props
}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);

  return (
    <View style={[style]}>
      {label && (
        <Text
          style={{
            fontSize: fontSizes.FONT18,
            marginVertical: windowHeight(2),
            color: hasError ? color.alertRed : color.darkBorder,
            fontFamily: fonts.poppins.medium,
          }}
        >
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={isSecure}
        keyboardType={keyboardType}
        disabled={disable}
        mode={mode}
        theme={{
          colors: {
            error: "#FF0000",
          },
        }}
        multiline={multiline}
        style={[styles.input]}
        error={!!error}
        right={
          showToggleIcon ? (
            <TextInput.Icon
              icon={isSecure ? "eye-off" : "eye"}
              onPress={() => setIsSecure(!isSecure)}
            />
          ) : null
        }
        left={showIcon && <TextInput.Icon icon={iconName || "default-icon"} />}
        {...props}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    fontFamily: fonts.poppins.medium,
  },

  error: {
    marginTop: 4,
    color: "red",
    fontSize: fontSizes.FONT14,
    fontFamily: fonts.poppins.regular,
  },
});

export default CustomTextInput;
