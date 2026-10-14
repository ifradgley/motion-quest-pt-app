export const typography = {
  title: { fontSize: 28, fontWeight: "700" as const },
  heading: { fontSize: 22, fontWeight: "700" as const },
  body: { fontSize: 18, fontWeight: "400" as const },
  small: { fontSize: 15, fontWeight: "400" as const },
};

export type TextVariant = keyof typeof typography;
