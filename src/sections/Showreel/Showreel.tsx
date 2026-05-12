import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useT } from "@/i18n";
import * as s from "./Showreel.styles";

export default function Showreel() {
  const t = useT();
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.inner}>
        <Box sx={s.stats}>
          {t.showreel.stats.map((stat) => (
            <Box sx={s.card} key={stat.index}>
              <Box sx={s.cardLeft}>
                <Box sx={s.numberRow}>
                  <Box component="span" sx={s.number}>
                    {stat.number}
                  </Box>
                  <Box component="span" sx={s.plus}>
                    {stat.plus}
                  </Box>
                </Box>
                <Typography component="p" sx={s.label}>
                  {stat.label}
                </Typography>
              </Box>
              <Box component="span" sx={s.idx}>
                {stat.index}
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={s.imageWrap} role="img" aria-label="Showreel" />
      </Box>
    </Box>
  );
}
