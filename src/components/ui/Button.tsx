// A large, accessible button.

import { Pressable, StyleSheet } from "react-native";

import { colours, minTouchTarget, radius, spacing } from "@/theme";
import { AppText } from "./AppText";

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ label, onPress, variant = "primary" }: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        styles.base,
        isPrimary ? styles.primary : styles.secondary,
        pressed && styles.dimmed,
      ]}
    >
      <AppText
        style={{
          color: isPrimary ? colours.onPrimary : colours.primary,
          fontWeight: "700",
        }}
      >
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: minTouchTarget,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: colours.primary },
  secondary: {
    backgroundColor: colours.surface,
    borderWidth: 2,
    borderColor: colours.primary,
  },
  dimmed: { opacity: 0.6 },
});
