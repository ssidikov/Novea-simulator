'use client'
import { useRouter } from 'next/navigation'
import { useFormData, type Situation } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import { PageLayout, PageContainer, PageSection, OptionGrid } from '@/components/ui'
import { OptionButton } from '@/components/ui/OptionButton'
import {
  BriefcaseIcon,
  UsersIcon,
  BuildingIcon,
  HeartIcon,
  PersonIcon,
  UserGroupIcon,
} from '@/components/Icons'

export default function SimulateurStart() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleSituationSelect = (situation: Situation) => {
    updateFormData({ situation })
    const nextRoute = getNextRoute('/', { ...formData, situation })
    router.push(nextRoute)
  }

  return (
    <PageLayout>
      <PageContainer>
        <PageSection>
          {/* Header */}
          <div className='flex w-full flex-col items-center gap-5 sm:gap-6'>
            <div className='flex h-10 w-[216px] items-center justify-center rounded-full bg-white/10'>
              <div className='flex items-center gap-2.5'>
                <p className="font-['Poppins',sans-serif] text-center text-xs font-bold leading-tight text-[#67d39d]">
                  Simulateur
                </p>
                <div className='h-5 w-px bg-white/20' />
                <p className="font-['Poppins',sans-serif] text-center text-xs leading-tight text-white opacity-80">
                  Étape 1 sur 5
                </p>
              </div>
            </div>
            <h1 className="font-['Poppins',sans-serif] w-full whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
              {`Quelle est votre `}
              <span className='text-[#67d29d]'>situation</span>
              {` ?`}
            </h1>
          </div>

          {/* Options Grid */}
          <OptionGrid>
            <OptionButton
              icon={<BriefcaseIcon className='text-white/60' />}
              title='Fondateur, Dirigeant'
              description="Contrats spécifiques pour chefs d'entreprise"
              onClick={() => handleSituationSelect('dirigeant')}
            />

            <OptionButton
              icon={<UsersIcon className='text-white/60' />}
              title='Indépendant, travailleur non salarié'
              description='Protection adaptée aux TNS'
              onClick={() => handleSituationSelect('indtpt')}
            />

            <OptionButton
              icon={<BuildingIcon className='text-white/60' />}
              title='RH, comptable, expert comptable, etc'
              description='Solutions pour professionnels'
              onClick={() => handleSituationSelect('rh')}
            />

            <OptionButton
              icon={<HeartIcon className='text-white/60' />}
              title='Retraité'
              description='Couverture santé senior'
              onClick={() => handleSituationSelect('retraite')}
            />

            <OptionButton
              icon={<PersonIcon className='text-white/60' />}
              title='Particulier, Étudiants, etc'
              description='Formules individuelles flexibles'
              onClick={() => handleSituationSelect('parti')}
            />

            <OptionButton
              icon={<UserGroupIcon className='text-white/60' />}
              title="Salarié d'une entreprise qui a rejoint la mutuelle Novéa"
              description='Contrats collectifs entreprise'
              onClick={() => handleSituationSelect('salarie-entr')}
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
