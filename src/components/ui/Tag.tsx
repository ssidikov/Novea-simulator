import React from 'react'
import { colors, typography } from '@/design-system/tokens'

interface TagProps {
  children: React.ReactNode
  className?: string
}

/**
 * Tag Component - Используется для отображения меток (Configuration, Simulateur, etc.)
 */
export function Tag({ children, className = '' }: TagProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-white/10 px-8 py-2 ${className}`}>
      <p
        className='text-center text-xs font-bold leading-tight text-white'
        style={{ fontFamily: typography.fonts.primary }}>
        {children}
      </p>
    </div>
  )
}
