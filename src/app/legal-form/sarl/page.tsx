'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DocumentIcon, BuildingIcon, ArrowRightIcon } from '@/components/Icons'
import { useFormData } from '@/contexts/FormContext'

export default function SarlPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()
  const [selectedOption, setSelectedOption] = useState<'tns' | 'entreprise' | null>(null)

  const handleSelect = (option: 'tns' | 'entreprise') => {
    setSelectedOption(option)
    updateFormData({ sarlContractType: option })

    // Navigate based on selection
    setTimeout(() => {
      if (option === 'tns') {
        router.push('/legal-form/sarl/result-tns')
      } else {
        router.push('/legal-form/sarl/result-entreprise')
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
                Configuration
              </p>
            </div>

            {/* Title */}
            <h1 className='text-[56px] font-extrabold text-center text-white leading-[70px] max-w-[606px]'>
              Quel est le <span className='text-[#67d29d]'>statut</span> de votre entreprise ?
            </h1>
          </div>

          {/* Description */}
          <p className='text-white/80 text-base text-center max-w-[489px] leading-[28.981px]'>
            Cela nous permettra de savoir si le ou les dirigeants peuvent adhérer au même contrat
            collectif que leurs salariés.
          </p>

          {/* Options */}
          <div className='w-full flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[35px] p-3'>
              {/* TNS Contract Option */}
              <button
                onClick={() => handleSelect('tns')}
                className={`
                  relative w-full md:w-[420px] h-[136px]
                  bg-white/8 rounded-xl
                  pl-[35px] pr-[21px] py-[15px]
                  flex items-center gap-[20px]
                  transition-all duration-300
                  hover:bg-white/12
                  ${selectedOption === 'tns' ? 'ring-2 ring-[#67d39d]' : ''}
                `}>
                <div className='flex items-center gap-[20px] flex-1'>
                  {/* Icon */}
                  <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                    <DocumentIcon className='w-6 h-6 text-white' />
                  </div>

                  {/* Text content */}
                  <div className='flex flex-col gap-[3px] items-start text-left flex-1 min-w-0'>
                    <p className='text-white text-base font-semibold leading-6'>
                      Prendre un contrat TNS
                    </p>
                    <p className='text-white text-sm font-normal leading-5'>
                      Contrat TNS adapté pour les gérants majoritaires de SARL qui ne peuvent pas
                      bénéficier du régime général
                    </p>
                  </div>
                </div>

                {/* Arrow icon */}
                <div className='absolute right-[21px] top-[92px]'>
                  <ArrowRightIcon className='w-6 h-6 text-white/30' />
                </div>
              </button>

              {/* Entreprise Contract Option */}
              <button
                onClick={() => handleSelect('entreprise')}
                className={`
                  relative w-full md:w-[420px] h-[136px]
                  bg-white/8 rounded-xl
                  pl-[35px] pr-[21px] py-[15px]
                  flex items-center gap-[20px]
                  transition-all duration-300
                  hover:bg-white/12
                  ${selectedOption === 'entreprise' ? 'ring-2 ring-[#55c1ff]' : ''}
                `}>
                <div className='flex items-center gap-[20px] flex-1'>
                  {/* Icon */}
                  <div className='w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0'>
                    <BuildingIcon className='w-6 h-6 text-white' />
                  </div>

                  {/* Text content */}
                  <div className='flex flex-col gap-[3px] items-start text-left flex-1 min-w-0'>
                    <p className='text-white text-base font-semibold leading-6'>
                      Prendre un contrat entreprise
                    </p>
                    <p className='text-white text-sm font-normal leading-5'>
                      Contrat collectif permettant aux gérants minoritaires ou égalitaires d'adhérer
                      avec leurs salariés au même contrat
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
    </div>
  )
}
