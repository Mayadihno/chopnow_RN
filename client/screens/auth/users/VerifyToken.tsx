import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "@/utils/constants/app.constants";
import fonts from "@/utils/themes/app.fonts";
import OTPTextInput from "react-native-otp-textinput";
import Button from "@/components/common/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "@/components/common/Toaster";
import { router } from "expo-router";
import { userApi } from "@/services/user";

export default function VerifyToken() {
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const otpInput = useRef(null);

  const loadEmail = async () => {
    const email = await AsyncStorage.getItem("userEmail");
    if (email) {
      const userEmail = JSON.parse(email);
      setEmail(userEmail);
    }
  };
  useEffect(() => {
    loadEmail();
  }, []);

  const hangleVerifyOTP = async () => {
    if (otp.length !== 6) {
      showToast({
        type: "danger",
        message: "Invalid OTP",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await userApi.verifyOtp({
        email,
        otp,
      });
      if (response.status === 200) {
        showToast({
          type: "success",
          message: response.message,
        });
        setLoading(false);
        router.replace("/user/login");
      }
    } catch (error: any) {
      setLoading(false);
      showToast({
        type: "danger",
        message: error.message,
      });
    }
  };
  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: "#f4f4f4" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: windowHeight(10),
        }}
      >
        <Image
          source={require("../../../assets/other/verify.png")}
          resizeMode="cover"
          style={{ height: windowHeight(250) }}
        />
      </View>
      <View
        style={{
          marginHorizontal: windowWidth(30),
          marginTop: windowHeight(20),
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.FONT30,
            fontFamily: fonts.poppins.semiBold,
          }}
        >
          Verify code
        </Text>
        <Text
          style={{
            fontSize: fontSizes.FONT20,
            fontFamily: fonts.inter.medium,
          }}
        >
          Enter the 6 digit code sent to your email
        </Text>
        <Text
          style={{
            fontSize: fontSizes.FONT18,
            fontFamily: fonts.inter.bold,
            paddingTop: windowHeight(2),
          }}
        >
          {email}
        </Text>
        <View style={styles.container}>
          <OTPTextInput
            ref={otpInput}
            handleTextChange={(otp) => setOtp(otp)}
            inputCount={6}
            autoFocus={true}
            textInputStyle={styles.otpBox}
          />
        </View>

        <View style={{}}>
          <Button
            title="Verify"
            height={windowHeight(35)}
            onPress={hangleVerifyOTP}
            loading={loading}
            disabled={loading}
            loadingText="Verifying..."
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: windowHeight(20),
  },
  otpBox: {
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 10,
    width: 50,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    color: "#000",
  },
});
