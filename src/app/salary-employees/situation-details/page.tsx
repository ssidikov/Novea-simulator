'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid,
  OptionButton,
} from '@/components/ui'
import { ClipboardIcon } from '@/components/Icons'

// Search icon для второй кнопки
function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='11' cy='11' r='8' stroke='currentColor' strokeWidth='2' opacity='0.6' />
      <path
        d='M21 21L16.65 16.65'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
    </svg>
  )
}

export default function SituationDetailsPage() {
  const router = useRouter()
  const { updateFormData, formData } = useFormData()

  const handleSelect = (value: string) => {
    updateFormData({ situationDetails: value })
    const nextRoute = getNextRoute('/salary-employees/situation-details', {
      ...formData,
      situationDetails: value,
    })
    router.push(nextRoute)
  }

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag='Configuration'
            title={
              <>
                Précisez votre <span className='text-[#67d39d]'>situation</span>
              </>
            }
            description="Choisissez l'option qui correspond le mieux à votre situation actuelle."
            maxWidth='704px'
          />

          <OptionGrid>
            <OptionButton
              icon={<ClipboardIcon className='h-6 w-6 text-white/60' />}
              title="J'ai déjà un contrat ailleurs"
              description='Nous pourrons résilier votre contrat actuel pour vous'
              onClick={() => handleSelect('contrat-ailleurs')}
              variant='hover-white'
            />
            <OptionButton
              icon={<SearchIcon className='h-6 w-6 text-white/60' />}
              title='À la recherche de mon 1er contrat santé'
              description='Découvrez nos offres adaptées à vos besoins'
              onClick={() => handleSelect('premier-contrat')}
              variant='hover-white'
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
