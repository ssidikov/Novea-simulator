'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@/components/Icons'

export default function PartiEtudiantPage() {
  const router = useRouter()

  const handleContact = () => {
    // TODO: Add contact functionality or external link
    console.log('Contact button clicked')
  }

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Blur decorations */}
      <div className='absolute top-[71px] left-[612px] w-[342px] h-[342px] rounded-full bg-[#67d39d] opacity-10 blur-[57px]' />
      <div className='absolute top-[517px] left-[71px] w-[342px] h-[342px] rounded-full bg-[#55c1ff] opacity-10 blur-[57px]' />

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className='absolute top-10 left-[62px] flex items-center gap-2 text-white/70 hover:text-white transition-colors'>
        <ArrowLeftIcon />
        <span className='text-sm font-medium font-poppins'>Retour</span>
      </button>

      {/* Content */}
      <div className='flex flex-col items-center justify-center min-h-screen gap-[60px] px-4'>
        {/* Top section with badge and title */}
        <div className='flex flex-col items-center gap-8 w-full max-w-[930px]'>
          {/* Information badge */}
          <div className='bg-white/10 rounded-full px-[19px] py-[9px]'>
            <p className='text-[#67d39d] text-[12.5px] font-bold font-poppins'>Information</p>
          </div>

          {/* Title */}
          <h1 className='text-[56px] font-extrabold font-poppins leading-[80px] text-center'>
            <span className='text-white'>Offre </span>
            <span className='text-[#67d29d]'>à venir</span>
          </h1>
        </div>

        {/* Main card */}
        <div className='w-full max-w-[800px] bg-white/8 rounded-2xl shadow-[0px_10px_30px_0px_rgba(0,0,0,0.3)] p-12'>
          <div className='flex flex-col items-center gap-8'>
            {/* Icon */}
            <div className='w-20 h-20 rounded-full bg-gradient-to-b from-[#55c1ff] to-[#715aff] flex items-center justify-center'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M20 3.33331C10.795 3.33331 3.33333 10.795 3.33333 20C3.33333 29.205 10.795 36.6666 20 36.6666C29.205 36.6666 36.6667 29.205 36.6667 20C36.6667 10.795 29.205 3.33331 20 3.33331ZM21.6667 28.3333H18.3333V25H21.6667V28.3333ZM21.6667 21.6666H18.3333V11.6666H21.6667V21.6666Z'
                  fill='white'
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className='text-[28px] font-bold font-poppins leading-10 text-white text-center'>
              Nous n'avons pas d'offre pour les particuliers
            </h2>

            {/* Description */}
            <p className='text-lg text-white/80 text-center font-dm-sans leading-8'>
              Mais dès que ce sera le cas, nous pourrons vous prévenir.
            </p>

            {/* Info box */}
            <div className='w-full bg-gradient-to-r from-[rgba(103,211,157,0.1)] to-[rgba(85,193,255,0.1)] border-2 border-[rgba(103,211,157,0.2)] rounded-xl p-[26px]'>
              <div className='flex gap-4 items-start'>
                {/* Bell icon */}
                <div className='w-10 h-10 rounded-full bg-gradient-to-b from-[#67d39d] to-[#55c1ff] flex items-center justify-center flex-shrink-0'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M10 17.5C10.9167 17.5 11.6667 16.75 11.6667 15.8333H8.33333C8.33333 16.75 9.08333 17.5 10 17.5ZM15 12.5V8.33333C15 5.85833 13.6417 3.76667 11.25 3.225V2.5C11.25 1.81667 10.6833 1.66667 10 1.66667C9.31667 1.66667 8.75 2.23333 8.75 2.91667V3.225C6.36667 3.76667 5 5.85 5 8.33333V12.5L3.33333 14.1667V15H16.6667V14.1667L15 12.5Z'
                      fill='white'
                    />
                  </svg>
                </div>

                {/* Text content */}
                <div className='flex flex-col gap-2'>
                  <h3 className='text-lg font-semibold font-poppins text-white'>Restez informé</h3>
                  <p className='text-base text-white/70 font-dm-sans leading-[26px]'>
                    Nous travaillons actuellement sur une offre dédiée aux particuliers et
                    étudiants. Contactez-nous pour être averti dès son lancement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact button */}
        <button
          onClick={handleContact}
          className='bg-[#67d29d] hover:bg-[#67d29d]/90 text-white text-base font-semibold font-poppins px-[31px] py-3 rounded-[10px] transition-colors leading-6'>
          Nous contacter
        </button>
      </div>
    </div>
  )
}
