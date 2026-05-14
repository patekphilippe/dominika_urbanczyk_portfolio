import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, radius, rem, space, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const btnBase: S = {
  display: "inline-flex",
  alignItems: "center",
  gap: space[8],
  height: rem(48),
  padding: `0 ${space[20]}`,
  borderRadius: radius.full,
  textTransform: "none",
  ...type.labelLarge,
  transition: "background 120ms ease, color 120ms ease",
};

export const btnPrimary: S = {
  background: colors.accent,
  color: colors.darkBg,
  "&:hover": { background: "#ddff5e" },
};

export const btnGhost: S = {
  background: "transparent",
  color: colors.onDarkPrimary,
  border: `${stroke.s1} solid ${colors.darkOutline}`,
  "&:hover": { background: "rgba(255, 255, 255, 0.04)" },
};
