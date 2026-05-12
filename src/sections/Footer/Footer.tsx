import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ArrowOutward from "@/components/ArrowOutward";
import SplitText from "@/components/SplitText";
import { useT } from "@/i18n";
import * as s from "./Footer.styles";

export default function Footer() {
  const t = useT();
  return (
    <Box component="footer" id="contact" sx={s.footer}>
      <Box sx={s.top}>
        <Box sx={s.links}>
          <Box sx={s.col1}>
            <Link href={`mailto:${t.footer.email}`} sx={s.email}>
              {t.footer.email}
            </Link>
          </Box>
          <Box sx={s.col2}>
            <Link href="#" aria-label={t.footer.linkedinLabel} sx={s.linkedin}>
              <Box component="span">{t.footer.linkedinLabel}</Box>
              <ArrowOutward size={24} />
            </Link>
            <SplitText
              tag="p"
              text={t.footer.signoff}
              style={s.signoff as React.CSSProperties}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={s.bottom}>
        <Typography component="p">{t.footer.copyright}</Typography>
      </Box>
    </Box>
  );
}
