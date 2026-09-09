import Link from "next/link";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Link className={styles.brand} href="/" aria-label="Linshi Studio home">
          <span aria-hidden="true">L.</span>
          Linshi Studio
        </Link>
        <p className={styles.code}>404 · This route has moved</p>
        <h1>
          Nothing here.
          <br />
          <em>Let&apos;s get you back.</em>
        </h1>
        <p className={styles.copy}>
          The page may have been renamed or removed. Return to the studio, or
          browse the complete website work.
        </p>
        <nav className={styles.actions} aria-label="Recovery links">
          <Link href="/">Return to the studio <span aria-hidden="true">↗</span></Link>
          <Link href="/work/">View selected work <span aria-hidden="true">↗</span></Link>
        </nav>
      </section>
    </main>
  );
}
