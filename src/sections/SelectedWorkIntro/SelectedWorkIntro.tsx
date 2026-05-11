import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./SelectedWorkIntro.module.scss";

export default function SelectedWorkIntro() {
  const t = useT();
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <TitleSection
          label={t.selectedWorkIntro.eyebrow}
          secondary={t.selectedWorkIntro.secondary}
        />
        <div className={styles.body}>
          <p className={styles.lead}>{t.selectedWorkIntro.lead}</p>
          <p className={styles.note}>{t.selectedWorkIntro.note}</p>
        </div>
      </div>
    </section>
  );
}
