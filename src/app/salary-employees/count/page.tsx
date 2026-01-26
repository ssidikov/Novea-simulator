'use client'

import { useRouter } from 'next/navigation'
import { useFormData, type EmployeeCount } from '@/contexts/FormContext'
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
import { UsersIcon } from '@/components/Icons'

export default function SalaryEmployeesCountPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleSelect = (count: EmployeeCount) => {
    updateFormData({ employeeCount: count })
    const nextRoute = getNextRoute('/salary-employees/count', {
      ...formData,
      employeeCount: count,
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
                Combien de <span className='text-[#67d29d]'>salariés</span> compte votre entreprise
                ?
              </>
            }
            description='Vous pouvez inclure les temps partiels, apprentis et CDD mais pas les stagiaires.'
            maxWidth='800px'
          />

          <OptionList>
            <OptionButton
              icon={<UsersIcon className='text-white/60' />}
              title='1 à 5'
              description='Très petite entreprise'
              onClick={() => handleSelect('1-5')}
              variant='hover-white'
            />
            <OptionButton
              icon={<UsersIcon className='text-white/60' />}
              title='6 à 100'
              description='Petite et moyenne entreprise'
              onClick={() => handleSelect('6-100')}
              variant='hover-white'
            />
            <OptionButton
              icon={<UsersIcon className='text-white/60' />}
              title='Plus de 100'
              description='Grande entreprise'
              onClick={() => handleSelect('100+')}
              variant='hover-white'
            />
          </OptionList>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
