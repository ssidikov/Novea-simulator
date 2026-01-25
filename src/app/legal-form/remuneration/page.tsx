'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import PageTemplate from '@/components/PageTemplate'
import { useState } from 'react'
import type { OuiNon } from '@/contexts/FormContext'

export default function RemunerationPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()
  const [remuneration, setRemuneration] = useState<OuiNon | null>(null)

  const handleContinue = (choice: OuiNon) => {
    updateFormData({ remuneration: choice })
    const nextRoute = getNextRoute('/legal-form/remuneration', {
      ...formData,
      remuneration: choice,
    })
    router.push(nextRoute)
  }

  return (
    <PageTemplate title='Êtes-vous rémunéré ?'>
      <div className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <button
            onClick={() => handleContinue('oui')}
            className='p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all'>
            <span className='font-semibold text-lg'>Oui</span>
          </button>

          <button
            onClick={() => handleContinue('non')}
            className='p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all'>
            <span className='font-semibold text-lg'>Non</span>
          </button>
        </div>
      </div>
    </PageTemplate>
  )
}
