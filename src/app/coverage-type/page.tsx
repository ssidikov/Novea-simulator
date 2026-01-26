'use client'
import { useRouter } from 'next/navigation'
import { useFormData, type CoverageType } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionList,
  OptionButton,
} from '@/components/ui'
import { UsersIcon, UserSingleIcon, UserGroupIcon } from '@/components/Icons'

export default function CoverageTypePage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleCoverageSelect = (coverageType: CoverageType) => {
    updateFormData({ coverageType })
    const nextRoute = getNextRoute('/coverage-type', { ...formData, coverageType })
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
                {`Qui souhaitez-vous `}
                <span className='text-[#67d29d]'>couvrir</span>
                {` ?`}
              </>
            }
            description='Choisissez le type de couverture santé que vous souhaitez mettre en place pour votre entreprise.'
            maxWidth='606px'
          />

          <OptionList>
            <OptionButton
              icon={<UsersIcon className='text-white/60' />}
              title='Salariés'
              description='Couverture santé collective pour vos collaborateurs'
              onClick={() => handleCoverageSelect('salarie-seulement')}
              variant='hover-white'
            />
            <OptionButton
              icon={<UserSingleIcon className='text-white/60' />}
              title='Dirigeant seulement'
              description='Protection santé individuelle pour le dirigeant'
              onClick={() => handleCoverageSelect('dirigeant-seulement')}
              variant='hover-white'
            />
            <OptionButton
              icon={<UserGroupIcon className='text-white/60' />}
              title='Dirigeant et salarié'
              description='Couverture complète dirigeant + collaborateurs'
              onClick={() => handleCoverageSelect('dirigeant-salarie')}
              variant='hover-white'
            />
          </OptionList>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
