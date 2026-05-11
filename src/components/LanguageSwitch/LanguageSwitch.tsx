import { useLocale } from "@/i18n";
import type { Locale } from "@/i18n";
import styles from "./LanguageSwitch.module.scss";

const options: Locale[] = ["pl", "en"];

export default function LanguageSwitch() {
  const { locale, setLocale, t } = useLocale();
  return (
    <div className={styles.switch} role="group" aria-label={t.header.languageSwitchLabel}>
      {options.map((l) => (
        <button
          key={l}
          type="button"
          className={`${styles.btn} ${locale === l ? styles.active : ""}`}
          aria-pressed={locale === l}
          onClick={() => setLocale(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
