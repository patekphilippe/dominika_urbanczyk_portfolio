import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, radius, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 0 0",
};

export const card: S = {
  background: colors.darkBg,
  borderRadius: `${radius.xl}px`,
  padding: "144px 32px",
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  width: "100%",
};

export const top: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px ${layout.colWide}px 1fr`,
  gap: "4px",
};

export const headline: S = {
  ...type.hero,
  color: colors.onDarkPrimary,
};

export const list: S = {
  width: 1368,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

export const expanded: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px 1fr 336px 48px`,
  gap: "4px",
  paddingTop: "32px",
  paddingBottom: "56px",
  borderBottom: `${stroke.s1} solid ${colors.darkOutline}`,
};

export const itemRow: S = {
  display: "flex",
  flexDirection: "column",
  paddingTop: "32px",
  paddingBottom: "20px",
  borderBottom: `${stroke.s1} solid ${colors.darkOutline}`,
};

export const itemHeader: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px 1fr 48px`,
  gap: "4px",
  alignItems: "center",
};

export const itemHeading: S = {
  display: "flex",
  alignItems: "center",
  minHeight: 48,
};

export const itemDetails: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px 1fr 336px 48px`,
  gap: "4px",
  paddingTop: "16px",
  paddingBottom: "36px",
  "& > :first-of-type": {
    gridColumn: "2",
  },
  "& > :nth-of-type(2)": {
    gridColumn: "3",
  },
};

export const id: S = {
  ...type.titleMediumEmph,
  color: colors.onDarkPrimary,
};

export const body: S = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const itemTitle: S = {
  ...type.headlineMediumEmph,
  color: colors.onDarkPrimary,
};

export const itemLead: S = {
  fontFamily: fontFamily.sans,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  color: colors.onDarkPrimary,
};

export const bullet: S = {
  display: "flex",
  gap: "4px",
  fontFamily: fontFamily.sans,
  fontSize: "16px",
  lineHeight: "24px",
  letterSpacing: "0.5px",
  color: colors.onDarkTertiary,
};

export const arrow: S = {
  flexShrink: 0,
};

export const tagsCol: S = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: 336,
};

export const tagsLabel: S = {
  fontFamily: fontFamily.roboto,
  fontSize: "11px",
  lineHeight: "16px",
  letterSpacing: "0.5px",
  color: colors.onDarkQuaternary,
};

export const tags: S = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  listStyle: "none",
  margin: 0,
  padding: 0,
  maxWidth: 350,
};

export const tag: S = {
  height: 32,
  padding: "6px 12px",
  borderRadius: "28px",
  background: colors.lightSurface,
  ...type.bodySmallEmph,
  color: colors.onLightSecondary,
  display: "flex",
  alignItems: "center",
};

export const collapsed: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px 1fr 48px`,
  gap: "4px",
  paddingBottom: "20px",
  borderBottom: `${stroke.s1} solid ${colors.darkOutline}`,
  alignItems: "center",
};

export const collapsedTitle: S = {
  ...type.titleLarge,
  color: colors.onDarkPrimary,
};

export const toggle: S = {
  width: 48,
  height: 48,
  minWidth: 48,
  padding: 0,
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.onDarkQuaternary,
  "& svg": {
    width: 40,
    height: 40,
    padding: "8px",
    border: `${stroke.s1} solid ${colors.darkOutline}`,
    borderRadius: "100px",
  },
  "&:hover": {
    color: colors.onDarkPrimary,
    background: "transparent",
  },
};
