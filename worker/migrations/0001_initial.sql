CREATE TABLE IF NOT EXISTS inquiries (
  id TEXT PRIMARY KEY,
  project_type TEXT NOT NULL,
  business TEXT NOT NULL,
  town TEXT NOT NULL,
  sector TEXT NOT NULL,
  contact_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL DEFAULT '',
  current_link TEXT NOT NULL DEFAULT '',
  goal TEXT NOT NULL DEFAULT '',
  utm_source TEXT NOT NULL DEFAULT 'direct',
  utm_campaign TEXT NOT NULL DEFAULT 'website_enquiry',
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'approved', 'sent')),
  draft_reply TEXT NOT NULL,
  notification_error TEXT,
  delivery_id TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  approved_at TEXT,
  sent_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_inquiries_status_created ON inquiries(status, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);

CREATE TABLE IF NOT EXISTS submission_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ip_hash TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_submission_events_ip_created ON submission_events(ip_hash, created_at DESC);
