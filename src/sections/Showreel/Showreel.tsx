import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useT } from "@/i18n";
import * as s from "./Showreel.styles";
import CountUp from "@/components/CountUp";

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
                    <CountUp
                      from={0}
                      to={Number(stat.number)}
                      separator=","
                      direction="up"
                      duration={0.3}
                      className="count-up-text"
                      delay={0}
                    />
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
