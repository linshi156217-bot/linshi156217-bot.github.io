"use client";

import { useEffect, useState } from "react";
import styles from "./queue.module.css";

const publicEndpoint = process.env.NEXT_PUBLIC_ENQUIRY_API_URL || "https://api.linshistudio.com/api/inquiries";
const apiBase = publicEndpoint.replace(/\/api\/inquiries\/?$/, "");

function statusLabel(status) {
  return ({ new: "Needs review", approved: "Approved", sent: "Sent" })[status] || status;
}

export default function EnquiryQueue() {
  const [token, setToken] = useState("");
  const [draftToken, setDraftToken] = useState("");
  const [leads, setLeads] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const selected = leads.find((lead) => lead.id === selectedId) || null;

  useEffect(() => {
    const saved = window.sessionStorage.getItem("linshiAdminToken") || "";
    if (saved) { setToken(saved); load(saved); }
  }, []);

  async function request(path, options = {}, authToken = token) {
    const response = await fetch(`${apiBase}${path}`, {
      ...options,
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${authToken}`, ...(options.headers || {}) },
    });
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Request failed");
    return body;
  }

  async function load(authToken = token) {
    setBusy(true); setError("");
    try {
      const body = await request("/api/admin/inquiries", {}, authToken);
      setLeads(body.inquiries || []);
      setSelectedId((current) => current || body.inquiries?.[0]?.id || null);
    } catch (loadError) {
      setError(loadError.message);
      if (loadError.message === "Unauthorised") {
        setToken("");
        window.sessionStorage.removeItem("linshiAdminToken");
      }
    } finally { setBusy(false); }
  }

  function unlock(event) {
    event.preventDefault();
    window.sessionStorage.setItem("linshiAdminToken", draftToken);
    setToken(draftToken);
    load(draftToken);
  }

  async function action(path, options) {
    setBusy(true); setError("");
    try { await request(path, options); await load(); }
    catch (actionError) { setError(actionError.message); setBusy(false); }
  }

  if (!token) {
    return <main className={styles.lockScreen}><form className={styles.lockCard} onSubmit={unlock}><span className={styles.mark}>LS</span><p className={styles.eyebrow}>PRIVATE OPERATIONS</p><h1>Enquiry queue</h1><p>Enter the admin token stored in your Cloudflare Worker secrets.</p><input type="password" value={draftToken} onChange={(event) => setDraftToken(event.target.value)} autoComplete="current-password" required /><button type="submit">Open queue</button>{error ? <span className={styles.error}>{error}</span> : null}</form></main>;
  }

  return (
    <main className={styles.page}>
      <header className={styles.header}><div><p className={styles.eyebrow}>LINSHI STUDIO</p><h1>Enquiry queue</h1></div><div className={styles.headerActions}><button onClick={() => load()} disabled={busy}>Refresh</button><button onClick={() => { sessionStorage.removeItem("linshiAdminToken"); setToken(""); }}>Lock</button></div></header>
      {error ? <div className={styles.errorBanner}>{error}</div> : null}
      <div className={styles.workspace}>
        <aside className={styles.list}>
          <div className={styles.listTitle}><strong>{leads.length} enquiries</strong><span>{busy ? "Updating…" : "Live customer table"}</span></div>
          {leads.map((lead) => <button key={lead.id} className={`${styles.lead} ${selectedId === lead.id ? styles.leadActive : ""}`} onClick={() => setSelectedId(lead.id)}><span className={`${styles.status} ${styles[`status_${lead.status}`]}`}>{statusLabel(lead.status)}</span><strong>{lead.business}</strong><span>{lead.contact_name} · {lead.town}</span><time>{new Date(lead.created_at).toLocaleString("en-GB")}</time></button>)}
        </aside>
        <section className={styles.detail}>
          {selected ? <LeadDetail key={`${selected.id}-${selected.updated_at}`} lead={selected} busy={busy} action={action} /> : <div className={styles.empty}>No enquiry selected.</div>}
        </section>
      </div>
    </main>
  );
}

function LeadDetail({ lead, busy, action }) {
  const [draft, setDraft] = useState(lead.draft_reply);
  const save = () => action(`/api/admin/inquiries/${lead.id}`, { method: "PATCH", body: JSON.stringify({ draftReply: draft }) });
  const approve = () => action(`/api/admin/inquiries/${lead.id}/approve`, { method: "POST" });
  const send = () => {
    if (window.confirm(`Send this approved reply to ${lead.email}?`)) action(`/api/admin/inquiries/${lead.id}/send`, { method: "POST" });
  };
  return <>
    <div className={styles.detailHead}><div><span className={`${styles.status} ${styles[`status_${lead.status}`]}`}>{statusLabel(lead.status)}</span><h2>{lead.business}</h2><p>{lead.contact_name} · <a href={`mailto:${lead.email}`}>{lead.email}</a>{lead.phone ? ` · ${lead.phone}` : ""}</p></div></div>
    <div className={styles.facts}><Fact label="Project" value={lead.project_type} /><Fact label="Town" value={lead.town} /><Fact label="Sector" value={lead.sector} /><Fact label="Source" value={`${lead.utm_source} / ${lead.utm_campaign}`} /></div>
    <section className={styles.section}><h3>Customer goal</h3><p>{lead.goal || "Not provided"}</p>{lead.current_link ? <a href={lead.current_link} target="_blank" rel="noreferrer">Open current website ↗</a> : null}</section>
    <section className={styles.section}><h3>Reply draft</h3><textarea value={draft} onChange={(event) => setDraft(event.target.value)} rows="12" /><p className={styles.note}>Saving an edit resets approval. Sending remains locked until a person approves the final wording.</p></section>
    <div className={styles.actions}><button onClick={save} disabled={busy}>Save draft</button><button className={styles.approve} onClick={approve} disabled={busy || lead.status === "approved" || lead.status === "sent"}>{lead.status === "approved" ? "Approved" : "Approve reply"}</button><button className={styles.send} onClick={send} disabled={busy || lead.status !== "approved"}>Send with Zoho</button></div>
    <div className={styles.meta}>Received {new Date(lead.created_at).toLocaleString("en-GB")}{lead.sent_at ? ` · Sent ${new Date(lead.sent_at).toLocaleString("en-GB")}` : ""}</div>
  </>;
}

function Fact({ label, value }) { return <div><span>{label}</span><strong>{value || "—"}</strong></div>; }
