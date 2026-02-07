'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MapPinIcon } from '@/components/Icons'
import { sanitizeInput, validateRequired } from '@/utils/validation'

export default function AgePage() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  const [error, setError] = useState('')

  const handleInputChange = (value: string) => {
    const sanitized = sanitizeInput(value)
    setLocation(sanitized)
    if (error) setError('')
  }

  const handleContinue = () => {
    const result = validateRequired(location, 'Ville ou code postal')
    if (!result.isValid) {
      setError(result.error || '')
      return
    }
    // TODO: Update form context with sanitized location
    router.push('/salary-employees/existing-contract')
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-[71.34px] left-[611.59px] w-[342.414px] h-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='absolute top-[603.08px] left-[71.34px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Back button */}
      <button
        onClick={handleBack}
        className='fixed left-4 top-8 z-10 flex items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity sm:left-8 lg:left-[62px] lg:top-10'>
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
      <div className='flex flex-col items-center justify-start pt-20 px-4 sm:px-8'>
        <div className='w-full max-w-[930px] flex flex-col items-center gap-8'>
          {/* Header */}
          <div className='flex flex-col items-center gap-6 sm:gap-8'>
            {/* Tag */}
            <div className='bg-white/10 px-[31px] py-[9px] rounded-full'>
              <p className='text-white text-[12.484px] font-bold leading-[17.834px] text-center'>
                Vos Informations
              </p>
            </div>

            {/* Title */}
            <h1 className='text-3xl sm:text-4xl lg:text-[56px] font-extrabold text-center text-white leading-tight sm:leading-tight lg:leading-[80.254px] max-w-[888px]'>
              <span className='text-[#67d29d]'>Où</span> habitez-vous?
            </h1>

            {/* Description */}
            <p className='text-white/80 text-sm sm:text-base text-center leading-relaxed sm:leading-[28.981px]'>
              Votre lieu de résidence nous permet d'adapter les offres disponibles dans votre
              région.
            </p>
          </div>

          {/* Form Card */}
          <div className='w-full max-w-[600px] bg-white/8 rounded-[10px] shadow-lg px-6 sm:px-10 py-8 sm:py-10 flex flex-col gap-6 mt-8 sm:mt-[134px]'>
            {/* Icon */}
            <div className='w-[80px] h-[80px] rounded-full bg-gradient-to-b from-[#55c1ff] to-[#715aff] flex items-center justify-center mx-auto'>
              <MapPinIcon className='w-10 h-10 text-white' />
            </div>

            {/* Form field */}
            <div className='flex flex-col gap-[36px] mt-6'>
              <label className='text-white text-base font-semibold leading-6'>
                Ville ou code postal
              </label>
              <div className='relative'>
                <input
                  type='text'
                  value={location}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder='Ex: Paris, Lyon, 75001...'
                  className={`w-full h-14 bg-white/5 border-2 rounded-lg px-5 py-[14px] text-white placeholder-white/50 focus:outline-none focus:border-[#55c1ff] transition-colors ${error ? 'border-red-500' : 'border-[#52bcf8]/77'}`}
                />
                <div className='absolute right-5 top-[18px] w-5 h-5'>
                  <MapPinIcon className='w-5 h-5 text-white/50' />
                </div>
              </div>
              {error && <p className='mt-1 text-xs text-red-400'>{error}</p>}
            </div>

            {/* Info box */}
            <div className='bg-[#55c1ff]/20 rounded-lg p-4 flex gap-3 mt-2'>
              <div className='w-[22px] h-[22px] rounded-full bg-[#55c1ff] flex items-center justify-center flex-shrink-0 mt-0.5'>
                <svg width='14' height='14' viewBox='0 0 14 14' fill='none' className='text-white'>
                  <path
                    d='M7 4.5V7.5'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                  <circle cx='7' cy='10' r='0.5' fill='currentColor' />
                </svg>
              </div>
              <p className='text-white text-[13px] leading-5 opacity-70 max-w-[454px]'>
                Votre localisation permet à nos conseillers de vous proposer les meilleures options
                de couverture santé disponibles dans votre département.
              </p>
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!location}
            className='bg-[#67d29d] rounded-[10px] px-[31px] h-12 flex items-center justify-center hover:bg-[#5bc38d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-[60px]'>
            <span className='text-white text-base font-semibold'>Continuer</span>
          </button>
        </div>
      </div>
    </div>
  )
}
