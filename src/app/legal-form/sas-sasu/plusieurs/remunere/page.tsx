'use client'

import { useRouter } from 'next/navigation'

// Icon components
function CheckCircleIcon() {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <circle cx='8' cy='8' r='8' fill='currentColor' />
      <path
        d='M11 6L7 10L5 8'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M6 42H44'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8 42V12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H24C25.0609 8 26.0783 8.42143 26.8284 9.17157C27.5786 9.92172 28 10.9391 28 12V42'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28 20H38C39.0609 20 40.0783 20.4214 40.8284 21.1716C41.5786 21.9217 42 22.9391 42 24V42'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 16H18'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18 24H22'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 32H18'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M34 28H38'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4 10H16M16 10L10 4M16 10L10 16'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M15 5L5 15M5 5L15 15'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function BackIcon() {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12.5 5L7.5 10L12.5 15'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default function EntrepriseConfirmationPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const handleContinue = () => {
    router.push('/salary-employees/count')
  }

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[962.953px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[520.54px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
      <div className='mx-auto flex min-h-screen w-full max-w-[930px] flex-col items-center px-4 py-20 sm:px-8 lg:px-[115px] lg:py-20'>
        <div className='flex w-full flex-col items-center gap-8'>
          {/* Success badge */}
          <div className='flex items-center justify-center gap-2.5 rounded-full bg-white/10 px-4 py-2'>
            <div className='text-[#67d39d]'>
              <CheckCircleIcon />
            </div>
            <p className="font-['Poppins',sans-serif] text-xs font-bold text-[#67d39d]">
              Simulation terminée
            </p>
          </div>

          {/* Icon */}
          <div className='flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-b from-[#55c1ff] to-[#715aff]'>
            <BuildingIcon />
          </div>

          {/* Title */}
          <h1 className="font-['Poppins',sans-serif] max-w-[606px] text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
            On vous propose un{' '}
            <span className='text-[#54c1ff]'>contrat d&apos;entreprise</span>
          </h1>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] max-w-[681px] text-center text-base font-normal leading-[28.981px] text-white/90 sm:text-lg">
            Un contrat collectif d&apos;entreprise est recommandé pour votre situation. Ce type de
            contrat permet de couvrir les dirigeants rémunérés et les salariés au sein d&apos;un
            même contrat.
          </p>

          {/* Confirmation card */}
          <div className='mt-12 w-full max-w-[700px] rounded-[10px] bg-white/8 px-6 py-10 shadow-lg sm:px-10 lg:mt-[112px]'>
            <div className='flex flex-col items-center gap-8'>
              <div className='flex flex-col items-center gap-3'>
                <h3 className="font-['Poppins',sans-serif] text-center text-xl font-semibold text-white sm:text-2xl">
                  Voulez-vous continuer la simulation ?
                </h3>
                <p className="font-['DM_Sans',sans-serif] text-center text-sm text-white/70 sm:text-base">
                  Nous vous accompagnerons pour finaliser votre projet de couverture santé.
                </p>
              </div>

              {/* Action buttons */}
              <div className='flex w-full flex-col gap-4 sm:flex-row'>
                <button
                  onClick={handleContinue}
                  className="font-['Poppins',sans-serif] flex h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[10px] bg-[#55c1ff] text-base font-semibold text-white transition-all hover:bg-[#4ab3f0]">
                  Oui, continuer
                  <ArrowRightIcon />
                </button>
                <button
                  onClick={handleGoBack}
                  className="font-['Poppins',sans-serif] flex h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[10px] border-2 border-[#55c1ff] bg-white text-base font-semibold text-[#55c1ff] transition-all hover:bg-gray-50">
                  <CloseIcon />
                  Non, revenir
                </button>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <p className="font-['DM_Sans',sans-serif] mt-8 max-w-[574px] text-center text-sm leading-6 text-white/70">
            Si vous continuez, nous vous demanderons quelques informations supplémentaires pour
            personnaliser votre proposition.
          </p>
        </div>
      </div>
    </div>
  )
}
