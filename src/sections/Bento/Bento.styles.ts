import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, radius, rem, space, stroke, type, zIndex } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[36]} 0`,
};

export const grid: S = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: space[4],
  height: rem(600),
  width: rem(1368),
  margin: "0 auto",
};

export const left: S = {
  position: "relative",
  borderRadius: radius.md,
  overflow: "hidden",
  padding: space[48],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const bg: S = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: zIndex.base,
  backgroundImage: "url(/images/bento-loconi.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const overlay: S = {
  position: "absolute",
  inset: 0,
  background: "rgba(0, 0, 0, 0.37)",
  zIndex: zIndex.content,
};

export const leftContent: S = {
  position: "relative",
  zIndex: zIndex.overlay,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const metaTop: S = {
  display: "flex",
  justifyContent: "space-between",
  gap: space[32],
};

export const tagLabel: S = {
  ...type.titleMediumEmph,
  color: colors.onDarkPrimary,
};

export const tagDetail: S = {
  ...type.labelMedium,
  color: colors.onDarkSecondary,
  marginTop: space[4],
};

export const role: S = {
  textAlign: "right",
};

export const roleLabel: S = {
  ...type.labelMedium,
  color: colors.onDarkSecondary,
};

export const roleValue: S = {
  ...type.titleMediumEmph,
  color: colors.onDarkPrimary,
  marginTop: space[4],
};

export const title: S = {
  ...type.hero,
  color: colors.onDarkPrimary,
};

export const bottom: S = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const cta: S = {
  display: "inline-flex",
  alignItems: "center",
  height: rem(48),
  padding: `${space[10]} ${space[16]}`,
  border: `${stroke.s1} solid ${colors.darkOutline}`,
  borderRadius: radius.pill,
  textDecoration: "none",
  ...type.labelLarge,
  color: colors.onDarkPrimary,
  "&:hover": { background: "rgba(255, 255, 255, 0.06)" },
};

export const year: S = {
  ...type.labelMedium,
  color: colors.onDarkSecondary,
};

export const right: S = {
  background: colors.lightSurface,
  borderRadius: radius.md,
  padding: space[48],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const intro: S = {
  ...type.headlineMediumEmph,
  color: colors.onLightPrimary,
};

export const stats: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[24],
};

export const stat: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[4],
};

export const statValue: S = {
  ...type.displaySmall,
  color: colors.onLightPrimary,
};

export const statLabel: S = {
  ...type.bodyMedium,
  color: colors.onLightQuaternary,
};

export const quoteBlock: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[12],
};

export const quote: S = {
  ...type.bodyMediumEmph,
  color: colors.onLightPrimary,
};

export const author: S = {
  fontFamily: fontFamily.roboto,
  fontSize: rem(12),
  lineHeight: rem(16),
  letterSpacing: rem(0.5),
  color: colors.onLightTertiary,
};
