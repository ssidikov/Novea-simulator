'use client'

import PageTemplate from '@/components/PageTemplate'

export default function SalarieEntreprisePage() {
  return (
    <PageTemplate title="Salarié d'entreprise" showBackButton={false}>
      <div className='space-y-6 text-center'>
        <div className='bg-blue-50 border-2 border-blue-200 rounded-lg p-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Informations importantes</h2>
          <p className='text-gray-700'>
            En tant que salarié d'entreprise, votre mutuelle est généralement proposée par votre
            employeur. Veuillez vous rapprocher de votre service RH pour plus d'informations.
          </p>
        </div>

        <div className='space-y-4'>
          <p className='text-gray-600'>
            Pour toute question, contactez-nous au : <strong>01 XX XX XX XX</strong>
          </p>
        </div>
      </div>
    </PageTemplate>
  )
}
