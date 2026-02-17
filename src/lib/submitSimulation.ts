import type { FormData } from '@/contexts/FormContext'

interface SubmitResult {
  success: boolean
  error?: string
}

/**
 * Submit completed simulation data to the backend API.
 * Maps FormContext fields to the API schema.
 */
export async function submitSimulation(
  sessionId: string,
  formData: FormData,
): Promise<SubmitResult> {
  try {
    const response = await fetch('/api/simulation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: sessionId,
        scenario_type: formData.situation,
        company_name: formData.companyName || formData.appointmentCompanyName || null,
        employees_count: formData.appointmentEmployeeCount
          ? parseInt(formData.appointmentEmployeeCount, 10)
          : null,
        convention_collective: formData.conventionCollective,
        email: formData.personalInfo?.email || formData.appointmentEmail || null,
        phone: formData.personalInfo?.phone || formData.appointmentPhone || null,
        selected_offer: formData.healthOffer,
        form_message: null,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return { success: false, error: data.error || 'Submission failed' }
    }

    return { success: true }
  } catch {
    return { success: false, error: 'Network error' }
  }
}
