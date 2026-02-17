-- ============================================================
-- Novéa Simulateur — simulations table
-- Run this in the Supabase SQL Editor
-- ============================================================

CREATE TABLE IF NOT EXISTS simulations (
  id                    uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id            text        NOT NULL,
  scenario_type         text,
  company_name          text,
  employees_count       integer,
  convention_collective text,
  email                 text,
  phone                 text,
  selected_offer        text,
  form_message          text,
  status                text        DEFAULT 'new',
  created_at            timestamptz DEFAULT now()
);

-- Row Level Security
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts only (no select/update/delete)
CREATE POLICY "Allow anonymous insert"
  ON simulations
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Index for chronological queries
CREATE INDEX idx_simulations_created_at
  ON simulations (created_at DESC);
