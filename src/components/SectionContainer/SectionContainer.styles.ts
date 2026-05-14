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
  width: layout.contentMax,
  margin: "0 auto",
};

export const gridRow: S = {
  width: layout.contentMax,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow} ${layout.colWide} 1fr`,
  gap: space[4],
  alignItems: "start",
};
