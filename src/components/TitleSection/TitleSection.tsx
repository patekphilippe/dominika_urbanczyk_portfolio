import Box from "@mui/material/Box";
import { Fragment } from "react";
import * as s from "./TitleSection.styles";

type Props = {
  label: string;
  secondary?: string;
  onDark?: boolean;
};

export default function TitleSection({ label, secondary, onDark }: Props) {
  return (
    <Box sx={s.titleRoot}>
      <Box component="span" sx={onDark ? s.labelDark : s.label}>
        {label}
      </Box>
      {secondary && (
        <Box component="span" sx={onDark ? s.secondaryDark : s.secondary}>
          {secondary.split("\n").map((line, i, arr) => (
            <Fragment key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </Fragment>
          ))}
        </Box>
      )}
    </Box>
  );
}
