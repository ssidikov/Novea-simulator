import React from 'react'

interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

/**
 * Универсальная карточка опции с:
 * - Адаптивными размерами
 * - Hover эффектами
 * - Иконкой галочки
 */
export default function OptionCard({ icon, title, description, onClick }: OptionCardProps) {
  return (
    <button
      onClick={onClick}
      className='group relative flex h-[136px] w-full items-center rounded-xl bg-white/8 px-6 py-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] active:scale-[1.02] active:bg-white active:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] sm:px-8 lg:px-[35px]'>
      <div className='flex items-center gap-4 sm:gap-5'>
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff] group-active:bg-[#715aff] sm:h-12 sm:w-12'>
          {icon}
        </div>
        <div className='flex flex-col items-start gap-[3px] text-left text-white'>
          <p className="font-['Poppins',sans-serif] text-sm font-semibold leading-6 transition-colors group-hover:text-[#0a253a] group-active:text-[#0a253a] sm:text-base">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] text-xs leading-5 transition-colors group-hover:text-black group-active:text-black sm:text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className='absolute right-4 bottom-0 -translate-y-1/2 sm:right-[21px]'>
        <svg
          className='h-5 w-5 opacity-30 text-white transition-all group-hover:opacity-100 group-hover:text-[#67D39D] group-active:opacity-100 group-active:text-[#67D39D] sm:h-6 sm:w-6'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M5 12H19M19 12L12 5M19 12L12 19'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    </button>
  )
}
