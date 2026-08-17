"use client";

import { useSearchParams } from "next/navigation";
import styles from "./thank-you.module.css";

export default function ThankYouClient() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("lead") || "Submitted";

  return (
    <section className={styles.card}>
      <p className={styles.eyebrow}>Secure enquiry received</p>
      <h1>
        Thank you.
        <br />
        <em>Your brief is in.</em>
      </h1>
      <p className={styles.lead}>
        Shi will read the details personally and normally reply within one UK
        working day. No payment or commitment has been made.
      </p>
      <div className={styles.reference}>
        <span>Your reference</span>
        <strong>{reference}</strong>
      </div>
      <div className={styles.steps}>
        <article>
          <span>01</span>
          <div>
            <h2>We review the real customer journey</h2>
            <p>Your current link, service and main mobile action are checked before any recommendation.</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h2>You receive a clear next step</h2>
            <p>The reply will separate the useful first step from anything that can wait.</p>
          </div>
        </article>
      </div>
      <div className={styles.actions}>
        <a href="/website-review/">See the £350 review</a>
        <a href="/">Return to the studio</a>
      </div>
      <p className={styles.note}>
        Keep the reference above. If the reply has not arrived after one UK
        working day, email <a href="mailto:hello@linshistudio.com">hello@linshistudio.com</a>.
      </p>
    </section>
  );
}
