-- ============================================================
-- Novéa Simulateur — add UNIQUE constraint on session_id
-- Prevents duplicate submissions for the same session
-- Run this in the Supabase SQL Editor
-- ============================================================

ALTER TABLE simulations
ADD CONSTRAINT unique_session UNIQUE (session_id);
