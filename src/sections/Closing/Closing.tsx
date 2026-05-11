import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./Closing.module.scss";

export default function Closing() {
  const t = useT();
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <TitleSection label={t.closing.eyebrow} />
        <div className={styles.text}>
          {t.closing.lines.map((line, i) => (
            <p className={styles.line} key={i}>
              <span className={styles.dark}>{line.dark}</span>
              <span className={styles.muted}>{line.muted}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
