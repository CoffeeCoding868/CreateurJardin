/*
# Create contact_messages table (single-tenant, no auth)

1. New Tables
- `contact_messages`
- `id` (uuid, primary key)
- `name` (text, not null) — name of the person contacting the boutique
- `email` (text, not null) — email to reply to
- `message` (text, not null) — the message body
- `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `contact_messages`.
- Allow anyone (anon + authenticated) to INSERT new messages (public contact form).
- No SELECT/UPDATE/DELETE for anon/authenticated — the boutique owner reads messages server-side.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);
