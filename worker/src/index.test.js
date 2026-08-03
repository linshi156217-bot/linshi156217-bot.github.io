import test from "node:test";
import assert from "node:assert/strict";
import { buildReplyDraft, normaliseSubmission } from "./index.js";

const valid = {
  projectType: "£149 mobile enquiry sprint",
  business: "North Star Plumbing",
  town: "York",
  sector: "Home renovation / local trade",
  contactName: "Alex Morgan",
  email: "Alex@Example.com",
  phone: "+44 7700 900123",
  currentLink: "https://example.com",
  goal: "Generate more qualified calls",
  utm_source: "google",
  utm_campaign: "york-trades",
};

test("normalises a valid website enquiry", () => {
  const lead = normaliseSubmission(valid);
  assert.equal(lead.email, "alex@example.com");
  assert.equal(lead.utmSource, "google");
  assert.equal(lead.business, "North Star Plumbing");
});

test("rejects missing contact details and unsafe URLs", () => {
  assert.throws(() => normaliseSubmission({ ...valid, email: "" }), /Missing required fields/);
  assert.throws(() => normaliseSubmission({ ...valid, currentLink: "javascript:alert(1)" }), /valid http/);
});

test("creates a personalised draft for human review", () => {
  const draft = buildReplyDraft(normaliseSubmission(valid));
  assert.match(draft, /Hi Alex/);
  assert.match(draft, /North Star Plumbing/);
  assert.match(draft, /review the details/);
});
