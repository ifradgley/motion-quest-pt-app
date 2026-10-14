import { StyleSheet, View, type ViewProps } from "react-native";

import { colours, radius, spacing } from "@/theme";

export function Card({ style, ...rest }: ViewProps) {
  return <View style={[styles.card, style]} {...rest} />;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.surface,
    borderColor: colours.border,
    borderWidth: 1,
    borderRadius: radius.md,
    padding: spacing.md,
  },
});
