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
      <Button label="Begin quest" onPress={() => console.log("Quest begun!")} />
      <Button
        label="Not today"
        variant="secondary"
        onPress={() => console.log("Maybe later")}
      />
    </Screen>
  );
}
