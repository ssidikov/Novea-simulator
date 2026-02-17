/**
 * RLS Security Test — simulations table
 *
 * Verifies that the anon role can ONLY insert.
 * SELECT, UPDATE, DELETE must all be blocked by Row Level Security.
 *
 * Run:  npx tsx scripts/test-rls-security.ts
 */

import { createClient } from '@supabase/supabase-js'

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!url || !anonKey) {
  console.error(
    '❌ Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY',
  )
  console.error('   Make sure .env.local is loaded (use --env-file=.env.local)')
  process.exit(1)
}

const supabase = createClient(url, anonKey)

let passed = 0
let failed = 0

function pass(label: string) {
  console.log(`  ✅ ${label}`)
  passed++
}

function fail(label: string, detail?: string) {
  console.log(`  ❌ ${label}${detail ? ` — ${detail}` : ''}`)
  failed++
}

async function main() {
  console.log('\n🔒 RLS Security Tests — simulations table\n')

  // ──────────────────────────────────────────
  // TEST 1: Anonymous INSERT should succeed
  // ──────────────────────────────────────────
  console.log('1. INSERT (anon)')
  const { data: insertData, error: insertError } = await supabase
    .from('simulations')
    .insert({
      session_id: `security-test-${Date.now()}`,
      scenario_type: 'test',
      company_name: 'Security Test Corp',
      status: 'test',
    })
    .select()

  if (insertError) {
    // Insert itself should work, but .select() after insert may fail due to no SELECT policy
    // Try insert without .select()
    const { error: insertOnly } = await supabase.from('simulations').insert({
      session_id: `security-test-${Date.now()}`,
      scenario_type: 'test',
      company_name: 'Security Test Corp',
      status: 'test',
    })

    if (insertOnly) {
      fail('INSERT should be allowed', insertOnly.message)
    } else {
      pass('INSERT allowed (without returning data — SELECT blocked as expected)')
    }
  } else {
    // If select also worked, that means SELECT is open — flag it
    if (insertData && insertData.length > 0) {
      fail('INSERT + SELECT both worked — SELECT should be blocked by RLS')
    } else {
      pass('INSERT allowed')
    }
  }

  // ──────────────────────────────────────────
  // TEST 2: Anonymous SELECT should be BLOCKED
  // ──────────────────────────────────────────
  console.log('2. SELECT (anon)')
  const { data: selectData, error: selectError } = await supabase
    .from('simulations')
    .select('*')
    .limit(1)

  if (selectError) {
    pass(`SELECT blocked — ${selectError.message}`)
  } else if (!selectData || selectData.length === 0) {
    // RLS returns empty array instead of error for blocked selects
    pass('SELECT returns empty (RLS silently filters all rows)')
  } else {
    fail('SELECT returned data — RLS is not blocking reads!', `Got ${selectData.length} rows`)
  }

  // ──────────────────────────────────────────
  // TEST 3: Anonymous UPDATE should be BLOCKED
  // ──────────────────────────────────────────
  console.log('3. UPDATE (anon)')
  const { data: updateData, error: updateError } = await supabase
    .from('simulations')
    .update({ status: 'hacked' })
    .eq('status', 'test')
    .select()

  if (updateError) {
    pass(`UPDATE blocked — ${updateError.message}`)
  } else if (!updateData || updateData.length === 0) {
    pass('UPDATE affected 0 rows (RLS blocked)')
  } else {
    fail('UPDATE succeeded — RLS is not blocking updates!', `Modified ${updateData.length} rows`)
  }

  // ──────────────────────────────────────────
  // TEST 4: Anonymous DELETE should be BLOCKED
  // ──────────────────────────────────────────
  console.log('4. DELETE (anon)')
  const { data: deleteData, error: deleteError } = await supabase
    .from('simulations')
    .delete()
    .eq('status', 'test')
    .select()

  if (deleteError) {
    pass(`DELETE blocked — ${deleteError.message}`)
  } else if (!deleteData || deleteData.length === 0) {
    pass('DELETE affected 0 rows (RLS blocked)')
  } else {
    fail('DELETE succeeded — RLS is not blocking deletes!', `Deleted ${deleteData.length} rows`)
  }

  // ──────────────────────────────────────────
  // TEST 5: Anonymous UPSERT should only insert (not read back)
  // ──────────────────────────────────────────
  console.log('5. UPSERT (anon)')
  const { data: upsertData, error: upsertError } = await supabase
    .from('simulations')
    .upsert({
      session_id: `security-upsert-${Date.now()}`,
      scenario_type: 'test-upsert',
      status: 'test',
    })
    .select()

  if (upsertError) {
    pass(`UPSERT + SELECT blocked — ${upsertError.message}`)
  } else if (!upsertData || upsertData.length === 0) {
    pass('UPSERT returned no data (SELECT blocked)')
  } else {
    fail('UPSERT returned data — SELECT policy may be too permissive')
  }

  // ──────────────────────────────────────────
  // RESULTS
  // ──────────────────────────────────────────
  console.log(`\n${'═'.repeat(40)}`)
  console.log(`  Results: ${passed} passed, ${failed} failed`)
  console.log(`${'═'.repeat(40)}\n`)

  if (failed > 0) {
    console.log('⚠️  Some security tests FAILED. Review your RLS policies.')
    process.exit(1)
  } else {
    console.log('🎉 All security tests passed. RLS is properly configured.')
    process.exit(0)
  }
}

main()
