import Link from "next/link";
import styles from "../styles/Home.module.css";

type buttonTypes = {
  href: string;
  disabled?: boolean;
  children?: any;
};

export const LinkButton = ({ href, disabled, children }: buttonTypes) => {
  return (
    <Link href={href} passHref>
      <a>
        <button className={styles.button} disabled={disabled}>
          {children}
        </button>
      </a>
    </Link>
  )
};