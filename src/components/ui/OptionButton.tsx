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

      {/* Arrow right icon */}
      <div className='absolute right-4 bottom-0 -translate-y-1/2 sm:right-[21px]'>
        <svg
          className='h-5 w-5 opacity-30 text-white transition-all group-hover:opacity-100 group-hover:text-[#67D39D] sm:h-6 sm:w-6'
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
