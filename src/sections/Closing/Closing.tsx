import Box from "@mui/material/Box";
import SplitText from "@/components/SplitText";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./Closing.styles";

export default function Closing() {
  const t = useT();
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.row}>
        <TitleSection label={t.closing.eyebrow} />
        <Box sx={s.text}>
          {t.closing.lines.map((line, i) => (
            <Box component="p" sx={s.line} key={i}>
              <SplitText
                tag="span"
                text={line.dark.trim()}
                style={s.dark as React.CSSProperties}
              />
              {" "}
              <SplitText
                tag="span"
                text={line.muted}
                style={s.muted as React.CSSProperties}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
