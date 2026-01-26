import React from 'react'

interface PageLayoutProps {
  children: React.ReactNode
  showBackButton?: boolean
  onBack?: () => void
}

/**
 * PageLayout Component - Основной layout для всех страниц
 * Включает фон, декоративные элементы и структуру
 */
export function PageLayout({ children, showBackButton, onBack }: PageLayoutProps) {
  return (
    <div className='relative min-h-screen w-full overflow-x-hidden bg-[#0a253a]'>
      {/* Background decorations */}
      <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
      <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
      <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

      {/* Main content */}
      {children}
    </div>
  )
}

/**
 * PageContainer - Контейнер для контента страницы
 */
export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[149px]'>
      {children}
    </div>
  )
}

/**
 * PageSection - Секция контента
 */
export function PageSection({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-16 ${className}`}>
      {children}
    </div>
  )
}
