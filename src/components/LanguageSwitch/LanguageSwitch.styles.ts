import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const switchRoot: S = {
  display: "inline-flex",
  alignItems: "center",
  height: 40,
  padding: "4px",
  border: `${stroke.s1} solid ${colors.onDarkTertiary}`,
  borderRadius: "100px",
  gap: "2px",
};

export const btn: S = {
  height: 32,
  minWidth: 40,
  padding: "0 12px",
  borderRadius: "100px",
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
