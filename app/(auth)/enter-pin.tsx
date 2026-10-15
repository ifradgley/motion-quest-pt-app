// Parent gate: a grown-up enters their PIN to open the parent area.

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";

export default function EnterPINScreen() {
  return (
    <Screen>
      <AppText variant="title">Enter your PIN</AppText>
      <AppText muted>This area is for parents and carers.</AppText>
    </Screen>
  );
}
