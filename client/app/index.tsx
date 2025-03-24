import { fontSizes } from "@/utils/constants/app.constants";
import { onBorad } from "@/utils/data/data";
import { styles } from "@/utils/styles/styles";
import color from "@/utils/themes/app.colors";
import fonts from "@/utils/themes/app.fonts";
import { router } from "expo-router";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
export default function Index() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F6F9F9" }}>
      <Swiper
        activeDotStyle={styles.activeStyle}
        removeClippedSubviews={true}
        paginationStyle={styles.paginationStyle}
      >
        {onBorad.map((silde: OnboardData, index: number) => (
          <View style={[styles.slideContainer]} key={index}>
            <Image style={styles.imageBackground} source={silde.image} />
            <View style={[styles.imageBgView]}>
              <ImageBackground
                resizeMode="stretch"
                style={styles.img}
                source={require("../assets/onboard/bgOnboarding.png")}
              >
                <Text style={styles.title}>{silde.title}</Text>
                <Text style={styles.description}>{silde.text}</Text>
              </ImageBackground>
            </View>
          </View>
        ))}
      </Swiper>

      <View className="w-[90%] mx-auto">
        <TouchableOpacity
          onPress={() => router.replace("/(routes)/intro")}
          style={styles.button}
        >
          <Text
            style={{
              fontSize: fontSizes.FONT20,
              fontWeight: "600",
              color: color.whiteColor,
              fontFamily: fonts.poppins.semiBold,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
