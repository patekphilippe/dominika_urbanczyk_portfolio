import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useT } from "@/i18n";
import * as s from "./Header.styles";

export default function Header() {
  const t = useT();
  return (
    <Box component="header" sx={s.header}>
      <Box sx={s.inner}>
        <Link href="#top" aria-label="Dominika Urbańczyk — home" sx={s.logo} />

        <Box component="nav" sx={s.nav}>
          <Link href="#experience" sx={s.navItem}>
            {t.header.experience}
          </Link>
          <Link href="#contact" sx={s.navItem}>
            {t.header.contact}
          </Link>
          <Link href="#cv" sx={s.cta}>
            {t.header.getCv}
          </Link>
          <LanguageSwitch />
        </Box>
      </Box>
    </Box>
  );
}
