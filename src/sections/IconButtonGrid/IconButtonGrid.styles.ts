import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: "144px 32px 0",
};

export const inner: S = {
  position: "relative",
  width: `${layout.contentMax}px`,
  height: 900,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `repeat(4, ${layout.colNarrow}px)`,
  gap: "4px",
};

export const col: S = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

export const colOffset: S = {
  marginTop: "120.75px",
};

export const tile: S = {
  position: "relative",
  width: "100%",
  aspectRatio: "1920 / 1080",
  borderRadius: "16px",
  overflow: "hidden",
  backgroundImage: "url(/images/work-cover.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};
