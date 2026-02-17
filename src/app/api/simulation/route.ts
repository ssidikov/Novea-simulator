import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// ---------- helpers ----------

/** Truncate a string to maxLen, returning null if empty */
function truncate(value: unknown, maxLen: number): string | null {
  if (value === null || value === undefined) return null
  const str = String(value).trim()
  return str.length === 0 ? null : str.slice(0, maxLen)
}

/** Parse as integer, return null if invalid */
function toInt(value: unknown): number | null {
  if (value === null || value === undefined) return null
  const n = Number(value)
  return Number.isFinite(n) ? Math.floor(n) : null
}

// ---------- POST ----------

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // --- Required field ---
    const sessionId = truncate(body.session_id, 100)
    if (!sessionId) {
      return NextResponse.json({ success: false, error: 'session_id is required' }, { status: 400 })
    }

    // --- Build row ---
    const row = {
      session_id: sessionId,
      scenario_type: truncate(body.scenario_type, 100),
      company_name: truncate(body.company_name, 200),
      employees_count: toInt(body.employees_count),
      convention_collective: truncate(body.convention_collective, 200),
      email: truncate(body.email, 254),
      phone: truncate(body.phone, 20),
      selected_offer: truncate(body.selected_offer, 100),
      form_message: truncate(body.form_message, 2000),
    }

    // --- Insert ---
    const { error } = await supabase.from('simulations').insert(row)

    if (error) {
      console.error('[simulation] Supabase insert error:', error.message)
      return NextResponse.json(
        { success: false, error: 'Failed to save simulation' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[simulation] Unexpected error:', err)
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
