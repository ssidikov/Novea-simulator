import React from 'react'

interface PageHeaderProps {
  tag?: string
  title: string | React.ReactNode
  description?: string
  highlightColor?: string
}

/**
 * Универсальный компонент заголовка страницы с:
 * - Адаптивными размерами текста
 * - Опциональным тегом (Configuration, Simulateur и т.д.)
 * - Опциональным описанием
 */
export default function PageHeader({
  tag,
  title,
  description,
  highlightColor = '#67d29d',
}: PageHeaderProps) {
  return (
    <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[62px]'>
      {/* Header Section */}
      <div className='flex w-full flex-col items-center gap-5 sm:gap-[22px]'>
        {/* Tag */}
        {tag && (
          <div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
            <p className="font-['Poppins',sans-serif] text-center text-[12.484px] font-bold leading-[17.834px] text-white">
              {tag}
            </p>
          </div>
        )}

        {/* Title */}
        <h1
          className="font-['Poppins',sans-serif] w-full max-w-[800px] whitespace-pre-wrap text-center text-3xl font-extrabold leading-tight text-white sm:text-4xl sm:leading-[60px] lg:text-[56px] lg:leading-[70px]"
          style={{ '--highlight-color': highlightColor } as React.CSSProperties}>
          {title}
        </h1>
      </div>

      {/* Description */}
      {description && (
        <p className="font-['DM_Sans',sans-serif] w-full max-w-[489px] whitespace-pre-wrap text-center text-sm font-normal leading-relaxed text-white/80 sm:text-base sm:leading-[28.981px]">
          {description}
        </p>
      )}
    </div>
  )
}
