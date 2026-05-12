import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, stroke, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const header: S = {
  position: "sticky",
  top: 0,
  zIndex: 100,
  width: "100%",
  background: "rgba(246, 246, 246, 0.85)",
  backdropFilter: "blur(3.5px)",
  WebkitBackdropFilter: "blur(3.5px)",
};

export const inner: S = {
  height: 86,
  padding: "19px 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const logo: S = {
  display: "inline-block",
  height: "21.648px",
  width: "189.162px",
  color: colors.onLightPrimary,
  backgroundImage: "url(/images/logo.svg)",
  backgroundSize: "contain",
  backgroundPosition: "left center",
  backgroundRepeat: "no-repeat",
};

export const nav: S = {
  display: "flex",
  alignItems: "center",
  gap: "32px",
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
  height: 40,
  padding: "10px 16px",
  border: `${stroke.s1} solid ${colors.onDarkTertiary}`,
  borderRadius: "100px",
  ...type.labelLarge,
  color: colors.onLightPrimary,
  textDecoration: "none",
  "&:hover": { background: "rgba(0, 0, 0, 0.04)" },
};
