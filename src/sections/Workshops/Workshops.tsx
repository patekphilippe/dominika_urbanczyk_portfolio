import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import * as s from "./Workshops.styles";

const logosByCard: { src: string; alt: string }[][] = [
  [
    { src: "/images/logo-uw.png", alt: "Uniwersytet Warszawski" },
    { src: "/images/logo-uwr.png", alt: "Uniwersytet Wrocławski" },
    { src: "/images/logo-gus.png", alt: "GUS" },
    { src: "/images/logo-cs.png", alt: "Credit Suisse" },
    { src: "/images/logo-pwc.png", alt: "PwC" },
    { src: "/images/logo-ey.png", alt: "EY" },
  ],
  [
    { src: "/images/logo-enspirion.png", alt: "Enspirion" },
    { src: "/images/logo-limango.png", alt: "Limango" },
  ],
  [
    { src: "/images/logo-rossmann.png", alt: "Rossmann" },
    { src: "/images/logo-nfz.png", alt: "NFZ" },
  ],
  [{ src: "/images/logo-helion.png", alt: "Helion" }],
];

export default function Workshops() {
  const t = useT();
  return (
    <Box component="section" sx={s.section}>
      <Box sx={s.top}>
        <TitleSection label={t.workshops.eyebrow} />
        <Typography component="p" sx={s.lead}>
          {t.workshops.lead}
        </Typography>
      </Box>

      <Box sx={s.body}>
        <Typography component="p" sx={s.intro}>
          {t.workshops.intro}
        </Typography>

        <Box sx={s.cards}>
          {t.workshops.cards.map((c, i) => (
            <Box component="article" sx={s.card} key={c.title}>
              <Box component="header" sx={s.cardHeader}>
                <Typography component="h3" sx={s.cardTitle}>
                  {c.title}
                </Typography>
              </Box>
              <Box sx={s.cardBody}>
                <Typography component="p" sx={s.cardText}>
                  {c.body}
                </Typography>
                <Box sx={s.logos}>
                  {logosByCard[i].map((l) => (
                    <Box
                      key={l.alt}
                      role="img"
                      aria-label={l.alt}
                      sx={[s.logo, { backgroundImage: `url(${l.src})` }]}
                    />
                  ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
