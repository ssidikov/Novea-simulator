'use client'

import { useRouter } from 'next/navigation'
import { CheckIcon, CloseIcon } from '@/components/Icons'

export default function RetraiteIndtptPage() {
  const router = useRouter()

  const handleSelect = (choice: 'oui' | 'non') => {
    // TODO: Update form context with partner coverage choice
    router.push('/retraite-indtpt/social-status')
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-[71.34px] left-[611.59px] w-[342.406px] h-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='absolute top-[619.59px] left-[71.34px] w-[342.406px] h-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Back button */}
      <button
        onClick={handleBack}
        className='absolute top-10 left-[62px] flex items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity'>
        <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
          <path
            d='M12.5 15L7.5 10L12.5 5'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <span className='text-sm font-medium'>Retour</span>
      </button>

      {/* Main content */}
      <div className='flex flex-col items-center justify-start pt-[149px] px-4'>
        <div className='w-full max-w-[920px] flex flex-col items-center gap-[62px]'>
          {/* Header */}
          <div className='flex flex-col items-center gap-[22px] px-4'>
            {/* Tag */}
            <div className='bg-white/10 px-[31px] py-[9px] rounded-full'>
              <p className='text-white text-[12.484px] font-bold leading-[17.834px] text-center'>
                Configuration
              </p>
            </div>

            {/* Title */}
            <h1 className='text-[56px] font-extrabold text-center text-white leading-[70px] max-w-[606px]'>
              Voulez-vous couvrir votre <span className='text-[#67d29d]'>partenaire</span> ?
            </h1>
          </div>

          {/* Description */}
          <p className='text-white/80 text-base text-center max-w-[489px] leading-[28.981px]'>
            Vous pourrez ajouter à tout moment votre partenaire une fois votre contrat signé.
          </p>

          {/* Options */}
          <div className='grid grid-cols-2 gap-[35px] p-3'>
            {/* Oui option */}
            <button
              onClick={() => handleSelect('oui')}
              className='w-[420px] h-[136px] bg-white/8 rounded-xl px-[35px] py-[15px] flex items-center gap-[156px] hover:bg-white/12 transition-colors group'>
              <div className='flex items-center gap-5'>
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center'>
                  <CheckIcon className='w-6 h-6 text-white' />
                </div>
                <div className='flex flex-col gap-[3px] items-start text-left'>
                  <p className='text-white text-base font-semibold leading-6'>Oui</p>
                  <p className='text-white text-sm leading-5 max-w-[310px]'>
                    Société par Actions Simplifiée
                  </p>
                </div>
              </div>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                className='opacity-30 group-hover:opacity-50 transition-opacity'>
                <path
                  d='M9 18L15 12L9 6'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>

            {/* Non option */}
            <button
              onClick={() => handleSelect('non')}
              className='w-[420px] h-[136px] bg-white/8 rounded-xl px-[35px] py-[15px] flex items-center gap-[156px] hover:bg-white/12 transition-colors group'>
              <div className='flex items-center gap-5'>
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center'>
                  <CloseIcon className='w-6 h-6 text-white' />
                </div>
                <div className='flex flex-col gap-[3px] items-start text-left'>
                  <p className='text-white text-base font-semibold leading-6'>Non</p>
                  <p className='text-white text-sm leading-5 max-w-[310px]'>
                    Société À Responsabilité Limitée
                  </p>
                </div>
              </div>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                className='opacity-30 group-hover:opacity-50 transition-opacity'>
                <path
                  d='M9 18L15 12L9 6'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
