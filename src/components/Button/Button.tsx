import styles from "./Button.module.scss";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
};

export default function Button({ children, href, variant = "primary" }: Props) {
  const className = `${styles.btn} ${styles[variant]}`;
  if (href) {
    return (
      <a className={className} href={href}>
        <span>{children}</span>
        <ArrowOutward />
      </a>
    );
  }
  return (
    <button className={className} type="button">
      <span>{children}</span>
      <ArrowOutward />
    </button>
  );
}

function ArrowOutward() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 17L17 6M17 6H8M17 6V15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
