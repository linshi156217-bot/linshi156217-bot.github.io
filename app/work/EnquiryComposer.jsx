"use client";

import { useRef, useState } from "react";
import styles from "./work.module.css";

const emailAddress = "hello@linshistudio.com";
const endpoint =
  "https://linshi-studio-enquiry-api.salt-hawthorn-whitby-demo.workers.dev/v1/enquiries";

function makeIdempotencyKey() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID().replaceAll("-", "");
  }
  return `${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

function attribution() {
  const query = new URLSearchParams(window.location.search);
  return {
    source: query.get("utm_source") || "direct",
    medium: query.get("utm_medium") || "website",
    campaign: query.get("utm_campaign") || "website_enquiry",
    content: query.get("utm_content") || "project_brief",
    term: query.get("utm_term") || "",
    referrer: document.referrer || "",
    landingPage: window.location.href,
  };
}

export default function EnquiryComposer() {
  const startedAt = useRef(Date.now());
  const idempotencyKey = useRef(makeIdempotencyKey());
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const payload = {
      projectType: String(data.get("projectType") || ""),
      business: String(data.get("business") || ""),
      contactName: String(data.get("contactName") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      town: String(data.get("town") || ""),
      sector: String(data.get("sector") || ""),
      currentLink: String(data.get("currentLink") || ""),
      goal: String(data.get("goal") || ""),
      website: String(data.get("website") || ""),
      privacyConsent: data.get("privacyConsent") === "yes",
      marketingConsent: data.get("marketingConsent") === "yes",
      startedAt: startedAt.current,
      idempotencyKey: idempotencyKey.current,
      attribution: attribution(),
    };

    setStatus("submitting");
    setMessage("");
    setFieldErrors({});

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey.current,
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.ok) {
        if (result.fields) setFieldErrors(result.fields);
        if (response.status === 429) {
          throw new Error("Too many recent attempts. Please try again in one hour.");
        }
        if (result.error === "form_timing_invalid") {
          startedAt.current = Date.now();
          throw new Error("Please review the form once more, then submit again.");
        }
        throw new Error("We could not save the enquiry. Please check the highlighted details and try again.");
      }

      setStatus("success");
      const source = encodeURIComponent(payload.attribution.source || "direct");
      window.location.assign(
        `/thank-you/?lead=${encodeURIComponent(result.leadId)}&source=${source}`,
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "The enquiry could not be submitted. Please try again.",
      );
    }
  }

  return (
    <form className={styles.briefForm} method="post" onSubmit={handleSubmit}>
      <div className={styles.briefGrid}>
        <label className={styles.formField}>
          <span>Preferred starting point *</span>
          <select name="projectType" defaultValue="" required aria-invalid={Boolean(fieldErrors.projectType)}>
            <option value="" disabled>Select one</option>
            <option>£350 annual website + AI-search review</option>
            <option>£149 mobile enquiry sprint</option>
            <option>Complete website from £650</option>
            <option>I would like your recommendation</option>
          </select>
          {fieldErrors.projectType && <small className={styles.fieldError}>{fieldErrors.projectType}</small>}
        </label>
        <label className={styles.formField}>
          <span>Business name *</span>
          <input name="business" autoComplete="organization" required maxLength="120" aria-invalid={Boolean(fieldErrors.business)} />
          {fieldErrors.business && <small className={styles.fieldError}>{fieldErrors.business}</small>}
        </label>
        <label className={styles.formField}>
          <span>Your name *</span>
          <input name="contactName" autoComplete="name" required maxLength="120" aria-invalid={Boolean(fieldErrors.contactName)} />
          {fieldErrors.contactName && <small className={styles.fieldError}>{fieldErrors.contactName}</small>}
        </label>
        <label className={styles.formField}>
          <span>Business email *</span>
          <input name="email" type="email" autoComplete="email" required maxLength="254" aria-invalid={Boolean(fieldErrors.email)} />
          {fieldErrors.email && <small className={styles.fieldError}>{fieldErrors.email}</small>}
        </label>
        <label className={styles.formField}>
          <span>Phone (optional)</span>
          <input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength="40" />
        </label>
        <label className={styles.formField}>
          <span>Town or service area *</span>
          <input name="town" autoComplete="address-level2" required maxLength="120" aria-invalid={Boolean(fieldErrors.town)} />
          {fieldErrors.town && <small className={styles.fieldError}>{fieldErrors.town}</small>}
        </label>
        <label className={styles.formField}>
          <span>Business type *</span>
          <select name="sector" defaultValue="" required aria-invalid={Boolean(fieldErrors.sector)}>
            <option value="" disabled>Select one</option>
            <option>Home renovation / local trade</option>
            <option>Hair / beauty</option>
            <option>Restaurant / hospitality</option>
            <option>Dental / private healthcare</option>
            <option>Boutique hotel / guesthouse</option>
            <option>Another independent business</option>
          </select>
          {fieldErrors.sector && <small className={styles.fieldError}>{fieldErrors.sector}</small>}
        </label>
        <label className={styles.formField}>
          <span>Current website or social page</span>
          <input name="currentLink" type="url" inputMode="url" placeholder="https://" maxLength="500" aria-invalid={Boolean(fieldErrors.currentLink)} />
          {fieldErrors.currentLink && <small className={styles.fieldError}>{fieldErrors.currentLink}</small>}
        </label>
      </div>

      <label className={`${styles.formField} ${styles.formFieldFull}`}>
        <span>What should the website help customers understand or do?</span>
        <textarea name="goal" rows="4" maxLength="1200" />
      </label>

      <label className={styles.honeypot} aria-hidden="true">
        Leave this field empty
        <input name="website" tabIndex="-1" autoComplete="off" />
      </label>

      <div className={styles.consentGroup}>
        <label className={styles.consentField}>
          <input name="privacyConsent" value="yes" type="checkbox" required />
          <span>
            I have read the <a href="/privacy/">privacy policy</a> and understand these details will be used to respond to my enquiry. *
          </span>
        </label>
        <label className={styles.consentField}>
          <input name="marketingConsent" value="yes" type="checkbox" />
          <span>Linshi Studio may email me occasional website guidance and service news. Optional, and I can unsubscribe at any time.</span>
        </label>
      </div>

      {message && (
        <div className={styles.formStatus} role="alert">
          <strong>Enquiry not sent</strong>
          <p>{message}</p>
          <a href={`mailto:${emailAddress}?subject=Website%20project%20enquiry`}>
            Or email {emailAddress}
          </a>
        </div>
      )}

      <div className={styles.briefSubmitRow}>
        <button className={styles.briefButton} type="submit" disabled={status === "submitting"}>
          {status === "submitting" ? "Sending securely…" : "Send my project brief"}
          <span aria-hidden="true">↗</span>
        </button>
        <p className={styles.briefNote}>
          Your brief is submitted securely and given a reference number. We
          normally reply personally within one UK working day.
        </p>
      </div>
    </form>
  );
}
