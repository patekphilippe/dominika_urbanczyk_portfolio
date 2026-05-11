import Image from "next/image";
import { useT } from "@/i18n";
import styles from "./Showreel.module.scss";

export default function Showreel() {
  const t = useT();
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.stats}>
          {t.showreel.stats.map((s) => (
            <div className={styles.card} key={s.index}>
              <div className={styles.cardLeft}>
                <div className={styles.numberRow}>
                  <span className={styles.number}>{s.number}</span>
                  <span className={styles.plus}>{s.plus}</span>
                </div>
                <p className={styles.label}>{s.label}</p>
              </div>
              <span className={styles.idx}>{s.index}</span>
            </div>
          ))}
        </div>
        <div className={styles.imageWrap}>
          <Image
            className={styles.image}
            src="/images/showreel.jpg"
            alt="Showreel"
            width={1376}
            height={849}
            priority
          />
        </div>
      </div>
    </section>
  );
}
