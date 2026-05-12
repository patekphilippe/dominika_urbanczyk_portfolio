import MuiButton from "@mui/material/Button";
import ArrowOutward from "@/components/ArrowOutward";
import type { ReactNode } from "react";
import * as s from "./Button.styles";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
};

export default function Button({ children, href, variant = "primary" }: Props) {
  const sx = [s.btnBase, variant === "primary" ? s.btnPrimary : s.btnGhost];
  return (
    <MuiButton
      href={href}
      disableRipple
      component={href ? "a" : "button"}
      type={href ? undefined : "button"}
      sx={sx}
      endIcon={<ArrowOutward size={20} />}
    >
      {children}
    </MuiButton>
  );
}
