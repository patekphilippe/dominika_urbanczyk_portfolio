import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, radius, rem, space, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} 0 0`,
};

export const card: S = {
  background: colors.darkSurface,
  borderRadius: radius.xl,
  padding: `${space[144]} ${space[32]}`,
  display: "flex",
  flexDirection: "column",
  gap: space[48],
};

export const top: S = {
  width: layout.contentMax,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} 1fr`,
  gap: space[4],
  alignItems: "start",
};

export const headline: S = {
  ...type.hero,
  color: colors.onDarkPrimary,
};

export const asterisk: S = {
  color: colors.onDarkQuaternary,
};

export const aside: S = {
  ...type.bodyMedium,
  fontFamily: fontFamily.roboto,
  color: colors.onDarkPrimary,
  paddingInline: space[32],
};

export const asteriskAside: S = {
  color: colors.onDarkQuaternary,
};

export const grid: S = {
  width: layout.contentMax,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `repeat(4, ${layout.colNarrow})`,
  gap: space[4],
  alignItems: "start",
};

export const card2: S = {
  background: colors.darkBg,
  borderRadius: radius.md,
  padding: space[32],
  display: "flex",
  flexDirection: "column",
};

export const scoreCard: S = {
  height: rem(630),
  justifyContent: "space-between",
};

export const scoreTop: S = {
  display: "flex",
  alignItems: "center",
  gap: space[24],
};

export const scoreNumWrap: S = {
  display: "flex",
  alignItems: "flex-end",
  gap: 0,
  width: rem(100),
  justifyContent: "flex-end",
};

export const bigNum: S = {
  ...type.displayLarge,
  color: colors.onDarkPrimary,
};

export const starMark: S = {
  ...type.headlineSmall,
  color: colors.onDarkQuaternary,
  alignSelf: "flex-start",
};

export const outOf: S = {
  ...type.headlineMedium,
  color: colors.onDarkQuaternary,
};

export const scoreLabels: S = {
  listStyle: "none",
  margin: 0,
  padding: 0,
  flex: 1,
  "& li": {
    ...type.titleMedium,
    color: colors.onDarkSecondary,
  },
};

export const scoreBottom: S = {
  width: rem(275),
  display: "flex",
  flexDirection: "column",
  gap: space[24],
};

export const scoreLabel: S = {
  ...type.titleSmall,
  color: colors.onDarkSecondary,
  whiteSpace: "pre-line",
};

export const scoreQuote: S = {
  ...type.headlineSmallEmph,
  color: colors.onDarkPrimary,
};

export const scoreAuthor: S = {
  ...type.bodySmall,
  fontFamily: fontFamily.roboto,
  letterSpacing: rem(0.5),
  color: colors.onDarkTertiary,
};

export const scoreSource: S = {
  ...type.labelSmall,
  fontFamily: fontFamily.roboto,
  color: colors.onLightQuaternary,
  marginTop: space[2],
};

export const stack: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[4],
  height: rem(630),
};

export const smallCard: S = {
  height: rem(313),
  justifyContent: "space-between",
};

export const opinionCard: S = {
  height: rem(630),
  justifyContent: "space-between",
  padding: `${space[24]} ${space[32]}`,
};

export const opinionBody: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[8],
};

export const smallQuote: S = {
  ...type.bodyMediumEmph,
  color: colors.onDarkPrimary,
};

export const bigQuote: S = {
  ...type.headlineSmallEmph,
  color: colors.onDarkPrimary,
};

export const cardSource: S = {
  ...type.bodySmall,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: space[8],
  fontFamily: fontFamily.roboto,
  letterSpacing: rem(0.5),
  color: colors.onDarkTertiary,
  textDecoration: "none",
  "&:hover": { color: colors.onDarkPrimary },
};

export const stars: S = {
  display: "flex",
  gap: space[1],
  color: colors.iconScore,
};
