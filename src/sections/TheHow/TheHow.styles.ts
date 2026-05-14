import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, fontFamily, layout, radius, rem, space, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} 0 0`,
};

export const card: S = {
  background: colors.darkBg,
  borderRadius: radius.xl,
  padding: `${space[144]} ${space[32]}`,
  display: "flex",
  flexDirection: "column",
  gap: space[48],
  width: "100%",
};

export const top: S = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} 1fr`,
  gap: space[4],
};

export const headline: S = {
  ...type.hero,
  color: colors.onDarkPrimary,
};

export const list: S = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: space[32],
};

export const expanded: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} 1fr ${layout.tagsCol} ${rem(48)}`,
  gap: space[4],
  paddingTop: space[32],
  paddingBottom: space[56],
  borderBottom: `${stroke.s1} solid ${colors.darkOutline}`,
};

export const itemRow: S = {
  display: "flex",
  flexDirection: "column",
  paddingTop: space[32],
  paddingBottom: space[20],
  borderBottom: `${stroke.s1} solid ${colors.darkOutline}`,
};

export const itemHeader: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} 1fr ${rem(48)}`,
  gap: space[4],
  alignItems: "center",
};

export const itemHeading: S = {
  display: "flex",
  alignItems: "center",
  minHeight: rem(48),
};

export const itemDetails: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} 1fr ${layout.tagsCol} ${rem(48)}`,
  gap: space[4],
  paddingTop: space[16],
  paddingBottom: space[36],
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
  gap: space[16],
};

export const itemTitle: S = {
  ...type.theHowTitle,
  color: colors.onDarkPrimary,
};

export const itemLead: S = {
  ...type.bodyLarge,
  color: colors.onDarkPrimary,
};

export const bullet: S = {
  ...type.bodyLarge,
  display: "flex",
  gap: space[4],
  fontFamily: fontFamily.sans,
  color: colors.onDarkTertiary,
};

export const arrow: S = {
  flexShrink: 0,
};

export const tagsCol: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[16],
  width: layout.tagsCol,
};

export const tagsLabel: S = {
  ...type.labelSmall,
  fontFamily: fontFamily.roboto,
  color: colors.onDarkQuaternary,
};

export const tags: S = {
  display: "flex",
  flexWrap: "wrap",
  gap: space[8],
  listStyle: "none",
  margin: 0,
  padding: 0,
  maxWidth: rem(350),
};

export const tag: S = {
  height: rem(32),
  padding: `${space[6]} ${space[12]}`,
  borderRadius: radius.xl,
  background: colors.lightSurface,
  ...type.bodySmallEmph,
  color: colors.onLightSecondary,
  display: "flex",
  alignItems: "center",
};

export const collapsed: S = {
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} 1fr ${rem(48)}`,
  gap: space[4],
  paddingBottom: space[20],
  borderBottom: `${stroke.s1} solid ${colors.darkOutline}`,
  alignItems: "center",
};

export const collapsedTitle: S = {
  ...type.titleLarge,
  color: colors.onDarkPrimary,
};

export const toggle: S = {
  width: rem(48),
  height: rem(48),
  minWidth: rem(48),
  padding: 0,
  borderRadius: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: colors.onDarkQuaternary,
  "& svg": {
    width: rem(40),
    height: rem(40),
    padding: space[8],
    border: `${stroke.s1} solid ${colors.darkOutline}`,
    borderRadius: radius.pill,
  },
  "&:hover": {
    color: colors.onDarkPrimary,
    background: "transparent",
  },
};
