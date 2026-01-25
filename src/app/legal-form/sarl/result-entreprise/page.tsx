'use client'

import { useRouter } from 'next/navigation'
import { BuildingIcon, ArrowRightIcon, CloseIcon, CheckIcon } from '@/components/Icons'

export default function SarlResultEntreprisePage() {
  const router = useRouter()

  const handleContinue = () => {
    router.push('/salary-employees/count')
  }

  const handleBack = () => {
    router.back()
  }

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Background decorations */}
      <div className='absolute top-[71.34px] left-[611.59px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />
      <div className='absolute top-[520.54px] left-[71.34px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

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
          {/* Success tag */}
          <div className='bg-white/10 px-4 py-[9px] rounded-full flex items-center gap-[10px]'>
            <CheckIcon className='w-4 h-4 text-[#67d39d]' />
            <p className='text-[#67d39d] text-[12.484px] font-bold leading-[17.834px]'>
              Simulation terminée
            </p>
          </div>

          {/* Icon */}
          <div className='w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#55c1ff] to-[#715aff] flex items-center justify-center'>
            <BuildingIcon className='w-[50px] h-[50px] text-white' />
          </div>

          {/* Title */}
          <h1 className='text-[56px] font-extrabold text-center text-white leading-[70px] max-w-[606px]'>
            On vous propose un <span className='text-[#54c1ff]'>contrat d&apos;entreprise</span>
          </h1>

          {/* Description */}
          <p className='text-white/90 text-lg text-center max-w-[681px] leading-[28.981px]'>
            Un contrat collectif d&apos;entreprise est recommandé pour votre situation. Ce type de
            contrat permet de couvrir les dirigeants rémunérés et les salariés au sein d&apos;un
            même contrat.
          </p>

          {/* Confirmation card */}
          <div className='w-[700px] bg-white/8 rounded-[10px] shadow-lg px-10 py-10 flex flex-col gap-8 mt-[116px]'>
            {/* Question */}
            <div className='flex flex-col items-center gap-3'>
              <h3 className='text-white text-2xl font-semibold text-center leading-8'>
                Voulez-vous continuer la simulation ?
              </h3>
              <p className='text-white/70 text-base text-center leading-6'>
                Nous vous accompagnerons pour finaliser votre projet de couverture santé.
              </p>
            </div>

            {/* Buttons */}
            <div className='flex items-center gap-4'>
              <button
                onClick={handleContinue}
                className='flex-1 max-w-[300px] h-[52px] bg-[#55c1ff] rounded-[10px] flex items-center justify-center gap-[10px] hover:bg-[#4ab0e6] transition-colors'>
                <span className='text-white text-base font-semibold'>Oui, continuer</span>
                <ArrowRightIcon className='w-5 h-5 text-white' />
              </button>

              <button
                onClick={handleBack}
                className='flex-1 max-w-[304px] h-[52px] bg-white border-2 border-[#55c1ff] rounded-[10px] flex items-center justify-center gap-[10px] hover:bg-gray-50 transition-colors'>
                <CloseIcon className='w-5 h-5 text-[#55c1ff]' />
                <span className='text-[#55c1ff] text-base font-semibold'>Non, revenir</span>
              </button>
            </div>
          </div>

          {/* Additional info */}
          <p className='text-white/70 text-sm text-center max-w-[574px] leading-6 mt-[60px]'>
            Si vous continuez, nous vous demanderons quelques informations supplémentaires pour
            personnaliser votre proposition.
          </p>
        </div>
      </div>
    </div>
  )
}
