import { StyleSheet } from "react-native";
import color from "../themes/app.colors";
import { commonStyles } from "./commom.style";
import { fontSizes, windowHeight } from "../constants/app.constants";
import { external } from "./external.style";
import fonts from "../themes/app.fonts";

export const styles = StyleSheet.create({
  activeStyle: {
    height: "7%",
    backgroundColor: color.primary,
  },
  paginationStyle: {
    height: windowHeight(230),
  },
  slideContainer: {
    ...commonStyles.flexContainer,
  },
  imageBackground: {
    width: "100%",
    height: windowHeight(300),
    resizeMode: "contain",
  },
  imageBgView: {
    ...commonStyles.flexContainer,
    marginTop: windowHeight(40),
  },
  img: {
    width: "100%",
    height: windowHeight(200),
    marginBottom: windowHeight(45),
  },
  title: {
    ...commonStyles.mediumText23,
    marginTop: windowHeight(25),
    ...external.ti_center,
    fontSize: fontSizes.FONT28,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: fonts.poppins.semiBold,
  },
  description: {
    ...commonStyles.regularText,
    paddingTop: windowHeight(16),
    width: "75%",
    ...external.as_center,
    fontSize: fontSizes.FONT19,
    lineHeight: windowHeight(17),
    ...external.ti_center,
    fontFamily: fonts.inter.medium,
  },
  button: {
    width: "100%",
    height: windowHeight(34),
    borderRadius: windowHeight(5),
    backgroundColor: color.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    bottom: 30,
    position: "absolute",
  },
});
