import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { external } from "@/utils/styles/external.style";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "@/utils/constants/app.constants";
import color from "@/utils/themes/app.colors";
import fonts from "@/utils/themes/app.fonts";
import CustomTextInput from "@/components/common/input";
import { Controller, useForm } from "react-hook-form";
import { Checkbox } from "react-native-paper";
import { commonStyles } from "@/utils/styles/commom.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "@/utils/styles/styles";
import { StyleSheet } from "react-native";

export default function Login() {
  const [checked, setChecked] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <KeyboardAvoidingView
      style={[external.fx_1]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View
        style={{
          marginTop: windowHeight(50),
          marginHorizontal: windowHeight(20),
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.FONT30,
            fontWeight: "600",
            fontFamily: fonts.poppins.medium,
          }}
        >
          Glad to have you back
        </Text>
        <Text
          style={{
            fontSize: fontSizes.FONT20,
            color: color.darkBorder,
            fontFamily: fonts.inter.regular,
          }}
        >
          Sign in to continue
        </Text>
      </View>
      <View
        style={{
          marginVertical: windowHeight(20),
          marginHorizontal: windowHeight(20),
        }}
      >
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email address",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label="Email Address"
              value={value}
              onChangeText={onChange}
              placeholder="Enter your email"
              keyboardType="email-address"
              hasError={!!errors.email}
              error={errors.email?.message}
              style={{ marginBottom: windowHeight(10) }}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          }}
          render={({ field: { onChange, value } }) => (
            <CustomTextInput
              label="Password"
              value={value}
              onChangeText={onChange}
              placeholder="Enter your password"
              secureTextEntry
              showToggleIcon
              hasError={!!errors.password}
              error={errors.password?.message}
            />
          )}
        />
        <View style={[commonStyles.flexAll, { marginTop: windowHeight(2) }]}>
          <View style={[commonStyles.flexHalf]}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => setChecked(!checked)}
              color={color.primary}
            />
            <Text
              style={{
                fontSize: fontSizes.FONT15,
                fontFamily: fonts.inter.regular,
              }}
            >
              Remember me
            </Text>
          </View>
          <Text
            style={{
              fontSize: fontSizes.FONT20,
              fontFamily: fonts.inter.regular,
              color: color.primary,
            }}
          >
            Forget Password?
          </Text>
        </View>
        <View
          style={[
            commonStyles.flexAll,
            {
              marginTop: windowHeight(2),
              gap: windowHeight(2),
            },
          ]}
        >
          <View style={style.border} />
          <Text style={style.text}>or sign in with</Text>
          <View style={style.border} />
        </View>
        <View
          style={[
            commonStyles.flexAll,
            {
              marginTop: windowHeight(10),
              gap: windowHeight(2),
            },
          ]}
        >
          <TouchableOpacity style={style.icon}>
            <MaterialCommunityIcons name="google" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <MaterialCommunityIcons name="facebook" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={style.icon}>
            <MaterialCommunityIcons name="apple" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  border: {
    borderWidth: 0.5,
    borderColor: "#737373",
    width: "32%",
  },
  text: {
    fontSize: fontSizes.FONT15,
    paddingHorizontal: windowWidth(5),
    fontFamily: fonts.inter.regular,
    textTransform: "uppercase",
    fontWeight: "500",
  },
  icon: {
    backgroundColor: color.primary,
    borderRadius: windowWidth(50),
    padding: windowWidth(10),
  },
});
