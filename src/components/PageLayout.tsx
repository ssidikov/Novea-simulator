import React from 'react'
import { ArrowLeftIcon } from './Icons'

interface PageLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
  onBack?: () => void
}

/**
 * Универсальный макет страницы с:
 * - Одинаковым фоном (#0a253a)
 * - Декоративными элементами
 * - Опциональной кнопкой "Назад"
 * - Центрированным адаптивным контентом
 */
export default function PageLayout({ children, showBackButton = false, onBack }: PageLayoutProps) {
  return (
    <div className='relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Back button */}
      {showBackButton && onBack && (
        <button
          onClick={onBack}
          className='fixed left-4 top-8 z-10 flex h-[21px] items-center gap-2 opacity-70 transition-opacity hover:opacity-100 sm:left-8 lg:left-[62px] lg:top-[40px]'>
          <ArrowLeftIcon className='h-5 w-5 text-white sm:h-6 sm:w-6' />
          <p className="font-['Poppins',sans-serif] text-center text-xs font-medium leading-[21px] text-white sm:text-sm">
            Retour
          </p>
        </button>
      )}

      {/* Main content - centralized and responsive */}
      <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[149px]'>
        {children}
      </div>
    </div>
  )
}
