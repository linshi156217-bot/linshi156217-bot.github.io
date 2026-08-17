CREATE TABLE IF NOT EXISTS enquiries (
  id TEXT PRIMARY KEY,
  idempotency_key TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  business TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  town TEXT NOT NULL,
  sector TEXT NOT NULL,
  project_type TEXT NOT NULL,
  current_link TEXT,
  goal TEXT,
  privacy_consent INTEGER NOT NULL CHECK (privacy_consent = 1),
  marketing_consent INTEGER NOT NULL DEFAULT 0 CHECK (marketing_consent IN (0, 1)),
  consent_version TEXT NOT NULL,
  consent_at TEXT NOT NULL,
  source TEXT,
  medium TEXT,
  campaign TEXT,
  content TEXT,
  term TEXT,
  referrer TEXT,
  landing_page TEXT,
  user_agent TEXT,
  ip_hash TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  suppression INTEGER NOT NULL DEFAULT 0 CHECK (suppression IN (0, 1)),
  payload_version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX IF NOT EXISTS idx_enquiries_created_at
  ON enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_status
  ON enquiries(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_enquiries_email
  ON enquiries(email);
CREATE INDEX IF NOT EXISTS idx_enquiries_ip_hash
  ON enquiries(ip_hash, created_at DESC);

CREATE TABLE IF NOT EXISTS enquiry_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  enquiry_id TEXT NOT NULL,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  metadata TEXT,
  FOREIGN KEY (enquiry_id) REFERENCES enquiries(id)
);

CREATE INDEX IF NOT EXISTS idx_enquiry_events_enquiry
  ON enquiry_events(enquiry_id, occurred_at DESC);
