import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, space, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[257]} ${space[32]}`,
};

export const row: S = {
  width: layout.contentMax,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.closingTextCol} 1fr`,
  gap: space[4],
  alignItems: "start",
};

export const text: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[4],
};

export const line: S = {
  ...type.hero,
  whiteSpace: "nowrap",
};

export const dark: S = {
  color: colors.onLightPrimary,
};

export const muted: S = {
  color: colors.onLightQuaternary,
};
