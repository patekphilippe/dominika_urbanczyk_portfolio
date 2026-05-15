import Box from "@mui/material/Box";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useT } from "@/i18n";
import * as s from "./Header.styles";

export default function Header() {
  const t = useT();
  const handleLogoClick = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box component="header" sx={s.header}>
      <Box sx={s.inner}>
        <Box
          component="button"
          type="button"
          aria-label="Dominika Urbańczyk — home"
          onClick={handleLogoClick}
          sx={s.logo}
        />

        <Box component="nav" sx={s.nav}>
          <Box component="span" sx={s.navItem}>
            {t.header.experience}
          </Box>
          <Box component="span" sx={s.navItem}>
            {t.header.contact}
          </Box>
          <Box component="span" sx={s.cta}>
            {t.header.getCv}
          </Box>
          <LanguageSwitch />
        </Box>
      </Box>
    </Box>
  );
}
