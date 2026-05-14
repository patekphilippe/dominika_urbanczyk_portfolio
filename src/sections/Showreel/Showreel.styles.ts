import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, radius, rem, space, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[32]} 0`,
};

export const inner: S = {
  width: "100%",
};

export const stats: S = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: space[4],
  marginBottom: space[4],
};

export const card: S = {
  position: "relative",
  height: rem(156),
  background: colors.lightSurface,
  borderRadius: radius.lg,
  padding: `${space[24]} ${space[32]}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
};

export const cardLeft: S = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  flex: 1,
};

export const numberRow: S = {
  display: "flex",
  alignItems: "center",
};

export const number: S = {
  ...type.displayLarge,
  color: colors.onLightPrimary,
};

export const plus: S = {
  ...type.displayLarge,
  color: colors.onLightPrimary,
};

export const label: S = {
  ...type.titleMedium,
  color: colors.onLightTertiary,
};

export const idx: S = {
  ...type.labelSmall,
  color: colors.onLightQuaternary,
  textAlign: "right",
  opacity: 0.5,
};

export const imageWrap: S = {
  width: "100%",
  aspectRatio: "1376 / 849",
  borderRadius: radius.xl,
  overflow: "hidden",
  backgroundImage: "url(/images/showreel.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const image: S = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};
