import { Text, type TextProps } from "react-native";
import { colours, typography, type TextVariant } from "@/theme";

interface AppTextProps extends TextProps {
  variant?: TextVariant;
  muted?: boolean;
}

export function AppText({
  variant = "body",
  muted = false,
  style,
  ...rest
}: AppTextProps) {
  return (
    <Text
      style={[
        typography[variant],
        { color: muted ? colours.textMuted : colours.text },
        style,
      ]}
      {...rest}
    />
  );
}
