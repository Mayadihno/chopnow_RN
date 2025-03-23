import {
  ImageBackground,
  StatusBar,
  Text,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import {
  fontSizes,
  windowHeight,
  windowWidth,
} from "@/utils/constants/app.constants";
import color from "@/utils/themes/app.colors";
import Button from "@/components/common/button";
import { router } from "expo-router";

export default function Intro() {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <ImageBackground
        source={require("../../assets/other/intro.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      ></ImageBackground>

      <View style={styles.overlay}>
        <View>
          <Text style={styles.welcome}>Get Started with MunchXpress</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: windowWidth(30),
          }}
        >
          <Button
            backgroundColor={color.greenColor}
            title="Login as User"
            width={windowWidth(200)}
            height={windowHeight(35)}
            onPress={() => router.replace("/user/login")}
          />
          <Button
            title="Login as Vendor"
            width={windowWidth(200)}
            height={windowHeight(35)}
            onPress={() => router.replace("/")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    textAlign: "center",
    marginVertical: windowHeight(30),
    fontSize: fontSizes.FONT25,
  },
  container: {
    flex: 1,
    position: "relative",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: windowHeight(550),
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: windowHeight(160),
    backgroundColor: color.white,
    borderTopLeftRadius: windowWidth(10),
    borderTopRightRadius: windowWidth(10),
  },
});
