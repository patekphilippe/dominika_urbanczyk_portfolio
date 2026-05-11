import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./WorkHistory.module.scss";

export default function WorkHistory() {
  const t = useT();
  return (
    <section className={styles.section} id="experience">
      <div className={styles.row}>
        <TitleSection label={t.workHistory.eyebrow} />
        <div className={styles.headlineWrap}>
          <h2 className={styles.headline}>
            {t.workHistory.headline.line1}
            <br />
            {t.workHistory.headline.line2}
          </h2>
        </div>
        <p className={styles.aside}>{t.workHistory.aside}</p>
      </div>

      <div className={styles.row}>
        <TitleSection
          label={t.workHistory.work.eyebrow}
          secondary={`${t.workHistory.work.company}\n${t.workHistory.work.period}`}
        />
        <div className={styles.body}>
          <p className={styles.lead}>{t.workHistory.work.lead}</p>
          <p className={styles.note}>{t.workHistory.work.note}</p>
        </div>
      </div>
    </section>
  );
}
