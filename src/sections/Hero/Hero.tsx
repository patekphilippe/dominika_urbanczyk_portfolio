import Image from "next/image";
import { useT } from "@/i18n";
import styles from "./Hero.module.scss";

export default function Hero() {
  const t = useT();
  return (
    <section className={styles.hero} id="top">
      <div className={styles.card}>
        <Image
          className={styles.bg}
          src="/images/hero-portrait.png"
          alt=""
          fill
          priority
          sizes="1432px"
        />
        <div className={styles.content}>
          <div className={styles.top}>
            <nav className={styles.tabs}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`${styles.tab} ${i === 0 ? styles.tabActive : styles.tabDisabled}`}
                >
                  {t.hero.tab}
                </span>
              ))}
            </nav>
            <h1 className={styles.headline}>{t.hero.headline}</h1>
          </div>
          <div className={styles.bottom}>
            <div className={styles.status}>
              <span className={styles.statusDot} aria-hidden />
              <span className={styles.statusText}>{t.hero.statusOnMarket}</span>
            </div>
            <span className={styles.role}>{t.hero.role}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
