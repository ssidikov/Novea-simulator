import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// ---------- constants ----------

const MAX_PAYLOAD_BYTES = 5 * 1024 // 5 KB
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// ---------- helpers ----------

/** Truncate a string to maxLen, returning null if empty */
function truncate(value: unknown, maxLen: number): string | null {
  if (value === null || value === undefined) return null
  const str = String(value).trim()
  return str.length === 0 ? null : str.slice(0, maxLen)
}

/** Require a non-empty string, truncated to maxLen */
function requireString(value: unknown, maxLen: number): string | null {
  const result = truncate(value, maxLen)
  return result && result.length > 0 ? result : null
}

/** Parse as integer, return null if invalid */
function toInt(value: unknown): number | null {
  if (value === null || value === undefined) return null
  const n = Number(value)
  return Number.isFinite(n) ? Math.floor(n) : null
}

function error(message: string, status: number) {
  return NextResponse.json({ success: false, error: message }, { status })
}

// ---------- POST ----------

export async function POST(request: Request) {
  try {
    // --- Payload size guard ---
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength, 10) > MAX_PAYLOAD_BYTES) {
      return error('Payload too large', 413)
    }

    const rawBody = await request.text()
    if (rawBody.length > MAX_PAYLOAD_BYTES) {
      return error('Payload too large', 413)
    }

    let body: Record<string, unknown>
    try {
      body = JSON.parse(rawBody)
    } catch {
      return error('Invalid JSON', 400)
    }

    // --- Required fields ---
    const sessionId = requireString(body.session_id, 100)
    if (!sessionId) {
      return error('session_id is required', 400)
    }

    const email = requireString(body.email, 255)
    if (!email) {
      return error('email is required', 400)
    }
    if (!EMAIL_REGEX.test(email)) {
      return error('Invalid email format', 400)
    }

    // --- Build sanitized row ---
    const row = {
      session_id: sessionId,
      scenario_type: truncate(body.scenario_type, 100),
      company_name: truncate(body.company_name, 255),
      employees_count: toInt(body.employees_count),
      convention_collective: truncate(body.convention_collective, 200),
      email,
      phone: truncate(body.phone, 50),
      selected_offer: truncate(body.selected_offer, 100),
      form_message: truncate(body.form_message, 1000),
    }

    // --- Insert ---
    const { error: dbError } = await supabase.from('simulations').insert(row)

    if (dbError) {
      // Duplicate session_id → 409, but don't reveal internal details
      if (dbError.code === '23505') {
        return error('Simulation already submitted', 409)
      }
      console.error('[simulation] Supabase insert error:', dbError.message)
      return error('Failed to save simulation', 500)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[simulation] Unexpected error:', err)
    return error('Invalid request', 400)
  }
}
