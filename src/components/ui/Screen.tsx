// Wraps every screen: background colour, padding, and scrolling for long content.

import type { ReactNode } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { colours, spacing } from "@/theme";

export function Screen({ children }: { children: ReactNode }) {
  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: colours.background },
  content: { padding: spacing.md, gap: spacing.md },
});
