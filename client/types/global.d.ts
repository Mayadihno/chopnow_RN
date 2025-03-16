type ButtonProps = {
  title?: string;
  onPress?: () => void;
  width?: DimensionValue;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
};

interface PaperTextInputProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  mode?: "outlined" | "flat";
  error?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  showToggleIcon?: boolean;
  hasError?: boolean;
  showIcon?: boolean;
  iconName?: string;
  disable?: boolean;
  multiline?: boolean;
}

interface OnboardData {
  text: string;
  title: string;
  id: number;
  image: ImageSourcePropType;
}
