/**
 * Validation & Security Utilities
 * Protection XSS et validation des formulaires
 */

// ===== REGEX PATTERNS =====

/** French phone number: 10 digits starting with 0 */
export const phoneRegex = /^0[1-9](\s?\d{2}){4}$/

/** Email validation */
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

/** French postal code: 5 digits */
export const postalCodeRegex = /^\d{5}$/

/** Age: 1-150 */
export const ageRegex = /^(?:[1-9]|[1-9]\d|1[0-4]\d|150)$/

/** Name: letters, spaces, hyphens, apostrophes */
export const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]{2,100}$/

/** Company name: alphanumeric with common special chars */
export const companyNameRegex = /^[a-zA-Z0-9À-ÿ\s&.,'-]{2,200}$/

/** Positive integer */
export const positiveIntegerRegex = /^[1-9]\d*$/

// ===== XSS SANITIZATION =====

/**
 * Escape HTML special characters to prevent XSS
 */
export function escapeHtml(str: string): string {
  const htmlEscapeMap: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;',
  }
  return str.replace(/[&<>"'`=/]/g, (char) => htmlEscapeMap[char] || char)
}

/**
 * Remove potentially dangerous HTML/script content
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') return ''

  return (
    input
      // Remove script tags and their content
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      // Remove event handlers
      .replace(/\bon\w+\s*=\s*["'][^"']*["']/gi, '')
      // Remove javascript: protocol
      .replace(/javascript:/gi, '')
      // Remove data: protocol (potential XSS vector)
      .replace(/data:/gi, '')
      // Remove HTML tags
      .replace(/<[^>]*>/g, '')
      // Escape remaining special characters
      .trim()
  )
}

/**
 * Full sanitization: sanitize + escape
 */
export function sanitizeAndEscape(input: string): string {
  return escapeHtml(sanitizeInput(input))
}

// ===== VALIDATION FUNCTIONS =====

export interface ValidationResult {
  isValid: boolean
  error?: string
}

export function validatePhone(value: string): ValidationResult {
  const cleaned = value.replace(/\s/g, '')
  if (!cleaned) return { isValid: false, error: 'Numéro requis' }
  if (!phoneRegex.test(value)) {
    return { isValid: false, error: 'Format: 01 23 45 67 89' }
  }
  return { isValid: true }
}

export function validateEmail(value: string): ValidationResult {
  if (!value) return { isValid: false, error: 'Email requis' }
  if (!emailRegex.test(value)) {
    return { isValid: false, error: 'Email invalide' }
  }
  return { isValid: true }
}

export function validatePostalCode(value: string): ValidationResult {
  if (!value) return { isValid: false, error: 'Code postal requis' }
  if (!postalCodeRegex.test(value)) {
    return { isValid: false, error: '5 chiffres requis' }
  }
  return { isValid: true }
}

export function validateAge(value: string): ValidationResult {
  if (!value) return { isValid: false, error: 'Âge requis' }
  if (!ageRegex.test(value)) {
    return { isValid: false, error: 'Âge entre 1 et 150' }
  }
  return { isValid: true }
}

export function validateName(value: string): ValidationResult {
  if (!value) return { isValid: false, error: 'Nom requis' }
  const sanitized = sanitizeInput(value)
  if (!nameRegex.test(sanitized)) {
    return { isValid: false, error: 'Caractères non autorisés' }
  }
  return { isValid: true }
}

export function validateCompanyName(value: string): ValidationResult {
  if (!value) return { isValid: false, error: 'Nom entreprise requis' }
  const sanitized = sanitizeInput(value)
  if (!companyNameRegex.test(sanitized)) {
    return { isValid: false, error: 'Caractères non autorisés' }
  }
  return { isValid: true }
}

export function validatePositiveInteger(value: string): ValidationResult {
  if (!value) return { isValid: false, error: 'Nombre requis' }
  if (!positiveIntegerRegex.test(value)) {
    return { isValid: false, error: 'Nombre positif requis' }
  }
  return { isValid: true }
}

export function validateRequired(value: string, fieldName = 'Ce champ'): ValidationResult {
  const sanitized = sanitizeInput(value)
  if (!sanitized.trim()) {
    return { isValid: false, error: `${fieldName} est requis` }
  }
  return { isValid: true }
}
