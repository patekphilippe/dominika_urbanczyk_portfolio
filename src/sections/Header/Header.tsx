import Image from "next/image";
import LanguageSwitch from "@/components/LanguageSwitch";
import { useT } from "@/i18n";
import styles from "./Header.module.scss";

export default function Header() {
  const t = useT();
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top" aria-label="Dominika Urbańczyk — home">
          <Image src="/images/logo.svg" alt="dominikaurbańczyk" width={189} height={22} priority />
        </a>
        <nav className={styles.nav}>
          <a className={styles.navItem} href="#experience">
            {t.header.experience}
          </a>
          <a className={styles.navItem} href="#contact">
            {t.header.contact}
          </a>
          <a className={styles.cta} href="#cv">
            {t.header.getCv}
          </a>
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}
