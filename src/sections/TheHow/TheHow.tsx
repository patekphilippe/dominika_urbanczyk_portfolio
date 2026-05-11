import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./TheHow.module.scss";

export default function TheHow() {
  const t = useT();
  const { expanded, collapsed } = t.theHow;
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.top}>
          <TitleSection label={t.theHow.eyebrow} onDark />
          <h2 className={styles.headline}>{t.theHow.headline}</h2>
        </div>

        <div className={styles.list}>
          <article className={styles.expanded}>
            <span className={styles.id}>{expanded.id}</span>
            <div className={styles.body}>
              <h3 className={styles.itemTitle}>{expanded.title}</h3>
              <p className={styles.itemLead}>{expanded.lead}</p>
              {expanded.bullets.map((b, i) => (
                <p className={styles.bullet} key={i}>
                  <span className={styles.arrow}>→</span>
                  <span>{b}</span>
                </p>
              ))}
            </div>
            <div className={styles.tagsCol}>
              <span className={styles.tagsLabel}>{expanded.focusLabel}</span>
              <ul className={styles.tags}>
                {expanded.tags.map((tag) => (
                  <li className={styles.tag} key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <button className={styles.toggle} aria-label="Collapse" type="button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </article>

          {collapsed.map((c) => (
            <article className={styles.collapsed} key={c.id}>
              <span className={styles.id}>{c.id}</span>
              <h3 className={styles.collapsedTitle}>{c.title}</h3>
              <button className={styles.toggle} aria-label="Expand" type="button">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6v12M6 12h12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
