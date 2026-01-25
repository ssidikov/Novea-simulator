'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'

// Icon components
function CheckIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='text-white transition-colors group-hover:text-[#715aff]'>
      <path
        d='M20 6L9 17L4 12'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='text-white transition-colors group-hover:text-[#715aff]'>
      <path
        d='M18 6L6 18M6 6L18 18'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M5 12H19M19 12L12 5M19 12L12 19'
        stroke='currentColor'
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
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 5L7.5 10L12.5 15'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

// OptionCard component
interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

function OptionCard({ icon, title, description, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className='group relative flex h-[136px] w-full items-center gap-[156px] rounded-xl bg-white/8 pl-[35px] pr-[21px] py-[15px] transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-lg sm:w-[420px]'>
      <div className='flex items-center gap-[20px]'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff]'>
          {icon}
        </div>
        <div className='flex flex-col items-start gap-[3px] text-left text-white'>
          <p className="font-['Poppins',sans-serif] w-[300px] text-base font-semibold leading-6 transition-colors group-hover:text-[#0a253a]">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] w-[310px] text-sm leading-5 transition-colors group-hover:text-black">
            {description}
          </p>
        </div>
      </div>
      <div className='absolute right-[21px] top-[92px]'>
        <ArrowRightIcon />
      </div>
    </button>
  )
}

export default function RemunerationPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleBack = () => {
    router.back()
  }

  const handleSelect = (value: 'oui' | 'non') => {
    updateFormData({ remuneration: value })
    const nextRoute = getNextRoute('/legal-form/seul-ou-plusieurs/remuneration', {
      ...formData,
      remuneration: value,
    })
    router.push(nextRoute)
  }

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
          {/* Header section */}
          <div className='flex w-full flex-col items-center gap-5 sm:gap-[22px]'>
            {/* Tag */}
            <div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
              <p className="font-['Poppins',sans-serif] text-xs font-bold leading-[17.834px] text-white">
                Configuration
              </p>
            </div>

            {/* Title */}
            <h1 className="font-['Poppins',sans-serif] w-full max-w-[606px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
              Est-ce que l'<span className='text-[#67d39d]'>associé</span> est rémunéré ?
            </h1>
          </div>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] w-full max-w-[489px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
            Cette information nous permet de mieux adapter votre couverture santé.
          </p>

          {/* Options grid */}
          <div className='grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-[35px]'>
            <OptionCard
              icon={<CheckIcon />}
              title="Oui c'est le cas"
              description="L'associé est rémunéré"
              onClick={() => handleSelect('oui')}
            />
            <OptionCard
              icon={<CloseIcon />}
              title="Non ce n'est pas le cas"
              description="L'associé n'est pas rémunéré"
              onClick={() => handleSelect('non')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
