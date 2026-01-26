import React from 'react'
import { colors, typography, shadows } from '@/design-system/tokens'

export interface OptionButtonProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
  variant?: 'default' | 'hover-white' | 'hover-subtle'
  className?: string
}

/**
 * OptionButton Component - Универсальная кнопка выбора опции
 * Используется на всех страницах с выбором вариантов
 */
export function OptionButton({
  icon,
  title,
  description,
  onClick,
  variant = 'hover-white',
  className = '',
}: OptionButtonProps) {
  const variantClasses = {
    default: 'hover:bg-white/12',
    'hover-white': 'hover:bg-white hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)]',
    'hover-subtle': 'hover:bg-white/12',
  }

  return (
    <button
      onClick={onClick}
      className={`group relative flex h-[136px] w-full items-center rounded-xl bg-white/8 px-6 py-4 transition-all duration-300 hover:scale-[1.02] sm:px-8 lg:px-[35px] ${variantClasses[variant]} ${className}`}>
      <div className='flex items-center gap-4 sm:gap-5'>
        {/* Icon Container */}
        <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff] sm:h-12 sm:w-12'>
          {icon}
        </div>

        {/* Text Content */}
        <div className='flex flex-col items-start gap-[3px] text-left'>
          <p
            className='text-sm font-semibold leading-6 text-white transition-colors group-hover:text-[#0a253a] sm:text-base'
            style={{ fontFamily: typography.fonts.primary }}>
            {title}
          </p>
          <p
            className='text-xs leading-5 text-white/50 transition-colors group-hover:text-black sm:text-sm'
            style={{ fontFamily: typography.fonts.primary }}>
            {description}
          </p>
        </div>
      </div>

      {/* Check Icon */}
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

/**
 * OptionGrid - Сетка для размещения OptionButton
 */
export function OptionGrid({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className='grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-[35px]'>{children}</div>
    </div>
  )
}

/**
 * OptionList - Вертикальный список для OptionButton
 */
export function OptionList({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex w-full flex-col items-center justify-center ${className}`}>
      <div className='flex w-full max-w-[653px] flex-col items-center gap-3'>{children}</div>
    </div>
  )
}
