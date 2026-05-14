import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, radius, rem, space, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const switchRoot: S = {
  display: "inline-flex",
  alignItems: "center",
  height: rem(40),
  padding: space[4],
  border: `${stroke.s1} solid ${colors.onDarkTertiary}`,
  borderRadius: radius.pill,
  gap: space[2],
};

export const btn: S = {
  height: rem(32),
  minWidth: rem(40),
  padding: `0 ${space[12]}`,
  borderRadius: radius.pill,
  textTransform: "none",
  ...type.labelLarge,
  color: colors.onLightQuaternary,
  transition: "background 120ms ease, color 120ms ease",
  "&:hover": { color: colors.onLightPrimary, background: "transparent" },
};

export const btnActive: S = {
  background: colors.onLightPrimary,
  color: colors.lightSurface,
  "&:hover": { background: colors.onLightPrimary, color: colors.lightSurface },
};
