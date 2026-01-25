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
      className='group relative flex h-[136px] w-full items-center rounded-xl bg-white/8 px-6 py-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)] sm:px-8 lg:px-[35px]'>
      <div className='flex items-center gap-4 sm:gap-5'>
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff] sm:h-12 sm:w-12'>
          {icon}
        </div>
        <div className='flex flex-col items-start gap-[3px] text-left text-white'>
          <p className="font-['Poppins',sans-serif] text-sm font-semibold leading-6 transition-colors group-hover:text-[#0a253a] sm:text-base">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] text-xs leading-5 transition-colors group-hover:text-black sm:text-sm">
            {description}
          </p>
        </div>
      </div>
      <div className='absolute right-4 top-1/2 -translate-y-1/2 sm:right-[21px]'>
        <div className='h-5 w-5 opacity-30 transition-all group-hover:opacity-100 sm:h-6 sm:w-6'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            className='text-white transition-colors group-hover:text-[#0a253a]'>
            <path
              d='M5 12L10 17L19 8'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      </div>
    </button>
  )
}
