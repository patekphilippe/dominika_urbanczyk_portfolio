import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./SelectedWorkIntro.styles";

export default function SelectedWorkIntro() {
  const t = useT();
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.row}>
        <TitleSection
          label={t.selectedWorkIntro.eyebrow}
          secondary={t.selectedWorkIntro.secondary}
        />
        <Box sx={s.body}>
          <Typography component="p" sx={s.lead}>
            {t.selectedWorkIntro.lead}
          </Typography>
          <Typography component="p" sx={s.note}>
            {t.selectedWorkIntro.note}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
