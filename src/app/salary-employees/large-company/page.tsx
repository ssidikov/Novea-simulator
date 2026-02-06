'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import { ArrowLeftIcon } from '@/components/Icons'
import { useState } from 'react'
import { sanitizeInput } from '@/utils/validation'

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

export default function LargeCompanyPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()
  const [companyName, setCompanyName] = useState('')

  // Проверка: если введено 9 или 14 цифр (SIREN или SIRET)
  const isValidSirenOrSiret = /^\d{9}$|^\d{14}$/.test(companyName.trim())

  const handleInputChange = (value: string) => {
    // Sanitize input but only allow digits for SIREN/SIRET
    const sanitized = sanitizeInput(value).replace(/\D/g, '')
    setCompanyName(sanitized)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValidSirenOrSiret) {
      updateFormData({ companyName: sanitizeInput(companyName.trim()) })
      const nextRoute = getNextRoute('/salary-employees/large-company', {
        ...formData,
        companyName: companyName.trim(),
      })
      router.push(nextRoute)
    }
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[816.477px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.414px] w-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[374.06px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
      <div className='mx-auto flex min-h-screen w-full max-w-[930px] flex-col items-center justify-start px-4 py-20 sm:px-8 lg:px-[203px] lg:py-[80px]'>
        <div className='flex w-full flex-col items-center gap-8 lg:gap-[32px]'>
          {/* Header */}
          <div className='flex w-full flex-col items-center gap-5 sm:gap-[22px]'>
            <Tag txt='Vos Informations' />
            <h1 className="font-['Poppins',sans-serif] w-full max-w-[800px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
              <span>Quel est le </span>
              <span className='text-[#67d29d]'>nom</span>
              <span> de l'entreprise ?</span>
            </h1>
          </div>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] w-full max-w-[485px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
            Recherchez votre entreprise par son nom, numéro SIREN ou SIRET pour obtenir une
            simulation personnalisée.
          </p>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className='mt-12 flex w-full max-w-[700px] flex-col items-center gap-6 sm:mt-16 lg:mt-[94px]'>
            {/* Icon */}
            <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#67d39d] to-[#55c1ff] sm:h-20 sm:w-20'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                className='h-8 w-8 text-white sm:h-10 sm:w-10'>
                <path
                  d='M5 35H35M8.33333 35V11.6667L20 5L31.6667 11.6667V35M13.3333 18.3333H16.6667M13.3333 25H16.6667M23.3333 18.3333H26.6667M23.3333 25H26.6667'
                  stroke='currentColor'
                  strokeWidth='2.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            {/* Input Field */}
            <div className='relative w-full'>
              <div className='absolute left-4 top-1/2 -translate-y-1/2 sm:left-6'>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='text-white opacity-40 sm:h-6 sm:w-6'>
                  <circle cx='11' cy='11' r='7' stroke='currentColor' strokeWidth='2' />
                  <path
                    d='M20 20L17 17'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <input
                type='text'
                value={companyName}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder='Nom, SIREN ou SIRET'
                className="font-['Poppins',sans-serif] h-[60px] w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] placeholder:text-white focus:outline-none focus:ring-2 focus:ring-[#67d29d] sm:h-[70px] sm:pl-[60px] sm:pr-6 sm:text-lg"
              />
            </div>

            {/* Info Box */}
            <div className='flex w-full items-center gap-3 rounded-[10px] bg-white/5 px-5 py-4'>
              <div className='flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#67d39d]/30'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  className='text-[#67d29d]'>
                  <circle cx='8' cy='8' r='7' stroke='currentColor' strokeWidth='1.5' />
                  <path
                    d='M8 11V8M8 5H8.01'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <p className="font-['Poppins',sans-serif] text-sm leading-5 text-white opacity-80">
                Le SIREN comporte 9 chiffres, le SIRET en comporte 14.
              </p>
            </div>

            {/* Continue Button - показывается только если введено 9 или 14 цифр */}
            {isValidSirenOrSiret && (
              <button
                type='submit'
                className='group mt-4 flex h-[60px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-b from-[#67d39d] to-[#55c1ff] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0px_10px_30px_-5px_rgba(103,211,157,0.4)]'>
                <span className="font-['Poppins',sans-serif] text-lg font-semibold text-white">
                  Continuer
                </span>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  className='text-white transition-transform group-hover:translate-x-1'>
                  <path
                    d='M5 12H19M19 12L12 5M19 12L12 19'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
