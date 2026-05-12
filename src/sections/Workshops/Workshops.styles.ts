import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 32px 0",
};

export const top: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px ${layout.colWide}px 1fr`,
  gap: "4px",
  marginBottom: "96px",
};

export const lead: S = {
  ...type.displayMedium,
  color: colors.onLightPrimary,
};

export const body: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
};

export const intro: S = {
  fontFamily: fontFamily.roboto,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  color: colors.onLightSecondary,
  width: `${layout.colWide}px`,
  marginLeft: `${layout.colNarrow + 4}px`,
  marginBottom: "64px",
};

export const cards: S = {
  display: "grid",
  gridTemplateColumns: `repeat(4, ${layout.colNarrow}px)`,
  gap: "4px",
};

export const card: S = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  height: 463,
};

export const cardHeader: S = {
  background: colors.lightSurface,
  borderRadius: "20px",
  padding: "24px 32px",
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
  borderRadius: "16px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "32px",
};

export const cardText: S = {
  ...type.bodyMediumEmph,
  color: colors.onLightSecondary,
  textAlign: "right",
};

export const logos: S = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
};

export const logo: S = {
  width: "75.33px",
  height: "31.53px",
  display: "block",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
