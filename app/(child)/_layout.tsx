import { Tabs } from "expo-router";

import { colours } from "@/theme";

export default function ChildLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colours.surface },
        headerTintColor: colours.primary,
        tabBarActiveTintColor: colours.primary,
        tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
        tabBarStyle: { minHeight: 64 },
      }}
    >
      <Tabs.Screen name="index" options={{ title: "Quests" }} />
      <Tabs.Screen name="rewards" options={{ title: "Rewards" }} />
      <Tabs.Screen name="knight" options={{ title: "My Knight" }} />
      <Tabs.Screen
        name="session/[exerciseId]"
        options={{ href: null, title: "Quest" }}
      />
    </Tabs>
  );
}
