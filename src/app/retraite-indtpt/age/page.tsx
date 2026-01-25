'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import PageTemplate from '@/components/PageTemplate'
import { useState } from 'react'

export default function AgePage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()
  const [age, setAge] = useState('')

  const handleContinue = () => {
    updateFormData({ age })
    const nextRoute = getNextRoute('/retraite-indtpt/age', formData)
    router.push(nextRoute)
  }

  return (
    <PageTemplate title='Quel est votre âge ?'>
      <div className='space-y-6'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Votre âge</label>
          <input
            type='number'
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
            placeholder='Ex: 65'
            min='18'
            max='120'
          />
        </div>

        <button
          onClick={handleContinue}
          disabled={!age}
          className='w-full px-6 py-3 bg-[#2A3F54] text-white rounded-lg hover:bg-[#1a2f44] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed'>
          Continuer
        </button>
      </div>
    </PageTemplate>
  )
}
