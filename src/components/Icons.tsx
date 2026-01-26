import Image from 'next/image'

interface IconProps {
  name: string
  className?: string
  width?: number
  height?: number
}

export function Icon({ name, className = '', width = 24, height = 24 }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={name}
      width={width}
      height={height}
      className={className}
    />
  )
}

// Main page icons - Situation selection
export const BriefcaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 10C2 8.89543 2.89543 8 4 8H20C21.1046 8 22 8.89543 22 10V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V10Z'
      stroke='currentColor'
      strokeWidth='2'
      opacity='0.6'
    />
    <path
      d='M8 8V6C8 4.89543 8.89543 4 10 4H14C15.1046 4 16 4.89543 16 6V8'
      stroke='currentColor'
      strokeWidth='2'
      opacity='0.6'
    />
  </svg>
)

export const UsersMultipleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
      stroke='currentColor'
      strokeWidth='2'
      opacity='0.6'
    />
    <path
      d='M3 21V19C3 16.2386 5.23858 14 8 14H10C12.7614 14 15 16.2386 15 19V21'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      opacity='0.6'
    />
    <circle cx='17' cy='7' r='3' stroke='currentColor' strokeWidth='2' opacity='0.6' />
    <path
      d='M17 13C18.5 13.5 21 15 21 18V21'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      opacity='0.6'
    />
  </svg>
)

export const ClipboardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect
      x='4'
      y='5'
      width='16'
      height='16'
      rx='2'
      stroke='currentColor'
      strokeWidth='2'
      opacity='0.6'
    />
    <path d='M8 10H16M8 14H16M8 18H12' stroke='currentColor' strokeWidth='2' opacity='0.6' />
  </svg>
)

export const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 21L3.5 12.5C1.5 10.5 1.5 7.5 3.5 5.5C5.5 3.5 8.5 3.5 10.5 5.5L12 7L13.5 5.5C15.5 3.5 18.5 3.5 20.5 5.5C22.5 7.5 22.5 10.5 20.5 12.5L12 21Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
  </svg>
)

export const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3 21H21M6 21V9L12 3L18 9V21M9 12H11M9 16H11M13 12H15M13 16H15'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
  </svg>
)

export const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M2 9L12 4L22 9L12 14L2 9Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
    <path
      d='M6 10.5V15.5C6 16.5 8.5 19 12 19C15.5 19 18 16.5 18 15.5V10.5'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      opacity='0.6'
    />
  </svg>
)

export const UsersIcon = ({ className }: { className?: string }) => (
  <Icon name='users' className={className} width={20} height={20} />
)

export const UserSingleIcon = ({ className }: { className?: string }) => (
  <Icon name='user-single' className={className} width={20} height={20} />
)

export const UserGroupIcon = ({ className }: { className?: string }) => (
  <Icon name='user-group' className={className} width={20} height={20} />
)

export const PersonIcon = ({ className }: { className?: string }) => (
  <Icon name='person' className={className} width={20} height={20} />
)

export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <Icon name='arrow-right' className={className} width={20} height={20} />
)

export const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <Icon name='arrow-left' className={`${className}`} width={20} height={20} />
)

export const SuitcaseIcon = ({ className }: { className?: string }) => (
  <Icon name='suitcase' className={className} width={20} height={20} />
)

export const BuildingColumnsIcon = ({ className }: { className?: string }) => (
  <Icon name='building-columns' className={className} width={20} height={20} />
)

export const DocumentIcon = ({ className }: { className?: string }) => (
  <Icon name='document' className={className} width={20} height={20} />
)

export const TractorIcon = ({ className }: { className?: string }) => (
  <Icon name='tractor' className={className} width={20} height={20} />
)

export const HeartHandIcon = ({ className }: { className?: string }) => (
  <Icon name='heart-hand' className={className} width={20} height={20} />
)

export const QuestionIcon = ({ className }: { className?: string }) => (
  <Icon name='question' className={className} width={20} height={20} />
)

export const Users2Icon = ({ className }: { className?: string }) => (
  <Icon name='users-2' className={className} />
)

export const Users3Icon = ({ className }: { className?: string }) => (
  <Icon name='users-3' className={className} />
)

export const BuildingOfficeIcon = ({ className }: { className?: string }) => (
  <Icon name='building-office' className={className} />
)

export const CalendarIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect x='3' y='6' width='18' height='15' rx='2' stroke='currentColor' strokeWidth='2' />
    <path d='M3 10H21' stroke='currentColor' strokeWidth='2' />
    <path d='M8 3V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
    <path d='M16 3V7' stroke='currentColor' strokeWidth='2' strokeLinecap='round' />
  </svg>
)

export const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z'
      stroke='currentColor'
      strokeWidth='2'
    />
    <path
      d='M19.5 10.5C19.5 16.5 12 22.5 12 22.5C12 22.5 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5Z'
      stroke='currentColor'
      strokeWidth='2'
    />
  </svg>
)

export const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M20 6L9 17L4 12'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const CloseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M18 6L6 18M6 6L18 18'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <circle cx='12' cy='8' r='4' stroke='currentColor' strokeWidth='2' />
    <path
      d='M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)
