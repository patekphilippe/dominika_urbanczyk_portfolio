import ArrowOutward from "@/components/ArrowOutward";
import { useT } from "@/i18n";
import styles from "./Footer.module.scss";

export default function Footer() {
  const t = useT();
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.top}>
        <div className={styles.links}>
          <div className={styles.col1}>
            <a href={`mailto:${t.footer.email}`} className={styles.email}>
              {t.footer.email}
            </a>
          </div>
          <div className={styles.col2}>
            <a className={styles.linkedin} href="#" aria-label={t.footer.linkedinLabel}>
              <span>{t.footer.linkedinLabel}</span>
              <ArrowOutward size={24} />
            </a>
            <p className={styles.signoff}>{t.footer.signoff}</p>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
