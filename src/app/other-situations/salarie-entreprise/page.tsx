'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@/components/Icons'

export default function SalarieEntreprisePage() {
  const router = useRouter()

  return (
    <div className='min-h-screen bg-[#0a253a] relative overflow-hidden'>
      {/* Blur decorations */}
      <div className='absolute top-[71px] left-[612px] w-[342px] h-[342px] rounded-full bg-[#67d39d] opacity-10 blur-[57px]' />
      <div className='absolute top-[703px] left-[71px] w-[342px] h-[342px] rounded-full bg-[#55c1ff] opacity-10 blur-[57px]' />

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className='absolute top-10 left-[62px] flex items-center gap-2 text-white/70 hover:text-white transition-colors'
      >
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
            <span className='text-white'>Accès sur </span>
            <span className='text-[#67d29d]'>invitation</span>
          </h1>
        </div>

        {/* Main card */}
        <div className='w-full max-w-[800px] bg-white/8 rounded-2xl shadow-[0px_10px_30px_0px_rgba(0,0,0,0.3)] p-12'>
          <div className='flex flex-col items-center gap-8'>
            {/* Lock icon */}
            <div className='w-20 h-20 rounded-full bg-gradient-to-b from-[#715aff] to-[#67d39d] flex items-center justify-center'>
              <svg
                width='40'
                height='40'
                viewBox='0 0 40 40'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M32 14H30V10C30 5.58 26.42 2 22 2H18C13.58 2 10 5.58 10 10V14H8C5.8 14 4 15.8 4 18V34C4 36.2 5.8 38 8 38H32C34.2 38 36 36.2 36 34V18C36 15.8 34.2 14 32 14ZM20 29C17.8 29 16 27.2 16 25C16 22.8 17.8 21 20 21C22.2 21 24 22.8 24 25C24 27.2 22.2 29 20 29ZM25.8 14H14.2V10C14.2 7.9 15.9 6.2 18 6.2H22C24.1 6.2 25.8 7.9 25.8 10V14Z'
                  fill='white'
                />
              </svg>
            </div>

            {/* Title */}
            <h2 className='text-[28px] font-bold font-poppins leading-10 text-white text-center max-w-[704px]'>
              La mutuelle Novéa fonctionne que sur invitation de l'employeur
            </h2>

            {/* Description */}
            <p className='text-lg text-white/80 text-center font-dm-sans leading-8'>
              Retrouvez votre email d'invitation dans votre boîte mail.
            </p>

            {/* Email verification box */}
            <div className='w-full bg-gradient-to-r from-[rgba(113,90,255,0.2)] to-[rgba(103,211,157,0.2)] border-2 border-[rgba(113,90,255,0.2)] rounded-xl p-[26px]'>
              <div className='flex gap-4 items-start'>
                {/* Email icon */}
                <div className='w-10 h-10 rounded-full bg-gradient-to-b from-[#715aff] to-[#67d39d] flex items-center justify-center flex-shrink-0'>
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16.6667 5.83333C16.6667 4.91667 15.9167 4.16667 15 4.16667H5C4.08333 4.16667 3.33333 4.91667 3.33333 5.83333V14.1667C3.33333 15.0833 4.08333 15.8333 5 15.8333H15C15.9167 15.8333 16.6667 15.0833 16.6667 14.1667V5.83333ZM15 5.83333L10 9.16667L5 5.83333H15ZM15 14.1667H5V7.5L10 10.8333L15 7.5V14.1667Z'
                      fill='white'
                    />
                  </svg>
                </div>

                {/* Text content */}
                <div className='flex flex-col gap-2'>
                  <h3 className='text-lg font-semibold font-poppins text-white'>
                    Vérifiez votre boîte mail
                  </h3>
                  <p className='text-base text-white/70 font-dm-sans leading-[26px]'>
                    Si votre entreprise a souscrit à la mutuelle Novéa, vous avez dû recevoir un
                    email d'invitation de la part de votre employeur. Consultez également vos
                    courriers indésirables.
                  </p>
                </div>
              </div>
            </div>

            {/* No email info box */}
            <div className='w-full bg-[rgba(248,249,250,0.08)] rounded-xl p-5'>
              <div className='flex gap-3 items-start'>
                {/* Info icon */}
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='flex-shrink-0 mt-0.5'
                >
                  <path
                    d='M9 5H11V7H9V5ZM9 9H11V15H9V9ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z'
                    fill='white'
                    fillOpacity='0.7'
                  />
                </svg>

                {/* Text */}
                <div className='text-white/70 font-dm-sans text-sm leading-6'>
                  <span className='font-semibold font-poppins'>
                    Vous n'avez pas reçu d'email ?
                  </span>{' '}
                  Contactez votre service des ressources humaines pour vérifier l'éligibilité de
                  votre entreprise à la mutuelle Novéa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
