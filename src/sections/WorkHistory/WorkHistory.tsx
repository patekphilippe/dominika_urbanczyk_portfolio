import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SplitText from "@/components/SplitText";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./WorkHistory.styles";

export default function WorkHistory() {
  const t = useT();
  return (
    <Box component="section" id="experience" sx={s.section}>
      <Box sx={s.row}>
        <TitleSection label={t.workHistory.eyebrow} />
        <Box sx={s.headlineWrap}>
          <SplitText
            tag="h2"
            text={`${t.workHistory.headline.line1}\n${t.workHistory.headline.line2}`}
            style={{
              ...(s.headline as React.CSSProperties),
              whiteSpace: "pre-line",
            }}
          />
        </Box>
        <Typography component="p" sx={s.aside}>
          {t.workHistory.aside}
        </Typography>
      </Box>

      <Box sx={s.row}>
        <TitleSection
          label={t.workHistory.work.eyebrow}
          secondary={`${t.workHistory.work.company}\n${t.workHistory.work.period}`}
        />
        <Box sx={s.body}>
          <Typography component="p" sx={s.lead}>
            {t.workHistory.work.lead}
          </Typography>
          <Typography component="p" sx={s.note}>
            {t.workHistory.work.note}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
