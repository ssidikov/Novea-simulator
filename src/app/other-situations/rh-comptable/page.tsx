'use client'

import { useRouter } from 'next/navigation'
import { CheckIcon } from '@/components/Icons'

export default function RhComptablePage() {
  const router = useRouter()

  const handleSelect = (choice: 'salaries' | 'dirigeant-seulement' | 'dirigeant-salarie') => {
    // TODO: Update form context with coverage choice
    router.push('/company-status')
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
              Qui souhaitez-vous <span className='text-[#67d29d]'>couvrir</span> ?
            </h1>
          </div>

          {/* Description */}
          <p className='text-white/80 text-base text-center max-w-[489px] leading-[28.981px]'>
            Choisissez le type de couverture santé que vous souhaitez mettre en place pour votre
            entreprise.
          </p>

          {/* Options */}
          <div className='flex flex-col gap-[35px] p-3'>
            {/* Salariés */}
            <button
              onClick={() => handleSelect('salaries')}
              className='w-[653px] h-[136px] bg-white/8 rounded-xl px-[35px] py-[15px] flex items-center justify-between hover:bg-white/12 transition-colors group'>
              <div className='flex items-center gap-5'>
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center'>
                  <CheckIcon className='w-6 h-6 text-white' />
                </div>
                <div className='flex flex-col gap-[3px] items-start text-left'>
                  <p className='text-white text-base font-semibold leading-6'>Salariés</p>
                  <p className='text-white text-sm leading-5'>
                    Couverture santé collective pour vos collaborateurs
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

            {/* Dirigeant seulement */}
            <button
              onClick={() => handleSelect('dirigeant-seulement')}
              className='w-[653px] h-[136px] bg-white/8 rounded-xl px-[35px] py-[15px] flex items-center justify-between hover:bg-white/12 transition-colors group'>
              <div className='flex items-center gap-5'>
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='text-white'>
                    <path
                      d='M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z'
                      fill='currentColor'
                    />
                    <path
                      d='M12 14C8.69 14 6 16.69 6 20H18C18 16.69 15.31 14 12 14Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className='flex flex-col gap-[3px] items-start text-left'>
                  <p className='text-white text-base font-semibold leading-6'>
                    Dirigeant seulement
                  </p>
                  <p className='text-white text-sm leading-5'>
                    Protection santé individuelle pour le dirigeant
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

            {/* Dirigeant et salarié */}
            <button
              onClick={() => handleSelect('dirigeant-salarie')}
              className='w-[653px] h-[136px] bg-white/8 rounded-xl px-[35px] py-[15px] flex items-center justify-between hover:bg-white/12 transition-colors group'>
              <div className='flex items-center gap-5'>
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    className='text-white'>
                    <path
                      d='M9 11C11.21 11 13 9.21 13 7C13 4.79 11.21 3 9 3C6.79 3 5 4.79 5 7C5 9.21 6.79 11 9 11Z'
                      fill='currentColor'
                    />
                    <path
                      d='M9 13C5.69 13 3 15.69 3 19H15C15 15.69 12.31 13 9 13Z'
                      fill='currentColor'
                    />
                    <path
                      d='M17 11C18.66 11 20 9.66 20 8C20 6.34 18.66 5 17 5C15.34 5 14 6.34 14 8C14 9.66 15.34 11 17 11Z'
                      fill='currentColor'
                    />
                    <path
                      d='M21 19C21 16.79 19.21 15 17 15C16.45 15 15.95 15.11 15.5 15.3C16.43 16.36 17 17.63 17 19H21Z'
                      fill='currentColor'
                    />
                  </svg>
                </div>
                <div className='flex flex-col gap-[3px] items-start text-left'>
                  <p className='text-white text-base font-semibold leading-6'>
                    Dirigeant et salarié
                  </p>
                  <p className='text-white text-sm leading-5'>
                    Couverture complète dirigeant + collaborateurs
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
