import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, fontWeight, layout, radius, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 0 0",
};

export const card: S = {
  background: colors.darkSurface,
  borderRadius: `${radius.xl}px`,
  padding: "144px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
};

export const top: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px ${layout.colWide}px 1fr`,
  gap: "4px",
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
  fontFamily: fontFamily.roboto,
  fontSize: "14px",
  lineHeight: "20px",
  letterSpacing: "0.25px",
  color: colors.onDarkPrimary,
  paddingInline: "32px",
};

export const asteriskAside: S = {
  color: colors.onDarkQuaternary,
};

export const grid: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `repeat(4, ${layout.colNarrow}px)`,
  gap: "4px",
  alignItems: "start",
};

export const card2: S = {
  background: colors.darkBg,
  borderRadius: "18px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
};

export const scoreCard: S = {
  height: 630,
  justifyContent: "space-between",
};

export const scoreTop: S = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
};

export const scoreNumWrap: S = {
  display: "flex",
  alignItems: "flex-end",
  gap: 0,
  width: 100,
  justifyContent: "flex-end",
};

export const bigNum: S = {
  fontFamily: fontFamily.sans,
  fontSize: "57px",
  lineHeight: "64px",
  letterSpacing: "-0.25px",
  fontWeight: fontWeight.semibold,
  color: colors.onDarkPrimary,
};

export const starMark: S = {
  fontFamily: fontFamily.sans,
  fontSize: "24px",
  lineHeight: "32px",
  color: colors.onDarkQuaternary,
  alignSelf: "flex-start",
};

export const outOf: S = {
  fontFamily: fontFamily.sans,
  fontSize: "28px",
  lineHeight: "36px",
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
  width: 275,
  display: "flex",
  flexDirection: "column",
  gap: "24px",
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
  fontFamily: fontFamily.roboto,
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.5px",
  color: colors.onDarkTertiary,
};

export const scoreSource: S = {
  fontFamily: fontFamily.roboto,
  fontSize: "11px",
  lineHeight: "16px",
  letterSpacing: "0.5px",
  color: colors.onLightQuaternary,
  marginTop: "2px",
};

export const stack: S = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  height: 630,
};

export const smallCard: S = {
  height: 313,
  justifyContent: "space-between",
};

export const opinionCard: S = {
  height: 630,
  justifyContent: "space-between",
  padding: "24px 32px",
};

export const opinionBody: S = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "8px",
  fontFamily: fontFamily.roboto,
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.5px",
  color: colors.onDarkTertiary,
  textDecoration: "none",
  "&:hover": { color: colors.onDarkPrimary },
};

export const stars: S = {
  display: "flex",
  gap: "1px",
  color: colors.iconScore,
};
