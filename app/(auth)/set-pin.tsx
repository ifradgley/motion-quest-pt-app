// Parent gate: a grown-up sets their PIN to open the parent area.

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";

export default function SetPINScreen() {
  return (
    <Screen>
      <AppText variant="title">Set your PIN</AppText>
      <AppText muted>
        Choose a 4-digit PIN. You'll use it to open the parent area.
      </AppText>
    </Screen>
  );
}
