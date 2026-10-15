// Rewards: the trophy cabinet of everything the child has earned.

import { ArtworkPlaceholder } from "@/components/ArtworkPlaceholder";
import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";

export default function RewardsScreen() {
  return (
    <Screen>
      <AppText variant="title">Trophy cabinet</AppText>
      <ArtworkPlaceholder source={null} label="Trophy cabinet illustration" />
      <AppText muted>
        Badges and treasures you earn on quests will appear here.
      </AppText>
    </Screen>
  );
}
