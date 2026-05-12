import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const sectionRoot: S = {
  background: colors.pageBg,
  padding: "144px 32px 0",
};

export const sectionRootFlush: S = {
  background: colors.pageBg,
  padding: "144px 4px 0",
};

export const innerContent: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
};

export const gridRow: S = {
  width: `${layout.contentMax}px`,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `${layout.colNarrow}px ${layout.colWide}px 1fr`,
  gap: "4px",
  alignItems: "start",
};
