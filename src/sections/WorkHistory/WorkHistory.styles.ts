import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, rem, space, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[32]} 0`,
  display: "flex",
  flexDirection: "column",
  gap: space[144],
};

export const row: S = {
  width: layout.contentMax,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} ${layout.colNarrow}`,
  gap: space[4],
  alignItems: "start",
};

export const headlineWrap: S = {
  display: "flex",
  alignItems: "center",
  width: layout.colWide,
};

export const headline: S = {
  ...type.hero,
  color: colors.onLightPrimary,
  fontSize: rem(104),
  lineHeight: "normal",
};

export const aside: S = {
  ...type.bodyMedium,
  color: colors.onLightTertiary,
  paddingInline: space[32],
};

export const body: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[32],
  width: layout.colWide,
};

export const lead: S = {
  ...type.displayMedium,
  color: colors.onLightPrimary,
};

export const note: S = {
  ...type.bodyLarge,
  fontFamily: fontFamily.roboto,
  color: colors.onLightSecondary,
};
