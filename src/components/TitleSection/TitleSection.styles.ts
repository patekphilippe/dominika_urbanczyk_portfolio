import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const titleRoot: S = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: `${layout.colNarrow}px`,
};

export const label: S = {
  ...type.titleMediumEmph,
  color: colors.onLightPrimary,
};

export const secondary: S = {
  ...type.titleSmall,
  color: colors.onLightQuaternary,
};

export const labelDark: S = {
  ...type.titleMediumEmph,
  color: colors.onDarkPrimary,
};

export const secondaryDark: S = {
  ...type.titleSmall,
  color: colors.onDarkQuaternary,
};
