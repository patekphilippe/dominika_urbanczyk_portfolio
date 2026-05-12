import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import SplitText from "@/components/SplitText";
import { useT } from "@/i18n";
import * as s from "./Bento.styles";

export default function Bento() {
  const t = useT();
  const b = t.bento;
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.grid}>
        <Box component="article" sx={s.left}>
          <Box sx={s.bg} aria-hidden />
          <Box sx={s.overlay} aria-hidden />
          <Box sx={s.leftContent}>
            <Box sx={s.metaTop}>
              <Box>
                <Typography component="p" sx={s.tagLabel}>
                  {b.caseStudyLabel}
                </Typography>
                <Typography component="p" sx={s.tagDetail}>
                  {b.caseStudyDetail}
                </Typography>
              </Box>
              <Box sx={s.role}>
                <Typography component="p" sx={s.roleLabel}>
                  {b.roleLabel}
                </Typography>
                <Typography component="p" sx={s.roleValue}>
                  {b.roleValue}
                </Typography>
              </Box>
            </Box>
            <SplitText
              tag="h3"
              text={b.title}
              style={s.title as React.CSSProperties}
            />
            <Box sx={s.bottom}>
              <Link href="#loconi" sx={s.cta}>
                {b.cta}
              </Link>
              <Box component="span" sx={s.year}>
                {b.year}
              </Box>
            </Box>
          </Box>
        </Box>

        <Box component="article" sx={s.right}>
          <Typography component="p" sx={s.intro}>
            {b.intro}
          </Typography>
          <Box sx={s.stats}>
            {b.stats.map((stat) => (
              <Box sx={s.stat} key={stat.value}>
                <Box component="span" sx={s.statValue}>
                  {stat.value}
                </Box>
                <Box component="span" sx={s.statLabel}>
                  {stat.label}
                </Box>
              </Box>
            ))}
          </Box>
          <Box sx={s.quoteBlock}>
            <Typography component="p" sx={s.quote}>
              {b.quote}
            </Typography>
            <Typography component="p" sx={s.author}>
              {b.author}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
