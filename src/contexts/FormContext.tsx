'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// Типы для всех возможных значений
export type Situation =
  | 'dirigeant'
  | 'entreprise'
  | 'retraite'
  | 'indtpt'
  | 'rh'
  | 'comptable'
  | 'parti'
  | 'etudiant'
  | 'salarie-entr'

export type CoverageType = 'dirigeant-seulement' | 'dirigeant-salarie' | 'salarie-seulement'

export type CompanyStatus =
  | 'SAS/SASU'
  | 'SARL'
  | 'SA'
  | 'EURL'
  | 'SCEA/GEAC'
  | 'association'
  | 'autre'

export type SeulOuPlusieur = 'seul' | 'plusieurs'
export type OuiNon = 'oui' | 'non'
export type EmployeeCount = '1-5' | '6-100' | '100+'

// Интерфейс состояния формы
export interface FormData {
  // Главная страница
  situation: Situation | null

  // Coverage type
  coverageType: CoverageType | null

  // Company status
  companyStatus: CompanyStatus | null

  // Развилки для SAS/SASU
  sasSeulOuPlusieur: SeulOuPlusieur | null
  conjointSalarie: OuiNon | null

  // Развилки для SARL
  tnsStatus: OuiNon | null
  remuneration: OuiNon | null

  // Развилки для SA
  saSeulOuPlusieur: SeulOuPlusieur | null
  saEmployeeCount: EmployeeCount | null

  // Развилки для EURL
  gerantSalarie: OuiNon | null

  // Employee count для entreprise и других
  employeeCount: EmployeeCount | null

  // Для retraité/indtpt
  age: string | null
  socialStatus: string | null
  birthDate: string | null

  // Для RH/Comptable
  companyName: string | null
  conventionCollective: string | null
  existingContract: string | null
  situationDetails: string | null
  healthOffer: string | null

  // Appointment data for 100+ employees
  appointmentPhone: string | null
  appointmentCompanyName: string | null
  appointmentEmployeeCount: string | null
  appointmentFullName: string | null
  appointmentEmail: string | null
  appointmentSector: string | null

  // Offer setup данные
  offerPreferences: {
    option1?: string
    option2?: string
    option3?: string
  }

  // Персональная информация для финального шага
  personalInfo: {
    firstName?: string
    lastName?: string
    email?: string
    phone?: string
    address?: string
    city?: string
    postalCode?: string
  }
}

// Начальное состояние
const initialFormData: FormData = {
  situation: null,
  coverageType: null,
  companyStatus: null,
  sasSeulOuPlusieur: null,
  conjointSalarie: null,
  tnsStatus: null,
  remuneration: null,
  saSeulOuPlusieur: null,
  saEmployeeCount: null,
  gerantSalarie: null,
  employeeCount: null,
  age: null,
  socialStatus: null,
  birthDate: null,
  companyName: null,
  conventionCollective: null,
  existingContract: null,
  situationDetails: null,
  healthOffer: null,
  appointmentPhone: null,
  appointmentCompanyName: null,
  appointmentEmployeeCount: null,
  appointmentFullName: null,
  appointmentEmail: null,
  appointmentSector: null,
  offerPreferences: {},
  personalInfo: {},
}

// Интерфейс контекста
interface FormContextType {
  formData: FormData
  updateFormData: (data: Partial<FormData>) => void
  resetFormData: () => void
}

// Создаем контекст
const FormContext = createContext<FormContextType | undefined>(undefined)

// Provider компонент
export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const resetFormData = () => {
    setFormData(initialFormData)
  }

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormContext.Provider>
  )
}

// Hook для использования контекста
export function useFormData() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormProvider')
  }
  return context
}
