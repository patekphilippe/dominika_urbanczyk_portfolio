import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 36px 0",
};

export const grid: S = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "4px",
  height: 600,
  maxWidth: 1520,
  margin: "0 auto",
};

export const left: S = {
  position: "relative",
  borderRadius: "18px",
  overflow: "hidden",
  padding: "48px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const bg: S = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 0,
  backgroundImage: "url(/images/bento-loconi.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const overlay: S = {
  position: "absolute",
  inset: 0,
  background: "rgba(0, 0, 0, 0.37)",
  zIndex: 1,
};

export const leftContent: S = {
  position: "relative",
  zIndex: 2,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

export const metaTop: S = {
  display: "flex",
  justifyContent: "space-between",
  gap: "32px",
};

export const tagLabel: S = {
  ...type.titleMediumEmph,
  color: colors.onDarkPrimary,
};

export const tagDetail: S = {
  ...type.labelMedium,
  color: colors.onDarkSecondary,
  marginTop: "4px",
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
  marginTop: "4px",
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
  height: 48,
  padding: "10px 16px",
  border: `${stroke.s1} solid ${colors.darkOutline}`,
  borderRadius: "100px",
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
  borderRadius: "18px",
  padding: "48px",
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
  gap: "24px",
};

export const stat: S = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
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
  gap: "12px",
};

export const quote: S = {
  ...type.bodyMediumEmph,
  color: colors.onLightPrimary,
};

export const author: S = {
  fontFamily: fontFamily.roboto,
  fontSize: "12px",
  lineHeight: "16px",
  letterSpacing: "0.5px",
  color: colors.onLightTertiary,
};
