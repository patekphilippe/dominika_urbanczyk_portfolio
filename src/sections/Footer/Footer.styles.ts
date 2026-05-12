import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, fontWeight, layout, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const footer: S = {
  background: colors.footerBg,
  display: "flex",
  flexDirection: "column",
  position: "relative",
};

export const contentWrap: S = {
  position: "relative",
  zIndex: 1,
};

export const contentInner: S = {
  position: "relative",
  zIndex: 1,
};

export const top: S = {
  padding: "100px 32px 200px",
  display: "flex",
  justifyContent: "center",
};

export const links: S = {
  width: `${layout.contentMax}px`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4px",
};

export const col1: S = {
  paddingRight: "80px",
};

export const email: S = {
  display: "inline-block",
  ...type.headlineLarge,
  color: colors.onLightPrimary,
  borderBottom: `2px solid ${colors.onLightPrimary}`,
  paddingBottom: "6px",
  textDecoration: "none",
  "&:hover": { color: colors.onLightSecondary },
};

export const col2: S = {
  display: "flex",
  flexDirection: "column",
  gap: "96px",
  justifyContent: "center",
};

export const linkedin: S = {
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  fontFamily: fontFamily.sans,
  fontSize: "22px",
  fontWeight: fontWeight.medium,
  letterSpacing: "-0.88px",
  lineHeight: "26.4px",
  color: colors.onLightPrimary,
  alignSelf: "flex-start",
  textDecoration: "none",
  "&:hover": { color: colors.onLightSecondary },
};

export const signoff: S = {
  ...type.hero,
  color: colors.onLightPrimary,
  width: `${layout.colWide}px`,
};

export const bottom: S = {
  padding: "42px 36px",
  "& p": {
    ...type.bodyMedium,
    color: colors.onLightQuaternary,
    whiteSpace: "nowrap",
  },
};

export const imageTrailWrap: S = {
  position: "absolute",
  inset: 0,
  zIndex: 0,
  pointerEvents: "none",
};
