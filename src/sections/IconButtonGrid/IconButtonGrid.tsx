import Image from "next/image";
import styles from "./IconButtonGrid.module.scss";

const COLS = 4;
const ROWS = 4;

export default function IconButtonGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {Array.from({ length: COLS }).map((_, ci) => (
          <div
            className={`${styles.col} ${ci % 2 === 1 ? styles.colOffset : ""}`}
            key={ci}
          >
            {Array.from({ length: ROWS }).map((__, ri) => (
              <div className={styles.tile} key={ri}>
                <Image
                  src="/images/work-cover.png"
                  alt="Selected work"
                  width={341}
                  height={192}
                  className={styles.tileImg}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
