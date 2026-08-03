"use client";

import { useState } from "react";
import styles from "./work.module.css";

const enquiryApi = process.env.NEXT_PUBLIC_ENQUIRY_API_URL || "https://api.linshistudio.com/api/inquiries";

export default function EnquiryComposer() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const query = new URLSearchParams(window.location.search);

    try {
      const response = await fetch(enquiryApi, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          utm_source: query.get("utm_source") || "direct",
          utm_campaign: query.get("utm_campaign") || "website_enquiry",
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "We could not send your project brief.");
      form.reset();
      setStatus("success");
      setMessage(result.message || "Thanks — your project brief has been received.");
    } catch (error) {
      setStatus("error");
      setMessage(`${error.message} You can also email hello@linshistudio.com.`);
    }
  }

  return (
    <form className={styles.briefForm} method="post" onSubmit={handleSubmit}>
      <input className={styles.honeypot} name="companyWebsite" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <div className={styles.briefGrid}>
        <label className={styles.formField}>
          <span>Preferred starting point *</span>
          <select name="projectType" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option>£149 mobile enquiry sprint</option>
            <option>Complete website from £650</option>
            <option>I would like your recommendation</option>
          </select>
        </label>
        <label className={styles.formField}>
          <span>Business name *</span>
          <input name="business" autoComplete="organization" maxLength="120" required />
        </label>
        <label className={styles.formField}>
          <span>Your name *</span>
          <input name="contactName" autoComplete="name" maxLength="120" required />
        </label>
        <label className={styles.formField}>
          <span>Email address *</span>
          <input name="email" type="email" autoComplete="email" maxLength="254" required />
        </label>
        <label className={styles.formField}>
          <span>Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" maxLength="60" />
        </label>
        <label className={styles.formField}>
          <span>Town or service area *</span>
          <input name="town" autoComplete="address-level2" maxLength="120" required />
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
          <input name="currentLink" type="url" inputMode="url" placeholder="https://" maxLength="500" />
        </label>
      </div>
      <label className={`${styles.formField} ${styles.formFieldFull}`}>
        <span>What should the website help customers understand or do?</span>
        <textarea name="goal" rows="4" maxLength="1200" />
      </label>
      <div className={styles.briefSubmitRow}>
        <button className={styles.briefButton} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending…" : "Send my project brief"} <span aria-hidden="true">→</span>
        </button>
        <p className={styles.briefNote}>Your details are sent securely to Linshi Studio and reviewed by a person before any reply is sent.</p>
      </div>
      {message ? <p className={`${styles.formStatus} ${status === "error" ? styles.formStatusError : ""}`} role="status">{message}</p> : null}
    </form>
  );
}
