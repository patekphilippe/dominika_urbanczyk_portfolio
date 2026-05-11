import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./LoconiIntro.module.scss";

export default function LoconiIntro() {
  const t = useT();
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <TitleSection label={t.loconiIntro.eyebrow} secondary={t.loconiIntro.secondary} />
        <div className={styles.body}>
          <p className={styles.lead}>{t.loconiIntro.lead}</p>
          <p className={styles.note}>{t.loconiIntro.note}</p>
        </div>
      </div>
    </section>
  );
}
