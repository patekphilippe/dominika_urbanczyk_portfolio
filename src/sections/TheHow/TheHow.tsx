import { useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SplitText from "@/components/SplitText";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import type { Messages } from "@/i18n/types";
import * as s from "./TheHow.styles";

type Item = Messages["theHow"]["items"][number];

type AccordionItemProps = {
  item: Item;
  focusLabel: string;
  isOpen: boolean;
  onToggle: () => void;
};

function AccordionItem({ item, focusLabel, isOpen, onToggle }: AccordionItemProps) {
  return (
    <Box component="article" sx={s.itemRow}>
      <Box sx={s.itemHeader}>
        <Box component="span" sx={s.id}>
          {item.id}
        </Box>
        <Box sx={s.itemHeading}>
          <Typography component="h3" sx={s.itemTitle}>
            {item.title}
          </Typography>
        </Box>
        <IconButton
          sx={s.toggle}
          aria-label={isOpen ? "Collapse" : "Expand"}
          aria-expanded={isOpen}
          onClick={onToggle}
          disableRipple
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {isOpen ? (
              <path
                d="M6 12h12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M12 6v12M6 12h12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </IconButton>
      </Box>

      <Collapse in={isOpen} timeout={350} unmountOnExit={false}>
        <Box sx={s.itemDetails}>
          <Box sx={s.body}>
            <Typography component="p" sx={s.itemLead}>
              {item.lead}
            </Typography>
            {item.bullets.map((b, i) => (
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
              {focusLabel}
            </Box>
            <Box component="ul" sx={s.tags}>
              {item.tags.map((tag) => (
                <Box component="li" sx={s.tag} key={tag}>
                  {tag}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
}

export default function TheHow() {
  const t = useT();
  const { items, focusLabel } = t.theHow;
  const [openIds, setOpenIds] = useState<Set<string>>(
    () => new Set(items[0] ? [items[0].id] : [])
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

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
          {items.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              focusLabel={focusLabel}
              isOpen={openIds.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
