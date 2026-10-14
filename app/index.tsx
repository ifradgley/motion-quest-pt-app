import { Text, View } from "react-native";
import { colours } from "../src/theme/colours";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colours.background,
      }}
    >
      <Text style={{ color: colours.primary, fontSize: 24 }}>
        Motion Quest is alive!
      </Text>
    </View>
  );
}
