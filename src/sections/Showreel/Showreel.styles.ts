import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, radius, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 32px 0",
};

export const inner: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
};

export const stats: S = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "4px",
  marginBottom: "4px",
};

export const card: S = {
  position: "relative",
  height: 156,
  background: colors.lightSurface,
  borderRadius: "20px",
  padding: "24px 32px",
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
  borderRadius: `${radius.xl}px`,
  overflow: "hidden",
  backgroundImage: "url(/images/showreel.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
