'use client'
import { useRouter } from 'next/navigation'
import { useFormData, type Situation } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import {
  BriefcaseIcon,
  UsersIcon,
  BuildingIcon,
  HeartIcon,
  PersonIcon,
  UserGroupIcon,
  ArrowRightIcon,
} from '@/components/Icons'

interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
  highlighted?: boolean
}

function OptionCard({ icon, title, description, onClick, highlighted = false }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className='group relative h-[136px] w-full rounded-xl bg-white/8 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)]'>
      <div className='absolute left-6 top-[46px] flex h-12 max-w-[calc(100%-8rem)] items-start gap-4 sm:left-8 sm:gap-5'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff] sm:h-12 sm:w-12'>
          {icon}
        </div>
        <div className='flex flex-col items-start gap-0.5 pt-0.5 text-left'>
          <p className="font-['Poppins',sans-serif] text-sm font-semibold leading-6 text-white transition-colors group-hover:text-[#0a253a] sm:text-base">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] text-xs leading-5 text-white/50 transition-colors group-hover:text-black sm:text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className='absolute bottom-10 right-4 sm:right-6'>
        <div className='h-5 w-5 overflow-hidden opacity-30 transition-all group-hover:opacity-100 sm:h-6 sm:w-6'>
          <ArrowRightIcon className='text-white transition-colors group-hover:text-[#0a253a]' />
        </div>
      </div>
    </button>
  )
}

export default function SimulateurStart() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleSituationSelect = (situation: Situation) => {
    updateFormData({ situation })
    const nextRoute = getNextRoute('/', { ...formData, situation })
    router.push(nextRoute)
  }

  return (
    <div className='relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Main content */}
      <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[149px]'>
        <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[62px]'>
          {/* Header */}
          <div className='flex w-full flex-col items-center gap-5 sm:gap-[22px]'>
            <div className='flex h-[38px] w-[216.188px] items-center justify-center rounded-full bg-white/10'>
              <div className='flex items-center gap-2.5'>
                <p className="font-['Poppins',sans-serif] text-center text-[12.484px] font-bold leading-[17.834px] text-[#67d39d]">
                  Simulateur
                </p>
                <div className='h-[19.016px] w-px bg-white/20' />
                <p className="font-['Poppins',sans-serif] text-center text-[12.484px] leading-[17.834px] text-white opacity-80">
                  Étape 1 sur 5
                </p>
              </div>
            </div>
            <h1 className="font-['Poppins',sans-serif] w-full max-w-[800px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
              {`Quelle est votre `}
              <span className='text-[#67d29d]'>situation</span>
              {` ?`}
            </h1>
          </div>

          {/* Options Grid */}
          <div className='w-full'>
            <div className='grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-[35px]'>
              {/* Fondateur, Dirigeant */}
              <OptionCard
                icon={<BriefcaseIcon className='text-white/60' />}
                title='Fondateur, Dirigeant'
                description="Contrats spécifiques pour chefs d'entreprise"
                onClick={() => handleSituationSelect('dirigeant')}
              />

              {/* Indépendant, travailleur non salarié */}
              <OptionCard
                icon={<UsersIcon className='text-white/60' />}
                title='Indépendant, travailleur non salarié'
                description='Protection adaptée aux TNS'
                onClick={() => handleSituationSelect('indtpt')}
                highlighted={true}
              />

              {/* RH, comptable, expert comptable */}
              <OptionCard
                icon={<BuildingIcon className='text-white/60' />}
                title='RH, comptable, expert comptable, etc'
                description='Solutions pour professionnels'
                onClick={() => handleSituationSelect('rh')}
              />

              {/* Retraité */}
              <OptionCard
                icon={<HeartIcon className='text-white/60' />}
                title='Retraité'
                description='Couverture santé senior'
                onClick={() => handleSituationSelect('retraite')}
              />

              {/* Particulier, Étudiants, etc */}
              <OptionCard
                icon={<PersonIcon className='text-white/60' />}
                title='Particulier, Étudiants, etc'
                description='Formules individuelles flexibles'
                onClick={() => handleSituationSelect('parti')}
              />

              {/* Salarié d'une entreprise */}
              <OptionCard
                icon={<UserGroupIcon className='text-white/60' />}
                title="Salarié d'une entreprise qui a rejoint la mutuelle Novéa"
                description='Contrats collectifs entreprise'
                onClick={() => handleSituationSelect('salarie-entr')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
