import { router } from "expo-router";

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArtworkPlaceholder } from "@/components/ArtworkPlaceholder";

export default function HomeScreen() {
  return (
    <Screen>
      <AppText variant="title">Motion Quest is alive!</AppText>
      <ArtworkPlaceholder source={null} label="Quest map illustration" />
      <Card>
        <AppText variant="heading">First Card</AppText>
        <AppText muted>This is muted text.</AppText>
      </Card>
      <Button
        label="Begin quest"
        onPress={() => router.push("/session/balance-01")}
      />
      <Button
        label="Not today"
        variant="secondary"
        onPress={() => console.log("Maybe later")}
      />
      <Button
        label="Grown-ups"
        variant="secondary"
        onPress={() => router.push("/enter-pin")}
      />
    </Screen>
  );
}
