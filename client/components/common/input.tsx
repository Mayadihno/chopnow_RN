import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { fontSizes } from "@/utils/constants/app.constants";

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
    <View style={[styles.container, style]}>
      <TextInput
        label={label}
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
  container: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "white",
  },

  error: {
    marginTop: 4,
    color: "red",
    fontSize: fontSizes.FONT14,
  },
});

export default CustomTextInput;
