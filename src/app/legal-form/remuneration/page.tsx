'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import PageTemplate from '@/components/PageTemplate'
import { useState } from 'react'

export default function RemunerationPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()
  const [remuneration, setRemuneration] = useState('')

  const handleContinue = () => {
    updateFormData({ remuneration })
    const nextRoute = getNextRoute('/legal-form/remuneration', formData)
    router.push(nextRoute)
  }

  return (
    <PageTemplate title='Quelle est votre rémunération ?'>
      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>
            Rémunération annuelle (€)
          </label>
          <input
            type='number'
            value={remuneration}
            onChange={(e) => setRemuneration(e.target.value)}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            placeholder='Ex: 45000'
          />
        </div>

        <button
          onClick={handleContinue}
          disabled={!remuneration}
          className='w-full px-6 py-3 bg-[#2A3F54] text-white rounded-lg hover:bg-[#1a2f44] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed'>
          Continuer
        </button>
      </div>
    </PageTemplate>
  )
}
