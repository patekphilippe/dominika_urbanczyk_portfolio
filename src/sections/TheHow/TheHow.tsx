import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SplitText from "@/components/SplitText";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./TheHow.styles";

export default function TheHow() {
  const t = useT();
  const { expanded, collapsed } = t.theHow;
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.card}>
        <Box sx={s.top}>
          <TitleSection label={t.theHow.eyebrow} onDark />
          <SplitText
            tag="h2"
            text={t.theHow.headline}
            style={s.headline as React.CSSProperties}
          />
        </Box>

        <Box sx={s.list}>
          <Box component="article" sx={s.expanded}>
            <Box component="span" sx={s.id}>
              {expanded.id}
            </Box>
            <Box sx={s.body}>
              <Typography component="h3" sx={s.itemTitle}>
                {expanded.title}
              </Typography>
              <Typography component="p" sx={s.itemLead}>
                {expanded.lead}
              </Typography>
              {expanded.bullets.map((b, i) => (
                <Typography component="p" sx={s.bullet} key={i}>
                  <Box component="span" sx={s.arrow}>
                    →
                  </Box>
                  <Box component="span">{b}</Box>
                </Typography>
              ))}
            </Box>
            <Box sx={s.tagsCol}>
              <Box component="span" sx={s.tagsLabel}>
                {expanded.focusLabel}
              </Box>
              <Box component="ul" sx={s.tags}>
                {expanded.tags.map((tag) => (
                  <Box component="li" sx={s.tag} key={tag}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
            <IconButton sx={s.toggle} aria-label="Collapse" disableRipple>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </IconButton>
          </Box>

          {collapsed.map((c) => (
            <Box component="article" sx={s.collapsed} key={c.id}>
              <Box component="span" sx={s.id}>
                {c.id}
              </Box>
              <Typography component="h3" sx={s.collapsedTitle}>
                {c.title}
              </Typography>
              <IconButton sx={s.toggle} aria-label="Expand" disableRipple>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6v12M6 12h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
