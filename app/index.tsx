import { Text, View } from "react-native";
import { colours, spacing, typography } from "@/theme";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colours.background,
        padding: spacing.lg,
      }}
    >
      <Text
        style={[typography.title, { color: colours.primary, fontSize: 24 }]}
      >
        Motion Quest is alive!
      </Text>
    </View>
  );
}
