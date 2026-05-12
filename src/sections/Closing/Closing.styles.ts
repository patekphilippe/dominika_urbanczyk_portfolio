import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, type } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "257px 32px",
};

export const row: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px 1fr`,
  gap: "4px",
  alignItems: "start",
};

export const text: S = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
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
