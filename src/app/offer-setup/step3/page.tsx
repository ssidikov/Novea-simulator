'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import PageTemplate from '@/components/PageTemplate'

export default function OfferSetupStep3Page() {
  const router = useRouter()
  const { formData } = useFormData()

  const handleContinue = () => {
    const nextRoute = getNextRoute('/offer-setup/step3', formData)
    router.push(nextRoute)
  }

  return (
    <PageTemplate title='Configuration de votre offre - Étape 3'>
      <div className='space-y-6'>
        <p className='text-gray-700'>Dernières informations pour finaliser votre offre</p>

        <button
          onClick={handleContinue}
          className='w-full px-6 py-3 bg-[#2A3F54] text-white rounded-lg hover:bg-[#1a2f44] transition-colors font-medium'>
          Voir mon offre
        </button>
      </div>
    </PageTemplate>
  )
}
