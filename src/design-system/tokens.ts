/**
 * Design System - Design Tokens
 * Централизованная система дизайна для проекта Novéa Simulateur
 */

// ===== COLORS =====
export const colors = {
  // Primary colors
  primary: {
    dark: '#0a253a',      // Background
    green: '#67d39d',     // Accent green
    purple: '#715aff',    // Accent purple
    blue: '#55c1ff',      // Accent blue
  },

  // White variations
  white: {
    base: '#ffffff',
    opacity10: 'rgba(255, 255, 255, 0.1)',
    opacity20: 'rgba(255, 255, 255, 0.2)',
    opacity30: 'rgba(255, 255, 255, 0.3)',
    opacity40: 'rgba(255, 255, 255, 0.4)',
    opacity50: 'rgba(255, 255, 255, 0.5)',
    opacity60: 'rgba(255, 255, 255, 0.6)',
    opacity70: 'rgba(255, 255, 255, 0.7)',
    opacity80: 'rgba(255, 255, 255, 0.8)',
    opacity90: 'rgba(255, 255, 255, 0.9)',
  },

  // Black variations
  black: {
    base: '#000000',
    opacity10: 'rgba(0, 0, 0, 0.1)',
    opacity20: 'rgba(0, 0, 0, 0.2)',
    opacity30: 'rgba(0, 0, 0, 0.3)',
  },
} as const

// ===== SPACING =====
export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '40px',
  '3xl': '48px',
  '4xl': '64px',
  '5xl': '80px',
} as const

// ===== BORDER RADIUS =====
export const borderRadius = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  full: '9999px',
} as const

// ===== TYPOGRAPHY =====
export const typography = {
  fonts: {
    primary: "'Poppins', sans-serif",
    secondary: "'DM Sans', sans-serif",
  },
  
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '32px',
    '4xl': '40px',
    '5xl': '48px',
    '6xl': '56px',
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.75',
  },
} as const

// ===== SHADOWS =====
export const shadows = {
  sm: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  md: '0px 4px 16px rgba(0, 0, 0, 0.15)',
  lg: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
  xl: '0px 20px 40px -10px rgba(0, 0, 0, 0.4)',
} as const

// ===== TRANSITIONS =====
export const transitions = {
  fast: '150ms ease',
  normal: '300ms ease',
  slow: '500ms ease',
} as const

// ===== BREAKPOINTS =====
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ===== Z-INDEX =====
export const zIndex = {
  base: 0,
  dropdown: 10,
  modal: 100,
  toast: 1000,
} as const

// ===== LAYOUT =====
export const layout = {
  maxWidth: {
    content: '920px',
    text: '800px',
    narrow: '606px',
    description: '489px',
  },
  
  padding: {
    page: {
      mobile: '16px',
      tablet: '32px',
      desktop: '67px',
    },
  },
  
  gap: {
    section: '62px',
    subsection: '22px',
    card: '35px',
  },
} as const

// ===== ANIMATION =====
export const animation = {
  hover: {
    scale: 1.02,
    opacity: {
      from: 0.7,
      to: 1,
    },
  },
  
  blur: {
    amount: '57.069px',
  },
} as const

// ===== COMPONENT SIZES =====
export const componentSizes = {
  tag: {
    height: '38px',
    padding: {
      x: '31px',
      y: '9px',
    },
  },
  
  button: {
    height: {
      sm: '40px',
      md: '48px',
      lg: '60px',
    },
    padding: {
      sm: { x: '16px', y: '8px' },
      md: { x: '24px', y: '12px' },
      lg: { x: '32px', y: '16px' },
    },
  },
  
  card: {
    height: '136px',
    padding: {
      x: '35px',
      y: '15px',
    },
  },
  
  icon: {
    sm: '20px',
    md: '24px',
    lg: '40px',
    xl: '48px',
  },
  
  iconContainer: {
    sm: '40px',
    md: '48px',
    lg: '80px',
  },
} as const
