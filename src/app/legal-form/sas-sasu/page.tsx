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
import { UserSingleIcon, UsersGroupIcon } from '@/components/Icons'

export default function SasSasuPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleSelect = (value: 'seul' | 'plusieurs') => {
    updateFormData({ sasSeulOuPlusieur: value })
    const nextRoute = getNextRoute('/legal-form/sas-sasu', {
      ...formData,
      sasSeulOuPlusieur: value,
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
                Combien y a-t-il <span className='text-[#67d39d]'>d'associés</span> ?
              </>
            }
            description='Cette information nous permet de mieux adapter votre couverture santé.'
            maxWidth='606px'
          />

          <OptionGrid>
            <OptionButton
              icon={<UserSingleIcon className='h-6 w-6 text-white/60' />}
              title='Un seul'
              description='Une seule personne associée'
              onClick={() => handleSelect('seul')}
              variant='hover-white'
            />
            <OptionButton
              icon={<UsersGroupIcon className='h-6 w-6 text-white/60' />}
              title='Plusieurs'
              description='Plusieurs personnes associées'
              onClick={() => handleSelect('plusieurs')}
              variant='hover-white'
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
