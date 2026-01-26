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
import { UsersIcon } from '@/components/Icons'

export default function ConventionCollectivePage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleSelect = (convention: string) => {
    updateFormData({ conventionCollective: convention })
    const nextRoute = getNextRoute('/salary-employees/convention-collective', {
      ...formData,
      conventionCollective: convention,
    })
    router.push(nextRoute)
  }

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag='Vos Informations'
            title={
              <>
                Quelle est votre <span className='text-[#67d29d]'>convention collective</span> ?
              </>
            }
            description='La convention collective détermine les garanties minimales de votre contrat santé collectif.'
            maxWidth='760px'
          />

          <div className='flex w-full flex-col items-center gap-6'>
            <OptionGrid>
              <OptionButton
                icon={<UsersIcon className='text-white/60' />}
                title='Commerce'
                description='Convention collective du commerce'
                onClick={() => handleSelect('commerce')}
                variant='hover-white'
              />
              <OptionButton
                icon={<UsersIcon className='text-white/60' />}
                title='Syntec'
                description="Bureaux d'études techniques"
                onClick={() => handleSelect('syntec')}
                variant='hover-white'
              />
              <OptionButton
                icon={<UsersIcon className='text-white/60' />}
                title='Métallurgie'
                description='Convention collective de la métallurgie'
                onClick={() => handleSelect('metallurgie')}
                variant='hover-white'
              />
              <OptionButton
                icon={<UsersIcon className='text-white/60' />}
                title='BTP'
                description='Bâtiment et travaux publics'
                onClick={() => handleSelect('btp')}
                variant='hover-white'
              />
            </OptionGrid>

            <div className='w-full max-w-[875px]'>
              <OptionButton
                icon={<UsersIcon className='text-white/60' />}
                title='Je ne sais pas / Autre'
                description='Autre convention collective'
                onClick={() => handleSelect('autre')}
                variant='hover-white'
              />
            </div>
          </div>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
