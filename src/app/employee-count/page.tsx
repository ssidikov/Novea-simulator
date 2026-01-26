'use client'
import { useRouter } from 'next/navigation'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionList,
} from '@/components/ui'
import { OptionButton } from '@/components/ui/OptionButton'
import { Users2Icon, Users3Icon, BuildingOfficeIcon } from '@/components/Icons'

export default function EmployeeCountPage() {
  const router = useRouter()

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag='Configuration'
            title={
              <>
                {`Combien de `}
                <span className='text-[#67d29d]'>salariés</span>
                {` compte votre entreprise ?`}
              </>
            }
            description='Vous pouvez inclure les temps partiels, apprentis et CDD mais pas les stagiaires.'
          />

          <OptionList>
            <OptionButton
              icon={<Users2Icon className='text-white/60' />}
              title='Moins de 10 salariés'
              description='Petite entreprise'
              onClick={() => router.push('/salary-employees/count')}
            />

            <OptionButton
              icon={<Users3Icon className='text-white/60' />}
              title='Entre 10 et 250 salariés'
              description='Entreprise de taille moyenne'
              onClick={() => router.push('/salary-employees/large-company')}
            />

            <OptionButton
              icon={<BuildingOfficeIcon className='text-white/60' />}
              title='Plus de 250 salariés'
              description='Grande entreprise'
              onClick={() => router.push('/salary-employees/very-large')}
            />
          </OptionList>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
