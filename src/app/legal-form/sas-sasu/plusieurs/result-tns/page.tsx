'use client'

import { useRouter } from 'next/navigation'

// Icon components
function CheckCircleIcon() {
  return (
    <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
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

function DocumentIcon() {
  return (
    <svg width='50' height='50' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M29 4H12C10.9391 4 9.92172 4.42143 9.17157 5.17157C8.42143 5.92172 8 6.93913 8 8V42C8 43.0609 8.42143 44.0783 9.17157 44.8284C9.92172 45.5786 10.9391 46 12 46H38C39.0609 46 40.0783 45.5786 40.8284 44.8284C41.5786 44.0783 42 43.0609 42 42V17L29 4Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M28 4V18H42'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M31 27H19'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M31 35H19'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function CheckIconLarge() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M16.6663 5L7.49967 14.1667L3.33301 10'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M18.3337 14.1V16.6C18.3346 16.8321 18.2873 17.0618 18.1951 17.2745C18.1028 17.4871 17.9675 17.678 17.7978 17.8349C17.6281 17.9918 17.4276 18.1112 17.2091 18.1856C16.9905 18.26 16.7586 18.2876 16.5287 18.2667C13.9529 17.988 11.4796 17.1118 9.29199 15.7084C7.24203 14.4289 5.48272 12.6696 4.20366 10.6196C2.79699 8.42311 1.9208 5.93947 1.64533 3.35375C1.62449 3.12453 1.65182 2.89334 1.72573 2.67539C1.79965 2.45743 1.91836 2.25733 2.07438 2.08781C2.2304 1.91829 2.42031 1.78284 2.63209 1.68996C2.84387 1.59708 3.07276 1.54874 3.30449 1.54875H5.80449C6.21618 1.54472 6.61434 1.69491 6.92146 1.97156C7.22857 2.24822 7.42246 2.63007 7.46783 3.03958C7.55293 3.85891 7.72944 4.66665 7.99449 5.44625C8.10344 5.76017 8.11796 6.09945 8.03625 6.42166C7.95454 6.74386 7.78015 7.03517 7.53449 7.25875L6.46783 8.32542C7.62569 10.4286 9.37697 12.1799 11.4803 13.3377L12.547 12.2711C12.7706 12.0254 13.0619 11.851 13.3841 11.7693C13.7063 11.6876 14.0456 11.7021 14.3595 11.8111C15.1391 12.0761 15.9468 12.2526 16.7662 12.3377C17.1807 12.3837 17.5663 12.5813 17.8439 12.8939C18.1215 13.2065 18.2693 13.6112 18.262 14.0271L18.3337 14.1Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M3.33301 3.33334H16.6663C17.583 3.33334 18.333 4.08334 18.333 5.00001V15C18.333 15.9167 17.583 16.6667 16.6663 16.6667H3.33301C2.41634 16.6667 1.66634 15.9167 1.66634 15V5.00001C1.66634 4.08334 2.41634 3.33334 3.33301 3.33334Z'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.333 5L9.99967 10.8333L1.66634 5'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
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
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default function PlusieursResultTnsPage() {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  const handleRequestQuote = () => {
    router.push('/offer-setup/step1')
  }

  const handleContactAdvisor = () => {
    router.push('/contact')
  }

  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1101.805px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.414px] w-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[659.39px] h-[342.414px] w-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
          <div className='flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-b from-[#67d39d] to-[#55c1ff]'>
            <DocumentIcon />
          </div>

          {/* Title */}
          <h1 className="font-['Poppins',sans-serif] max-w-[606px] text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]">
            Il vous faut un <span className='text-[#67d39d]'>contrat TNS</span>
          </h1>

          {/* Description */}
          <p className="font-['DM_Sans',sans-serif] max-w-[662px] text-center text-base font-normal leading-[28.981px] text-white/90 sm:text-lg">
            Un contrat Travailleur Non Salarié (TNS) est adapté à votre situation. Ce type de
            contrat est spécialement conçu pour les dirigeants et associés non rémunérés.
          </p>

          {/* Next steps card */}
          <div className='mt-12 w-full max-w-[700px] rounded-[10px] bg-white/8 px-6 py-10 shadow-lg sm:px-10 lg:mt-[105.8px]'>
            <h3 className="font-['Poppins',sans-serif] mb-6 text-2xl font-semibold text-white">
              Prochaines étapes
            </h3>

            <div className='flex flex-col gap-4'>
              {/* Step 1 */}
              <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#67d39d]'>
                  <CheckIconLarge />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className="font-['Poppins',sans-serif] text-base font-semibold text-white">
                    Simulation complétée
                  </p>
                  <p className="font-['DM_Sans',sans-serif] text-sm leading-6 text-white/70">
                    Votre profil a été analysé et nous avons identifié le contrat adapté.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#55c1ff]'>
                  <PhoneIcon />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className="font-['Poppins',sans-serif] text-base font-semibold text-white">
                    Contactez un conseiller
                  </p>
                  <p className="font-['DM_Sans',sans-serif] text-sm leading-6 text-white/70">
                    Un expert Novéa peut vous accompagner pour finaliser votre adhésion.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className='flex items-start gap-4'>
                <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#715aff]'>
                  <MailIcon />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className="font-['Poppins',sans-serif] text-base font-semibold text-white">
                    Recevez votre devis
                  </p>
                  <p className="font-['DM_Sans',sans-serif] text-sm leading-6 text-white/70">
                    Obtenez une proposition personnalisée sous 24h ouvrées.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className='mt-8 flex w-full max-w-[700px] flex-col gap-4 sm:flex-row lg:mt-[60px]'>
            <button
              onClick={handleRequestQuote}
              className="font-['Poppins',sans-serif] flex h-[52px] flex-1 items-center justify-center rounded-[10px] bg-[#67d39d] text-base font-semibold text-white transition-all hover:bg-[#5bc48c]">
              Demander un devis
            </button>
            <button
              onClick={handleContactAdvisor}
              className="font-['Poppins',sans-serif] flex h-[52px] flex-1 items-center justify-center rounded-[10px] border-2 border-[#67d39d] bg-white/20 text-base font-semibold text-[#67d39d] transition-all hover:bg-white/30">
              Contacter un conseiller
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
