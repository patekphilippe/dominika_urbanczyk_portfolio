import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, radius, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const hero: S = {
  padding: 0,
  background: colors.pageBg,
};

export const card: S = {
  position: "relative",
  height: 835,
  width: "100%",
  margin: "0 auto",
  background: colors.darkCard,
  borderRadius: `${radius.xl}px`,
  overflow: "hidden",
  padding: "145px 32px 32px 32px",
};

export const bg: S = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  backgroundImage: "url(/images/hero-portrait.png)",
  backgroundSize: "cover",
  backgroundPosition: "-27vw 50%",
  backgroundRepeat: "no-repeat",
};

export const content: S = {
  position: "relative",
  zIndex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const top: S = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  paddingLeft: "341px",
  paddingRight: 0,
};

export const tabs: S = {
  display: "flex",
  gap: "12px",
};

export const tab: S = {
  ...type.titleMedium,
  whiteSpace: "nowrap",
};

export const tabActive: S = {
  color: colors.onDarkPrimary,
};

export const tabDisabled: S = {
  color: colors.onDarkQuaternary,
};

export const headline: S = {
  ...type.hero,
  color: colors.onDarkPrimary,
};

export const bottom: S = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  alignItems: "flex-end",
  width: "100%",
};

export const status: S = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
};

export const statusDot: S = {
  display: "inline-block",
  width: 8,
  height: 8,
  borderRadius: "50%",
  background: colors.accent,
};

export const statusText: S = {
  fontFamily: fontFamily.serif,
  fontSize: "14px",
  lineHeight: "18.2px",
  color: colors.onDarkPrimary,
};

export const role: S = {
  ...type.headlineSmallEmph,
  color: colors.onDarkPrimary,
  alignSelf: "flex-start",
};
