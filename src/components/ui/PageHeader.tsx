import React from 'react'
import { colors, typography } from '@/design-system/tokens'

interface PageHeaderProps {
  tag?: string
  title: React.ReactNode
  description?: string
  maxWidth?: string
}

/**
 * PageHeader Component - Заголовок страницы с тегом и описанием
 */
export function PageHeader({ tag, title, description, maxWidth = '800px' }: PageHeaderProps) {
  return (
    <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-16'>
      {/* Header Section */}
      <div className='flex w-full flex-col items-center gap-5 sm:gap-6'>
        {/* Tag */}
        {tag && (
          <div className='flex shrink-0 items-center justify-center rounded-full bg-white/10 px-8 py-2'>
            <p
              className='text-center text-xs font-bold leading-tight text-white'
              style={{ fontFamily: typography.fonts.primary }}>
              {tag}
            </p>
          </div>
        )}

        {/* Title */}
        <h1
          className='w-full whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-tight lg:text-6xl lg:leading-tight'
          style={{
            fontFamily: typography.fonts.primary,
            maxWidth,
          }}>
          {title}
        </h1>
      </div>

      {/* Description */}
      {description && (
        <p
          className='w-full max-w-[489px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base'
          style={{ fontFamily: typography.fonts.primary }}>
          {description}
        </p>
      )}
    </div>
  )
}
