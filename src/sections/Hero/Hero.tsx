import Box from "@mui/material/Box";
import { useT } from "@/i18n";
import * as s from "./Hero.styles";

export default function Hero() {
  const t = useT();
  return (
    <Box component="section" id="top" sx={s.hero}>
      <Box sx={s.card}>
        <Box sx={s.bg} role="img" aria-label="" />
        <Box sx={s.content}>
          <Box sx={s.top}>
            <Box component="nav" sx={s.tabs}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Box
                  key={i}
                  component="span"
                  sx={[s.tab, i === 0 ? s.tabActive : s.tabDisabled]}
                >
                  {t.hero.tab}
                </Box>
              ))}
            </Box>
            <Box component="h1" sx={s.headline}>
              {t.hero.headline}
            </Box>
          </Box>
          <Box sx={s.bottom}>
            <Box sx={s.status}>
              <Box component="span" sx={s.statusDot} aria-hidden />
              <Box component="span" sx={s.statusText}>
                {t.hero.statusOnMarket}
              </Box>
            </Box>
            <Box component="span" sx={s.role}>
              {t.hero.role}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
