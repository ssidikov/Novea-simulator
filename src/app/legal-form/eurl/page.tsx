'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckIcon, CloseIcon, ArrowRightIcon } from '@/components/Icons'
import { useFormData } from '@/contexts/FormContext'

export default function EurlPage() {
  const router = useRouter()
  const { updateFormData } = useFormData()
  const [selectedOption, setSelectedOption] = useState<'oui' | 'non' | null>(null)

  const handleSelect = (option: 'oui' | 'non') => {
    setSelectedOption(option)
    updateFormData({ gerantSalarie: option })

    // Navigate based on selection
    setTimeout(() => {
      if (option === 'oui') {
        router.push('/legal-form/eurl-gerant-salarie')
      } else {
        router.push('/legal-form/gerant-non-salarie')
      }
    }, 300)
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-[71.34px] left-[611.59px] w-[342.414px] h-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='absolute top-[396.06px] left-[71.34px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
      <div className='flex flex-col items-center justify-start pt-20 px-4'>
        <div className='w-full max-w-[930px] flex flex-col items-center gap-8 px-[115px]'>
          {/* Tag */}
          <div className='bg-white/10 px-[31px] py-[9px] rounded-full'>
            <p className='text-white text-[12.484px] font-bold leading-[17.834px]'>Configuration</p>
          </div>

          {/* Title */}
          <h1 className='text-[56px] font-extrabold text-center text-white leading-[70px] max-w-[606px]'>
            Est-ce que le <span className='text-[#67d29d]'>gérant</span> est salarié ?
          </h1>

          {/* Description */}
          <p className='text-white/80 text-base text-center max-w-[642px] leading-[28.981px]'>
            Cette information nous permet de déterminer le type de contrat le plus adapté à votre
            situation.
          </p>

          {/* Options */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[35px] p-3 mt-[141px]'>
            {/* Oui c'est le cas */}
            <button
              onClick={() => handleSelect('oui')}
              className={`
                relative w-full md:w-[420px] h-[136px]
                bg-white/8 rounded-xl
                pl-[35px] pr-[21px] py-[15px]
                flex items-center gap-[20px]
                transition-all duration-300
                hover:bg-white/12
                ${selectedOption === 'oui' ? 'ring-2 ring-[#67d39d]' : ''}
              `}>
              <div className='flex items-center gap-[20px] flex-1'>
                {/* Icon */}
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                  <CheckIcon className='w-6 h-6 text-white opacity-60' />
                </div>

                {/* Text content */}
                <div className='flex flex-col gap-[3px] items-start text-left flex-1 min-w-0'>
                  <p className='text-white text-base font-semibold leading-6'>
                    Oui c&apos;est le cas
                  </p>
                  <p className='text-white text-sm font-normal leading-5'>
                    Le gérant est également salarié de l&apos;EURL
                  </p>
                </div>
              </div>

              {/* Arrow icon */}
              <div className='absolute right-[21px] top-[92px]'>
                <ArrowRightIcon className='w-6 h-6 text-white/30' />
              </div>
            </button>

            {/* Non ce n'est pas le cas */}
            <button
              onClick={() => handleSelect('non')}
              className={`
                relative w-full md:w-[420px] h-[136px]
                bg-white/8 rounded-xl
                pl-[35px] pr-[21px] py-[15px]
                flex items-center gap-[20px]
                transition-all duration-300
                hover:bg-white/12
                ${selectedOption === 'non' ? 'ring-2 ring-[#67d39d]' : ''}
              `}>
              <div className='flex items-center gap-[20px] flex-1'>
                {/* Icon */}
                <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                  <CloseIcon className='w-6 h-6 text-white opacity-60' />
                </div>

                {/* Text content */}
                <div className='flex flex-col gap-[3px] items-start text-left flex-1 min-w-0'>
                  <p className='text-white text-base font-semibold leading-6'>
                    Non ce n&apos;est pas le cas
                  </p>
                  <p className='text-white text-sm font-normal leading-5'>
                    Le gérant n&apos;est pas salarié de l&apos;EURL
                  </p>
                </div>
              </div>

              {/* Arrow icon */}
              <div className='absolute right-[21px] top-[92px]'>
                <ArrowRightIcon className='w-6 h-6 text-white/30' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
