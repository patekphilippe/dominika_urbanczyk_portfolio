import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./LoconiIntro.styles";

export default function LoconiIntro() {
  const t = useT();
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.row}>
        <TitleSection
          label={t.loconiIntro.eyebrow}
          secondary={t.loconiIntro.secondary}
        />
        <Box sx={s.body}>
          <Typography component="p" sx={s.lead}>
            {t.loconiIntro.lead}
          </Typography>
          <Typography component="p" sx={s.note}>
            {t.loconiIntro.note}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
