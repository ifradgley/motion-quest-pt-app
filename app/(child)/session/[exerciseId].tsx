import { router, useLocalSearchParams } from "expo-router";
import { Button } from "@/components/ui/Button";

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";

export default function SessionScreen() {
  const { exerciseId } = useLocalSearchParams<{ exerciseId: string }>();

  return (
    <Screen>
      <AppText variant="title">Quest</AppText>
      <AppText>Exercise: {exerciseId}</AppText>
      <Button
        label="Back to quests"
        variant="secondary"
        onPress={() => router.navigate("/")}
      />
    </Screen>
  );
}
