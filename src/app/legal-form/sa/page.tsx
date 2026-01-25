'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { UserIcon } from '@/components/Icons'
import { useFormData } from '@/contexts/FormContext'

export default function SaPage() {
  const router = useRouter()
  const { updateFormData } = useFormData()
  const [selectedOption, setSelectedOption] = useState<'seul' | 'plusieurs' | null>(null)

  const handleSelect = (option: 'seul' | 'plusieurs') => {
    setSelectedOption(option)
    updateFormData({ saSeulOuPlusieur: option })

    // Navigate based on selection
    setTimeout(() => {
      if (option === 'seul') {
        router.push('/legal-form/sa/seul')
      } else {
        router.push('/legal-form/sa/plusieurs')
      }
    }, 300)
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
          <div className='flex flex-col items-center gap-[22px] w-full'>
            {/* Tag */}
            <div className='bg-white/10 px-[31px] py-[9px] rounded-full'>
              <p className='text-white text-[12.484px] font-bold leading-[17.834px]'>
                Votre profil
              </p>
            </div>

            {/* Title */}
            <h1 className='text-[56px] font-extrabold text-center text-white leading-[70px] max-w-[888px]'>
              Combien d'<span className='text-[#67d29d]'>associés</span> ?
            </h1>
          </div>

          {/* Description */}
          <p className='text-white/80 text-base text-center max-w-[615px] leading-[28.981px]'>
            Cette information nous permettra de déterminer le type de contrat le plus adapté à votre
            situation.
          </p>

          {/* Options */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-[35px] p-3'>
            {/* Un seul option */}
            <button
              onClick={() => handleSelect('seul')}
              className={`
                w-full md:w-[420px] h-[136px]
                bg-white/8 rounded-xl
                px-[35px] py-[15px]
                flex items-center gap-[20px]
                transition-all duration-300
                hover:bg-white/12
                ${selectedOption === 'seul' ? 'ring-2 ring-[#67d39d]' : ''}
              `}>
              <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                <UserIcon className='w-6 h-6 text-white' />
              </div>
              <span className='text-white text-base font-semibold leading-6 text-left'>
                Un seul
              </span>
            </button>

            {/* Plusieurs option */}
            <button
              onClick={() => handleSelect('plusieurs')}
              className={`
                w-full md:w-[420px] h-[136px]
                bg-white/8 rounded-xl
                px-[35px] py-[15px]
                flex items-center gap-[20px]
                transition-all duration-300
                hover:bg-white/12
                ${selectedOption === 'plusieurs' ? 'ring-2 ring-[#67d39d]' : ''}
              `}>
              <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                <UserIcon className='w-6 h-6 text-white' />
              </div>
              <span className='text-white text-base font-semibold leading-6 text-left'>
                Plusieurs
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
