'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import { PageLayout, PageContainer, PageSection, PageHeader, BackButton, OptionGrid, OptionButton } from '@/components/ui'
import { CheckIcon, CloseIcon } from '@/components/Icons'

function QuestionIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='9' stroke='white' strokeWidth='2' opacity='0.6' />
      <path
        d='M12 16V16.5M12 13C12 11.5 13.5 11 13.5 9.5C13.5 8.5 12.5 8 12 8C11 8 10 8.5 10 9.5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
    </svg>
  )
}

export default function ExistingContractPage() {
  const router = useRouter()
  const { updateFormData, formData } = useFormData()

  const handleSelect = (value: string) => {
    updateFormData({ existingContract: value })
    const nextRoute = getNextRoute('/salary-employees/existing-contract', {
      ...formData,
      existingContract: value,
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
                Avez-vous déjà un <span className='text-[#67d29d]'>contrat de mutuelle santé</span> ?
              </>
            }
            description='Cette information nous permet de vous proposer la solution la plus adaptée à votre situation actuelle.'
            maxWidth='828px'
          />

          <div className='flex w-full flex-col items-center gap-4'>
            <OptionGrid>
              <OptionButton
                icon={<CheckIcon className='text-white/60' />}
                title='Oui'
                description="J'ai déjà un contrat de mutuelle santé"
                onClick={() => handleSelect('oui')}
                variant='hover-white'
              />
              <OptionButton
                icon={<CloseIcon className='text-white/60' />}
                title='Non'
                description="Je n'ai pas encore de contrat"
                onClick={() => handleSelect('non')}
                variant='hover-white'
              />
            </OptionGrid>

            <div className='w-full max-w-[875px]'>
              <OptionButton
                icon={<QuestionIcon />}
                title='Je ne sais pas'
                description='Je ne suis pas sûr de ma situation'
                onClick={() => handleSelect('ne-sais-pas')}
                variant='hover-white'
              />
            </div>
          </div>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
