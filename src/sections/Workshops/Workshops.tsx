import Image from "next/image";
import TitleSection from "@/components/TitleSection";
import { useT } from "@/i18n";
import styles from "./Workshops.module.scss";

// Logos are static assets and don't translate; kept alongside the card index.
const logosByCard: { src: string; alt: string }[][] = [
  [
    { src: "/images/logo-uw.png", alt: "Uniwersytet Warszawski" },
    { src: "/images/logo-uwr.png", alt: "Uniwersytet Wrocławski" },
    { src: "/images/logo-gus.png", alt: "GUS" },
    { src: "/images/logo-cs.png", alt: "Credit Suisse" },
    { src: "/images/logo-pwc.png", alt: "PwC" },
    { src: "/images/logo-ey.png", alt: "EY" },
  ],
  [
    { src: "/images/logo-enspirion.png", alt: "Enspirion" },
    { src: "/images/logo-limango.png", alt: "Limango" },
  ],
  [
    { src: "/images/logo-rossmann.png", alt: "Rossmann" },
    { src: "/images/logo-nfz.png", alt: "NFZ" },
  ],
  [{ src: "/images/logo-helion.png", alt: "Helion" }],
];

export default function Workshops() {
  const t = useT();
  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <TitleSection label={t.workshops.eyebrow} />
        <p className={styles.lead}>{t.workshops.lead}</p>
      </div>

      <div className={styles.body}>
        <p className={styles.intro}>{t.workshops.intro}</p>

        <div className={styles.cards}>
          {t.workshops.cards.map((c, i) => (
            <article className={styles.card} key={c.title}>
              <header className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{c.title}</h3>
              </header>
              <div className={styles.cardBody}>
                <p className={styles.cardText}>{c.body}</p>
                <div className={styles.logos}>
                  {logosByCard[i].map((l) => (
                    <div className={styles.logo} key={l.alt}>
                      <Image
                        src={l.src}
                        alt={l.alt}
                        width={60}
                        height={32}
                        className={styles.logoImg}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
