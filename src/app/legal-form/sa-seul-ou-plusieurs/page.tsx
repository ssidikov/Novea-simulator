'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import PageTemplate from '@/components/PageTemplate'

export default function SaSeulOuPlusieurPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleSelect = (choice: 'seul' | 'plusieurs') => {
    updateFormData({ saSeulOuPlusieur: choice })
    const nextRoute = getNextRoute('/legal-form/sa-seul-ou-plusieurs', {
      ...formData,
      saSeulOuPlusieur: choice,
    })
    router.push(nextRoute)
  }

  return (
    <PageTemplate title='Êtes-vous seul ou à plusieurs ?'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <button
          onClick={() => handleSelect('seul')}
          className='p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left'>
          <h3 className='font-semibold text-lg mb-2'>Seul</h3>
          <p className='text-gray-600 text-sm'>Je suis seul dirigeant</p>
        </button>

        <button
          onClick={() => handleSelect('plusieurs')}
          className='p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left'>
          <h3 className='font-semibold text-lg mb-2'>À plusieurs</h3>
          <p className='text-gray-600 text-sm'>Nous sommes plusieurs dirigeants</p>
        </button>
      </div>
    </PageTemplate>
  )
}
