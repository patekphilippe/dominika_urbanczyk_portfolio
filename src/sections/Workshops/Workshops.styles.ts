import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, radius, rem, space, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[32]} 0`,
};

export const top: S = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} 1fr`,
  gap: space[4],
  marginBottom: space[96],
};

export const lead: S = {
  ...type.displayMedium,
  color: colors.onLightPrimary,
};

export const body: S = {
  width: "100%",
};

export const intro: S = {
  ...type.bodyLarge,
  fontFamily: fontFamily.roboto,
  color: colors.onLightSecondary,
  width: layout.colWide,
  marginLeft: `calc(${layout.colNarrow} + ${space[4]})`,
  marginBottom: space[64],
};

export const cards: S = {
  display: "grid",
  gridTemplateColumns: `repeat(4, ${layout.colNarrow})`,
  gap: space[4],
};

export const card: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[4],
  height: rem(463),
};

export const cardHeader: S = {
  background: colors.lightSurface,
  borderRadius: radius.lg,
  padding: `${space[24]} ${space[32]}`,
};

export const cardTitle: S = {
  ...type.headlineLarge,
  color: colors.onLightPrimary,
  whiteSpace: "pre-line",
  wordBreak: "keep-all",
};

export const cardBody: S = {
  flex: 1,
  background: colors.lightSurface,
  borderRadius: radius.sm,
  padding: space[32],
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: space[32],
};

export const cardText: S = {
  ...type.bodyMediumEmph,
  color: colors.onLightSecondary,
  textAlign: "right",
};

export const logos: S = {
  display: "flex",
  flexWrap: "wrap",
  gap: space[8],
  alignItems: "center",
  justifyContent: "space-between",
};

export const logo: S = {
  width: rem(75.33),
  height: rem(31.53),
  display: "block",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
