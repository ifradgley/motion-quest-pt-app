// The PIN screens, in a stack with a header and a back arrow.

import { Stack } from "expo-router";

import { colours } from "@/theme";

export default function AuthLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colours.surface },
          headerTintColor: colours.primary,
          contentStyle: { backgroundColor: colours.background },
        }}
      >
        <Stack.Screen name="enter-pin" options={{ title: "Grown-ups only" }} />
        <Stack.Screen name="set-pin" options={{ title: "Set a PIN" }} />
      </Stack>
    </>
  );
}
