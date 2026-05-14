import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, radius, rem, space, type, zIndex } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const hero: S = {
  padding: 0,
  background: colors.pageBg,
};

export const card: S = {
  position: "relative",
  height: rem(835),
  width: "100%",
  margin: "0 auto",
  background: colors.darkCard,
  borderRadius: radius.xl,
  overflow: "hidden",
  padding: `${space[145]} ${space[32]} ${space[32]} ${space[32]}`,
};

export const bg: S = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: zIndex.base,
  backgroundImage: "url(/images/hero-portrait.png)",
  backgroundSize: "cover",
  backgroundPosition: "-27vw 50%",
  backgroundRepeat: "no-repeat",
};

export const content: S = {
  position: "relative",
  zIndex: zIndex.content,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const top: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[16],
  paddingLeft: layout.colNarrow,
  paddingRight: 0,
};

export const tabs: S = {
  display: "flex",
  gap: space[12],
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
  gap: space[8],
  alignItems: "flex-end",
  width: "100%",
};

export const status: S = {
  display: "flex",
  alignItems: "center",
  gap: space[8],
};

export const statusDot: S = {
  display: "inline-block",
  width: space[8],
  height: space[8],
  borderRadius: "50%",
  background: colors.accent,
};

export const statusText: S = {
  fontFamily: fontFamily.serif,
  fontSize: rem(14),
  lineHeight: rem(18.2),
  color: colors.onDarkPrimary,
};

export const role: S = {
  ...type.headlineSmallEmph,
  color: colors.onDarkPrimary,
  alignSelf: "flex-start",
};
