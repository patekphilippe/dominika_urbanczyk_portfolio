import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, space, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[32]} 0`,
};

export const row: S = {
  width: layout.contentMax,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} 1fr`,
  gap: space[4],
  alignItems: "start",
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
