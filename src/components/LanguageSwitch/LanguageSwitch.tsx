import Box from "@mui/material/Box";
import MuiButton from "@mui/material/Button";
import { useLocale } from "@/i18n";
import type { Locale } from "@/i18n";
import * as s from "./LanguageSwitch.styles";

const options: Locale[] = ["pl", "en"];

export default function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale();
  return (
    <Box role="group" aria-label={t.header.languageSwitchLabel} sx={s.switchRoot}>
      {options.map((l) => {
        const active = locale === l;
        return (
          <MuiButton
            key={l}
            type="button"
            disableRipple
            aria-pressed={active}
            onClick={() => setLocale(l)}
            sx={[s.btn, active && s.btnActive]}
          >
            {l.toUpperCase()}
          </MuiButton>
        );
      })}
    </Box>
  );
}
