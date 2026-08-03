"use client";

import styles from "./work.module.css";

const emailAddress = "hello@linshistudio.com";

export default function EnquiryComposer() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const query = new URLSearchParams(window.location.search);
    const source = query.get("utm_source") || "direct";
    const campaign = query.get("utm_campaign") || "website_enquiry";
    const business = String(data.get("business") || "").trim();
    const town = String(data.get("town") || "").trim();
    const sector = String(data.get("sector") || "").trim();
    const currentLink = String(data.get("currentLink") || "").trim();
    const goal = String(data.get("goal") || "").trim();

    const subject = `Website project brief — ${business}`;
    const body = [
      "Hello Linshi Studio,",
      "",
      `Business name: ${business}`,
      `Town / service area: ${town}`,
      `Business type: ${sector}`,
      `Current website or social page: ${currentLink || "None yet"}`,
      `What the website should help with: ${goal || "I would like your recommendation"}`,
      "",
      `Enquiry source: ${source}`,
      `Campaign: ${campaign}`,
    ].join("\n");

    window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form className={styles.briefForm} method="post" onSubmit={handleSubmit}>
      <div className={styles.briefGrid}>
        <label className={styles.formField}>
          <span>Business name *</span>
          <input name="business" autoComplete="organization" required />
        </label>
        <label className={styles.formField}>
          <span>Town or service area *</span>
          <input name="town" autoComplete="address-level2" required />
        </label>
        <label className={styles.formField}>
          <span>Business type *</span>
          <select name="sector" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>Home renovation / local trade</option>
            <option>Hair / beauty</option>
            <option>Restaurant / hospitality</option>
            <option>Dental / private healthcare</option>
            <option>Boutique hotel / guesthouse</option>
            <option>Another independent business</option>
          </select>
        </label>
        <label className={styles.formField}>
          <span>Current website or social page</span>
          <input name="currentLink" type="url" inputMode="url" placeholder="https://" />
        </label>
      </div>
      <label className={`${styles.formField} ${styles.formFieldFull}`}>
        <span>What should the website help customers understand or do?</span>
        <textarea name="goal" rows="4" maxLength="500" />
      </label>
      <div className={styles.briefSubmitRow}>
        <button className={styles.briefButton} type="submit">
          Prepare my project email <span aria-hidden="true">↗</span>
        </button>
        <p className={styles.briefNote}>
          This prepares an email on your device. Nothing typed here is sent to
          or stored by this website.
        </p>
      </div>
    </form>
  );
}
