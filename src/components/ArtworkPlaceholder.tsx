// Shows your illustration if there is one, or a labelled empty box if not.

import { Image, StyleSheet, View } from "react-native";

import { colours, radius } from "@/theme";
import { AppText } from "./ui/AppText";

interface ArtworkPlaceholderProps {
  source: number | null; // a require('...png') or null
  label: string; // describes the image for screen readers
  height?: number;
}

export function ArtworkPlaceholder({
  source,
  label,
  height = 180,
}: ArtworkPlaceholderProps) {
  if (source) {
    return (
      <Image
        source={source}
        accessibilityLabel={label}
        resizeMode="contain"
        style={[styles.box, { height }]}
      />
    );
  }

  return (
    <View
      style={[styles.box, styles.empty, { height }]}
      accessible
      accessibilityLabel={`${label} (not added yet)`}
    >
      <AppText variant="small" muted>
        {label} goes here
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { width: "100%", borderRadius: radius.md },
  empty: {
    backgroundColor: colours.placeholder,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: colours.border,
    alignItems: "center",
    justifyContent: "center",
  },
});
