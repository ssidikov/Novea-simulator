'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import { submitSimulation } from '@/lib/submitSimulation'
import { CalendarIcon, UserIcon } from '@/components/Icons'

function PhoneIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.3 13.9L15.4 13.4C14.9 13.3 14.4 13.5 14.1 13.8L12.2 15.9C9.4 14.5 7 12.1 5.6 9.3L7.7 7.4C8 7.1 8.2 6.6 8.1 6.1L7.6 3.2C7.5 2.4 6.8 1.8 6 1.8H3.8C3 1.8 2.3 2.4 2.4 3.2C2.9 11.1 9.4 17.6 17.3 18.1C18.1 18.2 18.7 17.5 18.7 16.7V14.5C18.8 13.7 18.1 13 17.3 12.9Z'
        fill='white'
        opacity='0.4'
      />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='3'
        y='3'
        width='14'
        height='14'
        rx='1'
        stroke='white'
        strokeWidth='1.5'
        opacity='0.4'
      />
      <path d='M10 3V17' stroke='white' strokeWidth='1.5' opacity='0.4' />
      <path d='M3 10H17' stroke='white' strokeWidth='1.5' opacity='0.4' />
      <circle cx='7' cy='7' r='0.5' fill='white' opacity='0.4' />
      <circle cx='13' cy='7' r='0.5' fill='white' opacity='0.4' />
      <circle cx='7' cy='13' r='0.5' fill='white' opacity='0.4' />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='7' cy='6' r='3' stroke='white' strokeWidth='1.5' opacity='0.4' />
      <path
        d='M2 17C2 13.7 4.2 11 7 11C9.8 11 12 13.7 12 17'
        stroke='white'
        strokeWidth='1.5'
        opacity='0.4'
      />
      <circle cx='14' cy='6' r='2' stroke='white' strokeWidth='1.5' opacity='0.4' />
      <path d='M15 11C16.7 11.5 18 13.1 18 15' stroke='white' strokeWidth='1.5' opacity='0.4' />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='2'
        y='5'
        width='16'
        height='10'
        rx='2'
        stroke='white'
        strokeWidth='1.5'
        opacity='0.4'
      />
      <path d='M2 7L10 12L18 7' stroke='white' strokeWidth='1.5' opacity='0.4' />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect
        x='2'
        y='7'
        width='16'
        height='9'
        rx='2'
        stroke='white'
        strokeWidth='1.5'
        opacity='0.4'
      />
      <path
        d='M6 7V5C6 3.9 6.9 3 8 3H12C13.1 3 14 3.9 14 5V7'
        stroke='white'
        strokeWidth='1.5'
        opacity='0.4'
      />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 5L7.5 10L12.5 15'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

import {
  validatePhone,
  validateEmail,
  validateName,
  validateCompanyName,
  validatePositiveInteger,
  validateRequired,
  sanitizeInput,
} from '@/utils/validation'

