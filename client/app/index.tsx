import { fontSizes } from "@/utils/constants/app.constants";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        className="font-bold text-red-500"
        style={{ fontSize: fontSizes.FONT20 }}
      >
        Edit to edit this screen 1.
      </Text>
    </View>
  );
}
