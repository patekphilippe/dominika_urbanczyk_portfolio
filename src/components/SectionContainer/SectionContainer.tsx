import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material/styles";
import type { ElementType, ReactNode } from "react";
import { sectionRoot, sectionRootFlush } from "./SectionContainer.styles";

type Props = {
  id?: string;
  children: ReactNode;
  component?: ElementType;
  flush?: boolean;
  sx?: SxProps<Theme>;
};

export default function SectionContainer({
  id,
  children,
  component = "section",
  flush = false,
  sx,
}: Props) {
  const base = flush ? sectionRootFlush : sectionRoot;
  return (
    <Box id={id} component={component} sx={[base, ...(Array.isArray(sx) ? sx : [sx])]}>
      {children}
    </Box>
  );
}
