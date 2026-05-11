import styles from "./TitleSection.module.scss";

type Props = {
  /** Eyebrow text. */
  label: string;
  /** Optional secondary line below (e.g. "Loconi", "Selected work"). */
  secondary?: string;
  /** When the section is on a dark background. */
  onDark?: boolean;
};

export default function TitleSection({ label, secondary, onDark }: Props) {
  return (
    <div className={`${styles.title} ${onDark ? styles.dark : ""}`}>
      <span className={styles.label}>{label}</span>
      {secondary && (
        <span className={styles.secondary}>
          {secondary.split("\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </span>
      )}
    </div>
  );
}
