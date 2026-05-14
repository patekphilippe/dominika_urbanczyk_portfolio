import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, radius, rem, space, stroke, type, zIndex } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const header: S = {
  position: "sticky",
  top: 0,
  zIndex: zIndex.header,
  width: "100%",
  background: "rgba(246, 246, 246, 0.85)",
  backdropFilter: "blur(3.5px)",
  WebkitBackdropFilter: "blur(3.5px)",
};

export const inner: S = {
  height: rem(86),
  padding: `${space[19]} ${space[32]}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const logo: S = {
  display: "inline-block",
  height: rem(21.648),
  width: rem(112.63),
  color: colors.onLightPrimary,
  backgroundImage: "url(/images/logo.svg)",
  backgroundSize: "contain",
  backgroundPosition: "left center",
  backgroundRepeat: "no-repeat",
};

export const nav: S = {
  display: "flex",
  alignItems: "center",
  gap: space[32],
};

export const navItem: S = {
  ...type.titleMediumEmph,
  color: colors.onLightPrimary,
  whiteSpace: "nowrap",
  textDecoration: "none",
  "&:hover": { color: colors.onLightTertiary },
};

export const cta: S = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  height: rem(40),
  padding: `${space[10]} ${space[16]}`,
  border: `${stroke.s1} solid ${colors.onDarkTertiary}`,
  borderRadius: radius.pill,
  ...type.labelLarge,
  color: colors.onLightPrimary,
  textDecoration: "none",
  "&:hover": { background: "rgba(0, 0, 0, 0.04)" },
};
