import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "@/utils/constants/app.constants";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import fonts from "@/utils/themes/app.fonts";
import color from "@/utils/themes/app.colors";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import CustomTextInput from "@/components/common/input";
import Button from "@/components/common/button";
import { commonStyles } from "@/utils/styles/commom.style";

export default function Register() {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegisterValues>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  });
  const handleRegister = (data: RegisterValues) => {
    console.log(data);
  };
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={color.primary} />
      <SafeAreaView className="flex-1" style={{ backgroundColor: "#f4f4f4" }}>
        <Pressable
          style={{
            padding: windowHeight(8),
          }}
          onPress={() => router.back()}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </Pressable>
        <View
          style={{
            backgroundColor: "#e3f4e5",
            padding: windowHeight(10),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="sparkles-outline" size={24} color="#127125" />
          <Text
            style={{
              fontSize: fontSizes.FONT18,
              fontFamily: fonts.inter.semiBold,
              marginLeft: windowWidth(10),
            }}
          >
            Sign up and get up to 40% off your first order
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingHorizontal: windowWidth(22),
            paddingTop: windowHeight(15),
            marginBottom: windowHeight(50),
          }}
        >
          <Text
            style={{
              fontSize: fontSizes.FONT35,
              fontFamily: fonts.poppins.medium,
            }}
          >
            Create Account
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: windowWidth(10),
            }}
          >
            <Controller
              name="firstName"
              control={control}
              rules={{
                required: "First name is required",
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "Enter a valid name",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="First Name"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter your first name"
                  keyboardType="default"
                  hasError={!!errors.firstName}
                  error={errors.firstName?.message}
                  width={windowWidth(213)}
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              rules={{
                required: "Last name is required",
                pattern: {
                  value: /^[a-zA-Z ]+$/,
                  message: "Enter a valid name",
                },
              }}
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  label="Last Name"
                  value={value}
                  onChangeText={onChange}
                  placeholder="Enter your Last name"
                  keyboardType="default"
                  hasError={!!errors.lastName}
                  error={errors.lastName?.message}
                  width={windowWidth(213)}
                />
              )}
            />
          </View>
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
                style={{ marginVertical: windowHeight(15) }}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            rules={{
              required: "Phone numner is required",
              pattern: {
                value: /^[0-9]{11}$/,
                message: "Enter a valid phone number",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                label="Phone Number"
                value={value}
                onChangeText={onChange}
                placeholder="Enter your phone number"
                keyboardType="phone-pad"
                hasError={!!errors.phoneNumber}
                error={errors.phoneNumber?.message}
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
                style={{ marginVertical: windowHeight(15) }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: "Confirm Password is required",
              minLength: {
                value: 6,
                message: "Confirm Password must be at least 6 characters long",
              },
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            }}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                label="Confirm Password"
                value={value}
                onChangeText={onChange}
                placeholder="Enter your confirm password"
                secureTextEntry
                showToggleIcon
                hasError={!!errors.password}
                error={errors.confirmPassword?.message}
              />
            )}
          />
          <View style={{ marginVertical: windowHeight(20) }}>
            <Button
              title="Sign Up"
              height={windowHeight(35)}
              onPress={handleSubmit(handleRegister)}
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
              <MaterialCommunityIcons name="facebook" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={style.icon}>
              <MaterialCommunityIcons name="apple" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={style.dontHaveAccount}>
            <Text style={style.signUp}>
              Already have an account?{" "}
              <Text
                onPress={() => router.push("/user/login")}
                style={style.signUpDont}
              >
                Sign in
              </Text>
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  iconContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: windowHeight(12),
    gap: windowWidth(20),
  },
  dontHaveAccount: {
    alignItems: "center",
    marginTop: windowHeight(15),
    marginBottom: windowHeight(80),
  },
  signUpDont: {
    color: color.primary,
    fontSize: fontSizes.FONT18,
    fontFamily: fonts.inter.bold,
  },
  signUp: {
    textAlign: "center",
    color: "#959697",
    fontSize: fontSizes.FONT18,
    fontFamily: fonts.inter.regular,
  },
});
