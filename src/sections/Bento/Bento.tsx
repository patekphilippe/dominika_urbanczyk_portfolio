import Image from "next/image";
import { useT } from "@/i18n";
import styles from "./Bento.module.scss";

export default function Bento() {
  const t = useT();
  const b = t.bento;
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <article className={styles.left}>
          <Image
            className={styles.bg}
            src="/images/bento-loconi.jpg"
            alt=""
            fill
            sizes="682px"
          />
          <div className={styles.overlay} aria-hidden />
          <div className={styles.leftContent}>
            <div className={styles.metaTop}>
              <div>
                <p className={styles.tagLabel}>{b.caseStudyLabel}</p>
                <p className={styles.tagDetail}>{b.caseStudyDetail}</p>
              </div>
              <div className={styles.role}>
                <p className={styles.roleLabel}>{b.roleLabel}</p>
                <p className={styles.roleValue}>{b.roleValue}</p>
              </div>
            </div>
            <h3 className={styles.title}>{b.title}</h3>
            <div className={styles.bottom}>
              <a className={styles.cta} href="#loconi">
                {b.cta}
              </a>
              <span className={styles.year}>{b.year}</span>
            </div>
          </div>
        </article>

        <article className={styles.right}>
          <p className={styles.intro}>{b.intro}</p>
          <div className={styles.stats}>
            {b.stats.map((s) => (
              <div className={styles.stat} key={s.value}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.quoteBlock}>
            <p className={styles.quote}>{b.quote}</p>
            <p className={styles.author}>{b.author}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
