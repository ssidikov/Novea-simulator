'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import PageTemplate from '@/components/PageTemplate'

export default function TnsQuestionPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleContinue = () => {
    const nextRoute = getNextRoute('/legal-form/tns-question', formData)
    router.push(nextRoute)
  }

  return (
    <PageTemplate title='Statut TNS'>
      <div className='space-y-6'>
        <p className='text-gray-700'>Question sur le statut de travailleur non salarié</p>

        <button
          onClick={handleContinue}
          className='w-full px-6 py-3 bg-[#2A3F54] text-white rounded-lg hover:bg-[#1a2f44] transition-colors font-medium'>
          Continuer
        </button>
      </div>
    </PageTemplate>
  )
}
