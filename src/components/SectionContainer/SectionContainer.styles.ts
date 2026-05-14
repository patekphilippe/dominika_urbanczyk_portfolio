import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, space } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const sectionRoot: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[32]} 0`,
};

export const sectionRootFlush: S = {
  background: colors.pageBg,
  padding: `${space[144]} 0 0`,
};

export const innerContent: S = {
  width: "100%",
};

export const gridRow: S = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} 1fr`,
  gap: space[4],
  alignItems: "start",
};
