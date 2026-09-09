import { Suspense } from "react";
import ThankYouClient from "./ThankYouClient";
import styles from "./thank-you.module.css";

export const metadata = {
  title: "Project brief received",
  description: "Your Linshi Studio project brief has been received.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className={styles.page}>
      <div className={styles.frame}>
        <a className={styles.brand} href="/">
          <span>L.</span>
          Linshi Studio
        </a>
        <Suspense fallback={<p className={styles.loading}>Confirming your reference…</p>}>
          <ThankYouClient />
        </Suspense>
      </div>
    </main>
  );
}
