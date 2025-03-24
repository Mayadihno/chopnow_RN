import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
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
import { StyleSheet } from "react-native";
import { ImageBackground } from "react-native";
import { StatusBar } from "react-native";
import Button from "@/components/common/button";

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

  const handleLogin = (data: LoginValues) => {
    console.log(data);
  };
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={style.container}>
        <ImageBackground
          source={require("../../../assets/other/userLogin.jpg")}
          style={style.bgImage}
          resizeMode="cover"
        >
          <View style={style.overlay} />
        </ImageBackground>
        <View style={style.textContainer}>
          <Text style={style.headerText}>Glad to have you back</Text>
          <Text style={style.textMain}>Sign in to continue</Text>
        </View>
      </View>
      <KeyboardAvoidingView
        style={[
          external.fx_1,
          {
            marginTop: windowHeight(30),
          },
        ]}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={style.scroll}>
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
            <View
              style={[
                commonStyles.flexAll,
                { marginVertical: windowHeight(10) },
              ]}
            >
              <View style={[commonStyles.flexHalf]}>
                <Checkbox
                  status={checked ? "checked" : "unchecked"}
                  onPress={() => setChecked(!checked)}
                  color={color.primary}
                />
                <Text style={style.remeber}>Remember me</Text>
              </View>
              <Pressable>
                <Text style={style.forgetPassword}>Forget Password?</Text>
              </Pressable>
            </View>
            <View style={{ marginBottom: windowHeight(10) }}>
              <Button
                title="Sign in"
                height={windowHeight(35)}
                onPress={handleSubmit(handleLogin)}
              />
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
              <Text style={style.text}>or Login in with</Text>
              <View style={style.border} />
            </View>
            <View style={style.iconContainer}>
              <TouchableOpacity style={style.icon}>
                <MaterialCommunityIcons name="google" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={style.icon}>
                <MaterialCommunityIcons
                  name="facebook"
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>
              <TouchableOpacity style={style.icon}>
                <MaterialCommunityIcons name="apple" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.dontHaveAccount}>
            <Text style={style.signUp}>
              Don't have an account?{" "}
              <Text style={style.signUpDont}>Sign up</Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
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
  signUp: {
    textAlign: "center",
    color: "#959697",
    fontSize: fontSizes.FONT18,
    fontFamily: fonts.inter.regular,
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: windowHeight(100),
    borderBottomRightRadius: windowWidth(10),
    borderBottomLeftRadius: windowWidth(10),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderBottomRightRadius: windowWidth(10),
    borderBottomLeftRadius: windowWidth(10),
  },
  textContainer: {
    position: "absolute",
    marginHorizontal: windowHeight(20),
    marginTop: windowHeight(100),
  },
  container: {
    position: "relative",
    overflow: "hidden",
    borderBottomRightRadius: windowWidth(10),
    borderBottomLeftRadius: windowWidth(10),
  },
  bgImage: {
    height: windowHeight(200),
    width: "100%",
  },
  headerText: {
    fontSize: fontSizes.FONT32,
    fontFamily: fonts.poppins.semiBold,
    color: color.white,
  },
  textMain: {
    fontSize: fontSizes.FONT22,
    color: color.white,
    fontFamily: fonts.inter.medium,
  },
  scroll: {
    marginBottom: windowHeight(20),
    marginHorizontal: windowHeight(20),
  },
  remeber: {
    fontSize: fontSizes.FONT17,
    fontFamily: fonts.inter.regular,
  },
  forgetPassword: {
    fontSize: fontSizes.FONT20,
    fontFamily: fonts.inter.medium,
    color: color.primary,
  },
  iconContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: windowHeight(12),
    gap: windowWidth(20),
  },
  dontHaveAccount: {
    position: "absolute",
    bottom: windowHeight(20),
    left: 0,
    right: 0,
    alignItems: "center",
  },
  signUpDont: {
    color: color.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: fonts.inter.bold,
  },
});
