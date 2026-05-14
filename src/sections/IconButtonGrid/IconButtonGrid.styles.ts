import type { Theme } from "@mui/material/styles";
import type { SystemStyleObject } from "@mui/system";
import { colors, layout, radius, rem, space } from "@/theme/tokens";

type S = SystemStyleObject<Theme>;

export const section: S = {
  background: colors.pageBg,
  padding: `${space[144]} ${space[32]} 0`,
};

export const inner: S = {
  position: "relative",
  width: layout.contentMax,
  height: rem(900),
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: `repeat(4, ${layout.colNarrow})`,
  gap: space[4],
};

export const col: S = {
  display: "flex",
  flexDirection: "column",
  gap: space[4],
};

export const colOffset: S = {
  marginTop: rem(120.75),
};

export const tile: S = {
  position: "relative",
  width: "100%",
  aspectRatio: "1920 / 1080",
  borderRadius: radius.sm,
  overflow: "hidden",
  backgroundImage: "url(/images/work-cover.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const tileImg: S = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};
