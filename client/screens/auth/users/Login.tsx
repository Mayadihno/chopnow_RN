import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { external } from "@/utils/styles/external.style";
import { fontSizes, windowHeight } from "@/utils/constants/app.constants";

export default function Login() {
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
            fontFamily: "PoppinsRegular",
          }}
        >
          Glad to have you back
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
