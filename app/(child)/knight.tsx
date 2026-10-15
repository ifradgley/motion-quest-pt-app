// My Knight: the dressing room, where the child names and dresses their knight.

import { ArtworkPlaceholder } from "@/components/ArtworkPlaceholder";
import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";

export default function KnightScreen() {
  return (
    <Screen>
      <AppText variant="title">My Knight</AppText>
      <ArtworkPlaceholder source={null} label="Your knight" height={400} />
      <AppText muted>
        Choose a name and wear the armour you've unlocked.
      </AppText>
    </Screen>
  );
}
