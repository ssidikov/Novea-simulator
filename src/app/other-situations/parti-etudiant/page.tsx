'use client'

import PageTemplate from '@/components/PageTemplate'

export default function PartiEtudiantPage() {
  return (
    <PageTemplate title='Particulier / Étudiant' showBackButton={false}>
      <div className='space-y-6 text-center'>
        <div className='bg-blue-50 border-2 border-blue-200 rounded-lg p-8'>
          <h2 className='text-xl font-semibold text-gray-800 mb-4'>Informations importantes</h2>
          <p className='text-gray-700'>
            Pour les particuliers et étudiants, nous vous recommandons de contacter directement
            notre service client pour obtenir une offre personnalisée.
          </p>
        </div>

        <div className='space-y-4'>
          <p className='text-gray-600'>
            Contactez-nous au : <strong>01 XX XX XX XX</strong>
          </p>
          <p className='text-gray-600'>
            Ou par email : <strong>contact@novea.fr</strong>
          </p>
        </div>
      </div>
    </PageTemplate>
  )
}
