type ButtonProps = {
  title?: string;
  onPress?: () => void;
  width?: DimensionValue;
  backgroundColor?: string;
  textColor?: string;
  disabled?: boolean;
  height?: DimensionValue;
  loading?: boolean;
  loadingText?: string;
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
  width?: DimensionValue;
}

interface OnboardData {
  text: string;
  title: string;
  id: number;
  image: ImageSourcePropType;
}

interface LoginValues {
  email: string;
  password: string;
}

interface RegisterValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
