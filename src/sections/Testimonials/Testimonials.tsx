import ArrowOutward from "@/components/ArrowOutward";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const t = useT();
  const tt = t.testimonials;
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.top}>
          <TitleSection label={tt.eyebrow} onDark />
          <h2 className={styles.headline}>
            {tt.headlineMain}
            <span className={styles.asterisk}>{tt.headlineAsterisk}</span>
          </h2>
          <p className={styles.aside}>
            <span className={styles.asteriskAside}>{tt.asideAsterisk}</span>
            {tt.asideText}
          </p>
        </div>

        <div className={styles.grid}>
          {/* Score card */}
          <article className={`${styles.card2} ${styles.scoreCard}`}>
            <div className={styles.scoreTop}>
              <div className={styles.scoreNumWrap}>
                <span className={styles.bigNum}>6</span>
                <span className={styles.starMark}>*</span>
                <span className={styles.outOf}>/6</span>
              </div>
              <ul className={styles.scoreLabels}>
                {tt.score.labels.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
            <div className={styles.scoreBottom}>
              <p className={styles.scoreLabel} style={{ whiteSpace: "pre-line" }}>
                {tt.score.ratingQuestion}
              </p>
              <p className={styles.scoreQuote}>{tt.score.quote}</p>
              <div>
                <p className={styles.scoreAuthor}>{tt.score.author}</p>
                <p className={styles.scoreSource}>{tt.score.source}</p>
              </div>
            </div>
          </article>

          {/* Stacked pair */}
          <div className={styles.stack}>
            <article className={`${styles.card2} ${styles.smallCard}`}>
              <p className={styles.smallQuote}>{tt.studentCircle.quote}</p>
              <a className={styles.cardSource} href="#">
                <span>{tt.studentCircle.source}</span>
                <ArrowOutward size={20} />
              </a>
            </article>
            <article className={`${styles.card2} ${styles.smallCard}`}>
              <p className={styles.bigQuote}>{tt.linkedinBig.quote}</p>
              <a className={styles.cardSource} href="#">
                <span>{tt.linkedinBig.source}</span>
                <ArrowOutward size={20} />
              </a>
            </article>
          </div>

          {/* Helion review card */}
          <article className={`${styles.card2} ${styles.opinionCard}`}>
            <a className={styles.cardSource} href="#">
              <span>{tt.helion.source}</span>
              <ArrowOutward size={20} />
            </a>
            <div className={styles.opinionBody}>
              <div className={styles.stars} aria-label="6 of 6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className={styles.bigQuote}>{tt.helion.quote}</p>
            </div>
          </article>

          {/* HR card */}
          <article className={`${styles.card2} ${styles.opinionCard}`}>
            <p className={styles.bigQuote}>{tt.hrLinkedin.quote}</p>
            <a className={styles.cardSource} href="#">
              <span>{tt.hrLinkedin.source}</span>
              <ArrowOutward size={20} />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" aria-hidden>
      <path d="M5.5 0.5l1.65 3.45L11 4.45l-2.92 2.6.7 3.85L5.5 8.95 2.22 10.9l.7-3.85L0 4.45l3.85-.5L5.5.5z" />
    </svg>
  );
}
