import Box from "@mui/material/Box";
import * as s from "./IconButtonGrid.styles";

const COLS = 4;
const ROWS = 4;

export default function IconButtonGrid() {
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.inner}>
        {Array.from({ length: COLS }).map((_, ci) => (
          <Box key={ci} sx={[s.col, ci % 2 === 1 && s.colOffset]}>
            {Array.from({ length: ROWS }).map((__, ri) => (
              <Box sx={s.tile} key={ri} role="img" aria-label="Selected work" />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