export default function VeryLargePage() {
  const router = useRouter()
  const { updateFormData, formData, sessionId } = useFormData()
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [companyName, setCompanyName] = useState('')
  const [employeeCount, setEmployeeCount] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [sector, setSector] = useState('')

  // Validation error states
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateField = (field: string, value: string) => {
    let result
    switch (field) {
      case 'phone':
        result = validatePhone(value)
        break
      case 'email':
        result = validateEmail(value)
        break
      case 'fullName':
        result = validateName(value)
        break
      case 'companyName':
        result = validateCompanyName(value)
        break
      case 'employeeCount':
        result = validatePositiveInteger(value)
        break
      case 'sector':
        result = validateRequired(value, 'Secteur')
        break
      default:
        result = { isValid: true }
    }
    setErrors((prev) => ({
      ...prev,
      [field]: result.isValid ? '' : result.error || '',
    }))
    return result.isValid
  }

  const handleInputChange = (field: string, value: string, setter: (v: string) => void) => {
    // Don't trim during typing — allows spaces between words
    setter(value)
    // Clear error on change
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleNumericChange = (field: string, value: string, setter: (v: string) => void) => {
    // Allow only digits
    const digits = value.replace(/[^0-9]/g, '')
    setter(digits)
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handleBlur = (field: string, value: string) => {
    if (value) {
      validateField(field, value)
    }
  }

  const handleBack = () => {
    router.back()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate all fields
    const isPhoneValid = validateField('phone', phone)
    const isEmailValid = validateField('email', email)
    const isNameValid = validateField('fullName', fullName)
    const isCompanyValid = validateField('companyName', companyName)
    const isCountValid = validateField('employeeCount', employeeCount)
    const isSectorValid = validateField('sector', sector)

    if (
      !isPhoneValid ||
      !isEmailValid ||
      !isNameValid ||
      !isCompanyValid ||
      !isCountValid ||
      !isSectorValid
    ) {
      return // Stop submission if validation fails
    }

    // Store sanitized appointment data
    const updatedData = {
      appointmentPhone: sanitizeInput(phone),
      appointmentCompanyName: sanitizeInput(companyName),
      appointmentEmployeeCount: sanitizeInput(employeeCount),
      appointmentFullName: sanitizeInput(fullName),
      appointmentEmail: sanitizeInput(email),
      appointmentSector: sanitizeInput(sector),
    }
    updateFormData(updatedData)

    // Submit simulation data to backend
    setIsSubmitting(true)
    const mergedData = { ...formData, ...updatedData }
    const result = await submitSimulation(sessionId, mergedData)
    setIsSubmitting(false)

    if (!result.success) {
      console.error('[simulation] Submission error:', result.error)
    }

    // Navigate to next step regardless of submission outcome
    const nextRoute = getNextRoute('/salary-employees/very-large', mergedData)
    router.push(nextRoute)
  }

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.414px] w-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[423.55px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
      <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[80px]'>
        <form
          onSubmit={handleSubmit}
          className='flex w-full flex-col items-center gap-8 lg:gap-[32px]'>
          {/* Tag */}
          <div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
            <p className="font-['Poppins',sans-serif] text-xs font-bold leading-[17.834px] text-white">
              Rendez-vous
            </p>
          </div>

          {/* Icon */}
          <div className='flex h-[80px] w-[80px] items-center justify-center rounded-full bg-gradient-to-b from-[#715aff] to-[#67d39d]'>
            <CalendarIcon className='w-10 h-10 text-white' />
          </div>

          {/* Title */}
          <h1 className="font-['Poppins',sans-serif] w-full max-w-[888px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
            Prenez <span className='text-[#67d39d]'>rendez-vous</span> avec un conseiller Alan
          </h1>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] w-full max-w-[576px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
            Laissez-nous vos coordonnées et nous vous recontacterons rapidement pour prendre
            rendez-vous.
          </p>

          {/* Form fields - 2 column grid */}
          <div className='mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:gap-[35px]'>
            {/* Phone */}
            <div className='relative w-full'>
              <div className='relative h-[60px]'>
                <div className='absolute left-[20px] top-[20px] flex h-[20px] w-[20px] flex-col items-start'>
                  <PhoneIcon />
                </div>
                <input
                  type='tel'
                  value={phone}
                  onChange={(e) => handleInputChange('phone', e.target.value, setPhone)}
                  onBlur={() => handleBlur('phone', phone)}
                  placeholder='Téléphone (ex: 01 23 45 67 89)'
                  required
                  className={`font-['Poppins',sans-serif] h-full w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white placeholder:text-white/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] outline-none transition-all focus:bg-white/12 ${errors.phone ? 'border border-red-500' : ''}`}
                />
              </div>
              {errors.phone && <p className='mt-1 text-xs text-red-400'>{errors.phone}</p>}
            </div>

            {/* Company name */}
            <div className='relative w-full'>
              <div className='relative h-[60px]'>
                <div className='absolute left-[20px] top-[20px] flex h-[20px] w-[20px] flex-col items-start'>
                  <BuildingIcon />
                </div>
                <input
                  type='text'
                  value={companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value, setCompanyName)}
                  onBlur={() => handleBlur('companyName', companyName)}
                  placeholder='Nom entreprise'
                  required
                  className={`font-['Poppins',sans-serif] h-full w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white placeholder:text-white/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] outline-none transition-all focus:bg-white/12 ${errors.companyName ? 'border border-red-500' : ''}`}
                />
              </div>
              {errors.companyName && (
                <p className='mt-1 text-xs text-red-400'>{errors.companyName}</p>
              )}
            </div>

            {/* Employee count */}
            <div className='relative w-full'>
              <div className='relative h-[60px]'>
                <div className='absolute left-[20px] top-[20px] flex h-[20px] w-[20px] flex-col items-start'>
                  <UsersIcon />
                </div>
                <input
                  type='text'
                  value={employeeCount}
                  inputMode='numeric'
                  onChange={(e) =>
                    handleNumericChange('employeeCount', e.target.value, setEmployeeCount)
                  }
                  onBlur={() => handleBlur('employeeCount', employeeCount)}
                  placeholder='Nombre de collaborateurs'
                  required
                  className={`font-['Poppins',sans-serif] h-full w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white placeholder:text-white/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] outline-none transition-all focus:bg-white/12 ${errors.employeeCount ? 'border border-red-500' : ''}`}
                />
              </div>
              {errors.employeeCount && (
                <p className='mt-1 text-xs text-red-400'>{errors.employeeCount}</p>
              )}
            </div>

            {/* Full name */}
            <div className='relative w-full'>
              <div className='relative h-[60px]'>
                <div className='absolute left-[20px] top-[20px] flex h-[20px] w-[20px] flex-col items-start'>
                  <UserIcon className='w-5 h-5 text-white/40' />
                </div>
                <input
                  type='text'
                  value={fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value, setFullName)}
                  onBlur={() => handleBlur('fullName', fullName)}
                  placeholder='Prénom Nom'
                  required
                  className={`font-['Poppins',sans-serif] h-full w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white placeholder:text-white/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] outline-none transition-all focus:bg-white/12 ${errors.fullName ? 'border border-red-500' : ''}`}
                />
              </div>
              {errors.fullName && <p className='mt-1 text-xs text-red-400'>{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div className='relative w-full'>
              <div className='relative h-[60px]'>
                <div className='absolute left-[20px] top-[20px] flex h-[20px] w-[20px] flex-col items-start'>
                  <MailIcon />
                </div>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => handleInputChange('email', e.target.value, setEmail)}
                  onBlur={() => handleBlur('email', email)}
                  placeholder='Mail pro'
                  required
                  className={`font-['Poppins',sans-serif] h-full w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white placeholder:text-white/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] outline-none transition-all focus:bg-white/12 ${errors.email ? 'border border-red-500' : ''}`}
                />
              </div>
              {errors.email && <p className='mt-1 text-xs text-red-400'>{errors.email}</p>}
            </div>

            {/* Sector */}
            <div className='relative w-full'>
              <div className='relative h-[60px]'>
                <div className='absolute left-[20px] top-[20px] flex h-[20px] w-[20px] flex-col items-start'>
                  <BriefcaseIcon />
                </div>
                <input
                  type='text'
                  value={sector}
                  onChange={(e) => handleInputChange('sector', e.target.value, setSector)}
                  onBlur={() => handleBlur('sector', sector)}
                  placeholder="Secteur d'activité"
                  required
                  className={`font-['Poppins',sans-serif] h-full w-full rounded-[10px] bg-white/8 pl-[52px] pr-4 text-base text-white placeholder:text-white/50 shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)] outline-none transition-all focus:bg-white/12 ${errors.sector ? 'border border-red-500' : ''}`}
                />
              </div>
              {errors.sector && <p className='mt-1 text-xs text-red-400'>{errors.sector}</p>}
            </div>
          </div>

          {/* Submit button - hidden for now, will add later if needed */}
          <button
            type='submit'
            disabled={isSubmitting}
            className={`mt-8 flex h-[60px] w-full max-w-[340px] items-center justify-center gap-2 rounded-full font-semibold text-white shadow-lg transition-all ${isSubmitting ? 'bg-gray-500 cursor-not-allowed opacity-60' : 'bg-gradient-to-r from-[#715aff] to-[#67d39d] hover:scale-[1.02] hover:shadow-xl'}`}>
            Prendre rendez-vous
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M7.5 15L12.5 10L7.5 5'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  )
}
