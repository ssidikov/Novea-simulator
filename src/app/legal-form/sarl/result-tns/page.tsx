'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CalendarIcon } from '@/components/Icons'
import { useFormData } from '@/contexts/FormContext'
import { validateAge, sanitizeInput } from '@/utils/validation'

export default function SarlResultTnsPage() {
  const router = useRouter()
  const { updateFormData } = useFormData()
  const [userAge, setUserAge] = useState('')
  const [partnerAge, setPartnerAge] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleAgeChange = (field: string, value: string, setter: (v: string) => void) => {
    const sanitized = value.replace(/\D/g, '')
    setter(sanitized)
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validateAgeField = (field: string, value: string) => {
    if (!value) return true
    const result = validateAge(value)
    setErrors((prev) => ({ ...prev, [field]: result.isValid ? '' : result.error || '' }))
    return result.isValid
  }

  const handleContinue = () => {
    const isUserAgeValid = validateAge(userAge)
    if (!isUserAgeValid.isValid) {
      setErrors((prev) => ({ ...prev, userAge: isUserAgeValid.error || '' }))
      return
    }
    if (partnerAge && !validateAge(partnerAge).isValid) {
      setErrors((prev) => ({ ...prev, partnerAge: 'Âge invalide' }))
      return
    }
    // Save sanitized ages to form data
    updateFormData({
      userAge: sanitizeInput(userAge),
      partnerAge: sanitizeInput(partnerAge),
    })

    // Navigate to location page
    router.push('/legal-form/sarl/result-tns/location')
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-[71.34px] left-[611.59px] w-[342.414px] h-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='absolute top-[769.06px] left-[71.34px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
          {/* Tag */}
          <div className='bg-white/10 px-[31px] py-[9px] rounded-full'>
            <p className='text-white text-[12.484px] font-bold leading-[17.834px]'>
              Vos Informations
            </p>
          </div>

          {/* Title */}
          <h1 className='text-3xl sm:text-4xl lg:text-[56px] font-extrabold text-center text-white leading-tight sm:leading-tight lg:leading-[80.254px] max-w-[888px]'>
            Quel <span className='text-[#67d29d]'>âge</span> avez-vous ?
          </h1>

          {/* Description */}
          <p className='text-white/80 text-sm sm:text-base text-center max-w-[615px] leading-relaxed sm:leading-[28.981px]'>
            La cotisation est déterminée en fonction de l&apos;âge atteint au 31 décembre de
            l&apos;année précédente.
          </p>

          {/* Form card */}
          <div className='w-full max-w-[600px] bg-white/8 rounded-[10px] shadow-lg px-6 sm:px-10 py-8 sm:py-10 flex flex-col gap-6 mt-8 sm:mt-[76px]'>
            {/* Icon */}
            <div className='w-20 h-20 mx-auto rounded-full bg-gradient-to-b from-[#67d39d] to-[#55c1ff] flex items-center justify-center'>
              <CalendarIcon className='w-10 h-10 text-white' />
            </div>

            {/* Form fields */}
            <div className='flex flex-col gap-6 mt-6'>
              {/* User age */}
              <div className='flex flex-col gap-[36px]'>
                <label className='text-white text-base font-semibold leading-6'>Vous avez</label>
                <div className='relative'>
                  <input
                    type='number'
                    value={userAge}
                    onChange={(e) => handleAgeChange('userAge', e.target.value, setUserAge)}
                    onBlur={() => validateAgeField('userAge', userAge)}
                    placeholder='Votre âge'
                    className={`w-full h-14 bg-white/5 border-2 rounded-lg px-5 py-[14px] text-white text-base placeholder:text-white/50 focus:outline-none focus:border-[#67d39d] transition-colors ${errors.userAge ? 'border-red-500' : 'border-white/10'}`}
                  />
                  <span className='absolute right-5 top-1/2 -translate-y-1/2 text-white/60 text-base font-medium'>
                    ans
                  </span>
                </div>
                {errors.userAge && <p className='text-xs text-red-400 -mt-4'>{errors.userAge}</p>}
              </div>

              {/* Partner age (optional) */}
              <div className='flex flex-col gap-[37px]'>
                <label className='text-white text-base font-semibold leading-6'>
                  Votre partenaire a{' '}
                  <span className='text-white/60 text-sm font-normal'>(Optionnel)</span>
                </label>
                <div className='relative'>
                  <input
                    type='number'
                    value={partnerAge}
                    onChange={(e) => handleAgeChange('partnerAge', e.target.value, setPartnerAge)}
                    onBlur={() => validateAgeField('partnerAge', partnerAge)}
                    placeholder='Âge de votre partenaire'
                    className={`w-full h-14 bg-white/5 border-2 rounded-lg px-5 py-[14px] text-white text-base placeholder:text-white/50 focus:outline-none focus:border-[#67d39d] transition-colors ${errors.partnerAge ? 'border-red-500' : 'border-white/10'}`}
                  />
                  <span className='absolute right-5 top-1/2 -translate-y-1/2 text-white/60 text-base font-medium'>
                    ans
                  </span>
                </div>
                {errors.partnerAge && (
                  <p className='text-xs text-red-400 -mt-4'>{errors.partnerAge}</p>
                )}
              </div>
            </div>

            {/* Info box */}
            <div className='bg-[#67d39d]/20 rounded-lg px-4 py-4 flex items-start gap-3 mt-6'>
              <div className='w-[22px] h-[22px] rounded-full bg-[#67d39d] flex items-center justify-center flex-shrink-0 mt-0.5'>
                <svg width='14' height='14' viewBox='0 0 14 14' fill='none'>
                  <path
                    d='M7 1V7M7 7V13M7 7H13M7 7H1'
                    stroke='white'
                    strokeWidth='2'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
              <p className='text-white/70 text-[13px] leading-5 flex-1'>
                L&apos;âge pris en compte est celui que vous aurez au 31 décembre de l&apos;année
                précédente. Cette information nous permet de calculer votre cotisation avec
                précision.
              </p>
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!userAge}
            className='mt-[80px] px-8 h-12 bg-[#67d29d] rounded-[10px] text-white text-base font-semibold hover:bg-[#5bc38d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
            Continuer
          </button>
        </div>
      </div>
    </div>
  )
}
