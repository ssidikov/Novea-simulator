'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import { ArrowLeftIcon, UsersIcon } from '@/components/Icons'

interface TagProps {
  txt: string
}

function Tag({ txt }: TagProps) {
  return (
    <div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
      <p className="font-['Poppins',sans-serif] text-center text-[12.484px] font-bold leading-[17.834px] text-white">
        {txt}
      </p>
    </div>
  )
}

interface ConventionCardProps {
  title: string
  description: string
  onClick: () => void
}

function ConventionCard({ title, description, onClick }: ConventionCardProps) {
  return (
    <button
      onClick={onClick}
      className='group relative flex h-[136px] w-full shrink-0 items-center gap-[156px] rounded-xl bg-white/8 pl-[35px] pr-[21px] py-[15px] transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] sm:w-[420px]'>
      <div className='flex items-center gap-5'>
        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff]'>
          <UsersIcon className='h-6 w-6 text-white transition-colors group-hover:text-white' />
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
      <div className='absolute bottom-10 right-[21px]'>
        <div className='h-6 w-6 opacity-30 transition-all group-hover:opacity-100'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='text-white transition-colors group-hover:text-[#0a253a]'>
            <path
              d='M5 12L10 17L19 8'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </button>
  )
}

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

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Back button */}
      <button
        onClick={handleBack}
        className='fixed left-4 top-8 z-10 flex h-[21px] items-center gap-2 opacity-70 transition-opacity hover:opacity-100 sm:left-8 lg:left-[62px] lg:top-[40px]'>
        <ArrowLeftIcon className='h-5 w-5 text-white sm:h-6 sm:w-6' />
        <p className="font-['Poppins',sans-serif] text-center text-xs font-medium leading-[21px] text-white sm:text-sm">
          Retour
        </p>
      </button>

      {/* Main content */}
      <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[149px]'>
        <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[62px]'>
          {/* Header */}
          <div className='flex w-full flex-col items-center gap-5 sm:gap-[22px]'>
            <Tag txt='Vos Informations' />
            <h1 className="font-['Poppins',sans-serif] w-full max-w-[760px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
              <span>Quelle est votre </span>
              <span className='text-[#67d29d]'>convention collective</span>
              <span> ?</span>
            </h1>
          </div>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] w-full max-w-[489px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
            La convention collective détermine les garanties minimales de votre contrat santé
            collectif.
          </p>

          {/* Cards Grid */}
          <div className='flex w-full flex-col items-center gap-6 sm:gap-8'>
            <div className='grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-[35px]'>
              <ConventionCard
                title='Commerce'
                description='Convention collective du commerce'
                onClick={() => handleSelect('commerce')}
              />
              <ConventionCard
                title='Syntec'
                description="Bureaux d'études techniques"
                onClick={() => handleSelect('syntec')}
              />
              <ConventionCard
                title='Métallurgie'
                description='Convention collective de la métallurgie Anonyme'
                onClick={() => handleSelect('metallurgie')}
              />
              <ConventionCard
                title='BTP'
                description='Bâtiment et travaux publics'
                onClick={() => handleSelect('btp')}
              />
            </div>

            {/* Autre option - full width */}
            <div className='w-full max-w-[875px]'>
              <ConventionCard
                title='Je ne sais pas / Autre'
                description='Autre convention collective'
                onClick={() => handleSelect('autre')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
