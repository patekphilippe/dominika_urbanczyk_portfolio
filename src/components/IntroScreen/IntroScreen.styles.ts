import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, fontWeight, rem } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const wrap: S = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  background: colors.darkBg,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  willChange: "transform",
};

export const logo: React.CSSProperties = {
  color: colors.onDarkPrimary,
  fontFamily: fontFamily.sans,
  fontWeight: fontWeight.semibold,
  fontSize: rem(22),
  letterSpacing: rem(-1),
  lineHeight: rem(28),
  margin: 0,
  fontFeatureSettings: "'salt' 1",
};
