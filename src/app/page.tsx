import { basePath } from "../../next.config";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src={`${basePath ?? ''}/next.svg`}
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className={styles.ctas}>
        </div>
      </main>
      <footer className={styles.footer}>
        Book Club Management System © 2025
      </footer>
    </div>
  );
}
