import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, fontWeight, layout, rem, space, stroke, type, zIndex } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const footer: S = {
  background: colors.footerBg,
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

export const contentWrap: S = {
  position: "relative",
  zIndex: zIndex.content,
};

export const contentInner: S = {
  position: "relative",
  zIndex: zIndex.content,
};

export const top: S = {
  padding: `${space[100]} ${space[32]} ${space[200]}`,
  display: "flex",
  justifyContent: "center",
};

export const links: S = {
  width: layout.contentMax,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: space[4],
};

export const col1: S = {
  paddingRight: space[80],
};

export const email: S = {
  display: "inline-block",
  ...type.headlineLarge,
  color: colors.onLightPrimary,
  borderBottom: `${stroke.s2} solid ${colors.onLightPrimary}`,
  paddingBottom: space[6],
  textDecoration: "none",
  "&:hover": { color: colors.onLightSecondary },
};

export const col2: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[96],
  justifyContent: "center",
};

export const linkedin: S = {
  display: "inline-flex",
  alignItems: "center",
  gap: space[4],
  fontFamily: fontFamily.sans,
  fontSize: rem(22),
  fontWeight: fontWeight.medium,
  letterSpacing: rem(-0.88),
  lineHeight: rem(26.4),
  color: colors.onLightPrimary,
  alignSelf: "flex-start",
  textDecoration: "none",
  "&:hover": { color: colors.onLightSecondary },
};

export const signoff: S = {
  ...type.hero,
  color: colors.onLightPrimary,
  width: layout.colWide,
};

export const bottom: S = {
  padding: `${space[42]} ${space[36]}`,
  "& p": {
    ...type.bodyMedium,
    color: colors.onLightQuaternary,
    whiteSpace: "nowrap",
  },
};

export const imageTrailWrap: S = {
  position: "absolute",
  inset: 0,
  zIndex: zIndex.base,
  pointerEvents: "none",
};
