// The root of the app. Everything else sits inside this.

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { colours } from "@/theme";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colours.background },
          headerTintColor: colours.primary,
          contentStyle: { backgroundColor: colours.background },
        }}
      >
        <Stack.Screen name="(child)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
