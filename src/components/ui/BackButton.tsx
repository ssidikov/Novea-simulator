'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@/components/Icons'
import { colors, typography } from '@/design-system/tokens'

interface BackButtonProps {
  onBack?: () => void
  label?: string
  className?: string
}

/**
 * BackButton Component - Кнопка "Retour"
 */
export function BackButton({ onBack, label = 'Retour', className = '' }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (onBack) {
      onBack()
    } else {
      router.back()
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`fixed left-4 top-10 z-10 flex items-center gap-2 opacity-70 transition-opacity hover:opacity-100 sm:left-16 ${className}`}>
      <ArrowLeftIcon className='h-5 w-5 text-white' />
      <p
        className='text-center text-sm font-medium leading-tight text-white'
        style={{ fontFamily: typography.fonts.primary }}>
        {label}
      </p>
    </button>
  )
}
