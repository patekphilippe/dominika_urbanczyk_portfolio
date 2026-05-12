import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ArrowOutward from "@/components/ArrowOutward";
import SplitText from "@/components/SplitText";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./Testimonials.styles";

export default function Testimonials() {
  const t = useT();
  const tt = t.testimonials;
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.card}>
        <Box sx={s.top}>
          <TitleSection label={tt.eyebrow} onDark />
          <Box component="h2" sx={s.headline}>
            <SplitText tag="span" text={tt.headlineMain} />
            <SplitText
              tag="span"
              text={tt.headlineAsterisk}
              style={s.asterisk as React.CSSProperties}
            />
          </Box>
          <Typography component="p" sx={s.aside}>
            <Box component="span" sx={s.asteriskAside}>
              {tt.asideAsterisk}
            </Box>
            {tt.asideText}
          </Typography>
        </Box>

        <Box sx={s.grid}>
          <Box component="article" sx={[s.card2, s.scoreCard]}>
            <Box sx={s.scoreTop}>
              <Box sx={s.scoreNumWrap}>
                <Box component="span" sx={s.bigNum}>
                  6
                </Box>
                <Box component="span" sx={s.starMark}>
                  *
                </Box>
                <Box component="span" sx={s.outOf}>
                  /6
                </Box>
              </Box>
              <Box component="ul" sx={s.scoreLabels}>
                {tt.score.labels.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </Box>
            </Box>
            <Box sx={s.scoreBottom}>
              <Typography component="p" sx={s.scoreLabel}>
                {tt.score.ratingQuestion}
              </Typography>
              <Typography component="p" sx={s.scoreQuote}>
                {tt.score.quote}
              </Typography>
              <Box>
                <Typography component="p" sx={s.scoreAuthor}>
                  {tt.score.author}
                </Typography>
                <Typography component="p" sx={s.scoreSource}>
                  {tt.score.source}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={s.stack}>
            <Box component="article" sx={[s.card2, s.smallCard]}>
              <Typography component="p" sx={s.smallQuote}>
                {tt.studentCircle.quote}
              </Typography>
              <Link href="#" sx={s.cardSource}>
                <Box component="span">{tt.studentCircle.source}</Box>
                <ArrowOutward size={20} />
              </Link>
            </Box>
            <Box component="article" sx={[s.card2, s.smallCard]}>
              <Typography component="p" sx={s.bigQuote}>
                {tt.linkedinBig.quote}
              </Typography>
              <Link href="#" sx={s.cardSource}>
                <Box component="span">{tt.linkedinBig.source}</Box>
                <ArrowOutward size={20} />
              </Link>
            </Box>
          </Box>

          <Box component="article" sx={[s.card2, s.opinionCard]}>
            <Link href="#" sx={s.cardSource}>
              <Box component="span">{tt.helion.source}</Box>
              <ArrowOutward size={20} />
            </Link>
            <Box sx={s.opinionBody}>
              <Box sx={s.stars} aria-label="6 of 6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </Box>
              <Typography component="p" sx={s.bigQuote}>
                {tt.helion.quote}
              </Typography>
            </Box>
          </Box>

          <Box component="article" sx={[s.card2, s.opinionCard]}>
            <Typography component="p" sx={s.bigQuote}>
              {tt.hrLinkedin.quote}
            </Typography>
            <Link href="#" sx={s.cardSource}>
              <Box component="span">{tt.hrLinkedin.source}</Box>
              <ArrowOutward size={20} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Star() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" aria-hidden>
      <path d="M5.5 0.5l1.65 3.45L11 4.45l-2.92 2.6.7 3.85L5.5 8.95 2.22 10.9l.7-3.85L0 4.45l3.85-.5L5.5.5z" />
    </svg>
  );
}
