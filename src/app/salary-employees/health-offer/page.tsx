'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'

// Icon components
function HeartIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M20.84 4.61C20.3292 4.09891 19.7228 3.69427 19.0554 3.4203C18.3879 3.14633 17.6725 3.00781 16.95 3.00781C16.2275 3.00781 15.5121 3.14633 14.8446 3.4203C14.1772 3.69427 13.5708 4.09891 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 3.00781 7.05 3.00781C5.59096 3.00781 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.55781 7.04097 1.55781 8.5C1.55781 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.3511 11.8792 21.7557 11.2728 22.0297 10.6054C22.3037 9.93789 22.4422 9.22248 22.4422 8.5C22.4422 7.77752 22.3037 7.0621 22.0297 6.39464C21.7557 5.72718 21.3511 5.12075 20.84 4.61Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function PillIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.5 16.5L16.5 4.5M10.5 10.5L13.5 13.5M4.5 16.5C3 18 3 20 4.5 21.5C6 23 8 23 9.5 21.5L16.5 14.5C18 13 18 11 16.5 9.5C15 8 13 8 11.5 9.5L4.5 16.5Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
      <circle cx='12' cy='12' r='3' stroke='white' strokeWidth='2' opacity='0.6' />
    </svg>
  )
}

function ToothIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 2C8.5 2 6 4.5 6 8V14C6 16 5 18 4 20C3.5 21 4 22 5 22C6 22 7 21 7.5 19.5L9 15L10 19C10.5 21 11 22 12 22C13 22 13.5 21 14 19L15 15L16.5 19.5C17 21 18 22 19 22C20 22 20.5 21 20 20C19 18 18 16 18 14V8C18 4.5 15.5 2 12 2Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function HospitalIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 6V12M12 12V18M12 12H18M12 12H6'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
      <rect
        x='3'
        y='3'
        width='18'
        height='18'
        rx='2'
        stroke='white'
        strokeWidth='2'
        opacity='0.6'
      />
    </svg>
  )
}

function UsersIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='9' cy='7' r='4' stroke='white' strokeWidth='2' opacity='0.6' />
      <path
        d='M2 21V19C2 16.2386 4.23858 14 7 14H11C13.7614 14 16 16.2386 16 19V21'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
      <path
        d='M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
      <path d='M19 14C20.5 14.5 22 16 22 18V21' stroke='white' strokeWidth='2' strokeLinecap='round' opacity='0.6' />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function CrownIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2 18L7 12L12 18L17 12L22 18M2 18V20H22V18M2 18L4 8L7 12M22 18L20 8L17 12M12 4L10 8L12 10L14 8L12 4Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M9 6L15 12L9 18'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.3'
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

interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  value: string
  onClick: () => void
  fullWidth?: boolean
}

function OptionCard({ icon, title, description, value, onClick, fullWidth = false }: OptionCardProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`group relative flex h-[136px] items-center gap-[156px] rounded-xl bg-white/8 pl-[35px] pr-[21px] py-[15px] transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_rgba(0,0,0,0.3)] ${fullWidth ? 'w-full max-w-[875px]' : 'w-full sm:w-[420px]'}`}>
      {/* Content */}
      <div className='flex items-center gap-5'>
        {/* Icon */}
        <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff]'>
          {icon}
        </div>

        {/* Text */}
        <div className='flex flex-col items-start gap-[3px] text-left text-white'>
          <p className="font-['Poppins',sans-serif] w-[300px] text-base font-semibold leading-6 transition-colors group-hover:text-[#0a253a]">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] w-[310px] text-sm leading-5 transition-colors group-hover:text-black">
            {description}
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className={`absolute top-[92px] ${fullWidth ? 'right-[44px]' : 'right-[21px]'}`}>
        <ArrowRightIcon />
      </div>
    </button>
  )
}

export default function HealthOfferPage() {
  const router = useRouter()
  const { updateFormData, formData } = useFormData()

  const handleBack = () => {
    router.back()
  }

  const handleSelect = (value: string) => {
    updateFormData({ healthOffer: value })
    const nextRoute = getNextRoute('/salary-employees/health-offer', {
      ...formData,
      healthOffer: value,
    })
    router.push(nextRoute)
  }

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1483px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.414px] w-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[880.56px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
      <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center px-4 py-20 sm:px-8 lg:px-[62px] lg:py-[80px]'>
        <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[24px]'>
          {/* Header */}
          <div className='flex w-full flex-col items-center gap-5 px-[45px] sm:gap-[22px]'>
            {/* Tag */}
            <div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
              <p className="font-['Poppins',sans-serif] text-xs font-bold leading-[17.834px] text-white">
                Votre Offre
              </p>
            </div>

            {/* Title */}
            <h1 className="font-['Poppins',sans-serif] w-full max-w-[704px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
              Choisissez une <span className='text-[#67d39d]'>offre de santé adaptée</span>
            </h1>

            {/* Description */}
            <p className="font-['DM_Sans',sans-serif] w-full max-w-[499px] text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
              Sélectionnez l'offre qui correspond le mieux à vos besoins de santé.
            </p>
          </div>

          {/* Options Grid */}
          <div className='mt-8 flex w-full flex-col items-center gap-4 sm:gap-6 lg:mt-16 lg:gap-[35px]'>
            {/* 2x4 Grid for first 8 options */}
            <div className='grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-[35px]'>
              {/* Row 1 */}
              <OptionCard
                icon={<HeartIcon />}
                title='Essentiel'
                description='Protection de base pour vos besoins essentiels'
                value='essentiel'
                onClick={() => handleSelect('essentiel')}
              />
              <OptionCard
                icon={<ShieldIcon />}
                title='Confort'
                description='Couverture équilibrée et complète'
                value='confort'
                onClick={() => handleSelect('confort')}
              />

              {/* Row 2 */}
              <OptionCard
                icon={<PillIcon />}
                title='Pharmacie +'
                description='Médicaments et traitements bien remboursés'
                value='pharmacie-plus'
                onClick={() => handleSelect('pharmacie-plus')}
              />
              <OptionCard
                icon={<EyeIcon />}
                title='Optique renforcée'
                description='Remboursements optimisés pour vos lunettes'
                value='optique-renforcee'
                onClick={() => handleSelect('optique-renforcee')}
              />

              {/* Row 3 */}
              <OptionCard
                icon={<ToothIcon />}
                title='Dentaire +'
                description='Soins dentaires et prothèses remboursés'
                value='dentaire-plus'
                onClick={() => handleSelect('dentaire-plus')}
              />
              <OptionCard
                icon={<HospitalIcon />}
                title='Hospitalisation'
                description="Garanties étendues en cas d'hospitalisation"
                value='hospitalisation'
                onClick={() => handleSelect('hospitalisation')}
              />

              {/* Row 4 */}
              <OptionCard
                icon={<UsersIcon />}
                title='Famille'
                description='Offre adaptée pour toute la famille'
                value='famille'
                onClick={() => handleSelect('famille')}
              />
              <OptionCard
                icon={<StarIcon />}
                title='Senior'
                description='Protection renforcée pour les seniors'
                value='senior'
                onClick={() => handleSelect('senior')}
              />
            </div>

            {/* Full width Premium option */}
            <OptionCard
              icon={<CrownIcon />}
              title='Premium'
              description='Protection maximale et services haut de gamme'
              value='premium'
              onClick={() => handleSelect('premium')}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  )
}
