'use client'

import { useRouter } from 'next/navigation'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid,
  OptionButton,
} from '@/components/ui'
import { CheckIcon, CloseIcon } from '@/components/Icons'

export default function RetraiteIndtptPage() {
  const router = useRouter()

  const handleSelect = (choice: 'oui' | 'non') => {
    // TODO: Update form context with partner coverage choice
    router.push('/retraite-indtpt/social-status')
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
                Voulez-vous couvrir votre <span className='text-[#67d29d]'>partenaire</span> ?
              </>
            }
            description='Vous pourrez ajouter à tout moment votre partenaire une fois votre contrat signé.'
            maxWidth='606px'
          />

          <OptionGrid>
            <OptionButton
              icon={<CheckIcon className='text-white/60' />}
              title='Oui'
              description='Je souhaite couvrir mon partenaire'
              onClick={() => handleSelect('oui')}
              variant='hover-white'
            />
            <OptionButton
              icon={<CloseIcon className='text-white/60' />}
              title='Non'
              description='Couverture individuelle uniquement'
              onClick={() => handleSelect('non')}
              variant='hover-white'
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
