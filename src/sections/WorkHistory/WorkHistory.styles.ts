import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 32px 0",
  display: "flex",
  flexDirection: "column",
  gap: "144px",
};

export const row: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px ${layout.colWide}px ${layout.colNarrow}px`,
  gap: "4px",
  alignItems: "start",
};

export const headlineWrap: S = {
  display: "flex",
  alignItems: "center",
  width: `${layout.colWide}px`,
};

export const headline: S = {
  ...type.hero,
  color: colors.onLightPrimary,
  fontSize: "104px",
  lineHeight: "normal",
};

export const aside: S = {
  ...type.bodyMedium,
  color: colors.onLightTertiary,
  paddingInline: "32px",
};

export const body: S = {
  display: "flex",
  flexDirection: "column",
  gap: "32px",
  width: `${layout.colWide}px`,
};

export const lead: S = {
  ...type.displayMedium,
  color: colors.onLightPrimary,
};

export const note: S = {
  fontFamily: fontFamily.roboto,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  color: colors.onLightSecondary,
};
