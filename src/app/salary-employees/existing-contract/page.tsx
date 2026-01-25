'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'

// Icon components
function CheckIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 12L11 14L15 10'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M8 8L16 16M16 8L8 16'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
    </svg>
  )
}

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

function ArrowRightIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 6L15 12L9 18'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.3'
      />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 5L7.5 10L12.5 15'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  value: string
  onClick: () => void
}

function OptionCard({ icon, title, description, value, onClick }: OptionCardProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='group relative flex h-[136px] w-full items-center gap-[156px] rounded-xl bg-white/8 pl-[35px] pr-[21px] py-[15px] transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)]'>
      {/* Content */}
      <div className='flex items-center gap-5'>
        {/* Icon */}
        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff]'>
          {icon}
        </div>

        {/* Text */}
        <div className='flex flex-col items-start gap-[3px] text-left text-white'>
          <p className="font-['Poppins',sans-serif] w-[300px] text-base font-semibold leading-6 transition-colors group-hover:text-[#0a253a]">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] w-[310px] text-sm leading-5 transition-colors group-hover:text-black">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className='absolute right-[21px] top-[92px]'>
        <ArrowRightIcon />
      </div>
    </button>
  )
}

export default function ExistingContractPage() {
  const router = useRouter()
  const { updateFormData, formData } = useFormData()

  const handleBack = () => {
    router.back()
  }

  const handleSelect = (value: string) => {
    updateFormData({ existingContract: value })
    const nextRoute = getNextRoute('/salary-employees/existing-contract', {
      ...formData,
      existingContract: value,
    })
    router.push(nextRoute)
  }

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.414px] w-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Back button */}
      <button
        onClick={handleBack}
        className='fixed left-4 top-8 z-10 flex h-[21px] items-center gap-2 opacity-70 transition-opacity hover:opacity-100 sm:left-8 lg:left-[62px] lg:top-[40px]'>
        <BackIcon />
        <p className="font-['Poppins',sans-serif] text-center text-xs font-medium leading-[21px] text-white sm:text-sm">
          Retour
        </p>
      </button>

      {/* Main content */}
      <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[149px]'>
        <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[62px]'>
          {/* Header */}
          <div className='flex w-full flex-col items-center gap-5 sm:gap-[22px]'>
            {/* Tag */}
            <div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
              <p className="font-['Poppins',sans-serif] text-xs font-bold leading-[17.834px] text-white">
                Configuration
              </p>
            </div>

            {/* Title */}
            <h1 className="font-['Poppins',sans-serif] w-full max-w-[828px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
              Avez-vous déjà un <span className='text-[#67d39d]'>contrat de mutuelle santé</span> ?
            </h1>
          </div>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] w-full max-w-[489px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
            Cette information nous permet de vous proposer la solution la plus adaptée à votre
            situation actuelle.
          </p>

          {/* Options */}
          <div className='flex w-full flex-col items-center gap-4 sm:gap-6 lg:gap-[35px]'>
            {/* Row with 2 cards */}
            <div className='grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-[35px]'>
              <div className='w-full sm:w-[420px]'>
                <OptionCard
                  icon={<CheckIcon />}
                  title='Commecer'
                  description="J'ai déjà un contrat de mutuelle santé"
                  value='oui'
                  onClick={() => handleSelect('oui')}
                />
              </div>
              <div className='w-full sm:w-[420px]'>
                <OptionCard
                  icon={<CloseIcon />}
                  title='Syntec'
                  description="Je n'ai pas encore de contrat"
                  value='non'
                  onClick={() => handleSelect('non')}
                />
              </div>
            </div>

            {/* Full width card */}
            <div className='w-full max-w-[875px]'>
              <OptionCard
                icon={<QuestionIcon />}
                title='Je ne sais pas / Autre'
                description='Je ne suis pas sûr de ma situation'
                value='ne-sais-pas'
                onClick={() => handleSelect('ne-sais-pas')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
