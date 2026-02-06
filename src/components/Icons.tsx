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
    <g opacity='0.6'>
      <path
        d='M16 20V4C16 3.46957 15.7893 2.96086 15.4142 2.58579C15.0391 2.21071 14.5304 2 14 2H10C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4V20'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M20 6H4C2.89543 6 2 6.89543 2 8V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

export const UsersMultipleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 27 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17.5999 23.099V20.899C17.5999 19.732 17.1363 18.6129 16.3112 17.7877C15.486 16.9626 14.3668 16.499 13.1999 16.499H6.59989C5.43294 16.499 4.31378 16.9626 3.48862 17.7877C2.66346 18.6129 2.19989 19.732 2.19989 20.899V23.099'
      stroke='white'
      stroke-width='2.19987'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M17.5989 3.44043C18.5424 3.68504 19.378 4.23602 19.9745 5.0069C20.5711 5.77778 20.8947 6.72491 20.8947 7.69963C20.8947 8.67435 20.5711 9.62148 19.9745 10.3923C19.378 11.1632 18.5424 11.7142 17.5989 11.9588'
      stroke='white'
      stroke-width='2.19987'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M24.1987 23.0986V20.8986C24.198 19.9237 23.8735 18.9767 23.2762 18.2061C22.6789 17.4356 21.8426 16.8853 20.8987 16.6416'
      stroke='white'
      stroke-width='2.19987'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M9.89969 12.0998C12.3298 12.0998 14.2997 10.1299 14.2997 7.6998C14.2997 5.26975 12.3298 3.2998 9.89969 3.2998C7.46964 3.2998 5.49969 5.26975 5.49969 7.6998C5.49969 10.1299 7.46964 12.0998 9.89969 12.0998Z'
      stroke='white'
      stroke-width='2.19987'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </svg>
)

export const ClipboardIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8 6H16'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 14V18'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 10H16.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 10H12.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8 10H8.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 14H12.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8 14H8.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 18H12.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M8 18H8.01'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
    <path d='M8 10H16M8 14H16M8 18H12' stroke='currentColor' strokeWidth='2' opacity='0.6' />
  </svg>
)

export const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M2 9.49955C2.00002 8.38675 2.33759 7.30013 2.96813 6.38321C3.59867 5.46629 4.49252 4.76221 5.53161 4.36395C6.5707 3.96569 7.70616 3.89199 8.78801 4.15259C9.86987 4.41319 10.8472 4.99583 11.591 5.82355C11.6434 5.87956 11.7067 5.92422 11.7771 5.95475C11.8474 5.98528 11.9233 6.00103 12 6.00103C12.0767 6.00103 12.1526 5.98528 12.2229 5.95475C12.2933 5.92422 12.3566 5.87956 12.409 5.82355C13.1504 4.99045 14.128 4.40292 15.2116 4.13915C16.2952 3.87539 17.4335 3.9479 18.4749 4.34703C19.5163 4.74617 20.4114 5.453 21.0411 6.37345C21.6708 7.2939 22.0053 8.38431 22 9.49955C22 11.7895 20.5 13.4995 19 14.9995L13.508 20.3125C13.3217 20.5265 13.0919 20.6985 12.834 20.8169C12.5762 20.9353 12.296 20.9973 12.0123 20.9991C11.7285 21.0009 11.4476 20.9423 11.1883 20.8272C10.9289 20.7121 10.697 20.5432 10.508 20.3316L5 14.9995C3.5 13.4995 2 11.7995 2 9.49955Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

export const BuildingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M10 12H14'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M10 8H14'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M14 21V18C14 17.4696 13.7893 16.9609 13.4142 16.5858C13.0391 16.2107 12.5304 16 12 16C11.4696 16 10.9609 16.2107 10.5858 16.5858C10.2107 16.9609 10 17.4696 10 18V21'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6 10H4C3.46957 10 2.96086 10.2107 2.58579 10.5858C2.21071 10.9609 2 11.4696 2 12V19C2 19.5304 2.21071 20.0391 2.58579 20.4142C2.96086 20.7893 3.46957 21 4 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V9C22 8.46957 21.7893 7.96086 21.4142 7.58579C21.0391 7.21071 20.5304 7 20 7H18'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6 21V5C6 4.46957 6.21071 3.96086 6.58579 3.58579C6.96086 3.21071 7.46957 3 8 3H16C16.5304 3 17.0391 3.21071 17.4142 3.58579C17.7893 3.96086 18 4.46957 18 5V21'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

export const GraduationCapIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M21.42 10.9224C21.599 10.8434 21.7509 10.7137 21.8569 10.5492C21.9629 10.3847 22.0183 10.1928 22.0163 9.9971C22.0143 9.80144 21.9549 9.61068 21.8456 9.44844C21.7362 9.2862 21.5816 9.15962 21.401 9.08436L12.83 5.18036C12.5694 5.06151 12.2864 5 12 5C11.7136 5 11.4306 5.06151 11.17 5.18036L2.6 9.08036C2.42197 9.15833 2.27052 9.2865 2.16417 9.44918C2.05782 9.61186 2.00118 9.802 2.00118 9.99636C2.00118 10.1908 2.05782 10.3809 2.16417 10.5436C2.27052 10.7063 2.42197 10.8344 2.6 10.9124L11.17 14.8204C11.4306 14.9393 11.7136 15.0008 12 15.0008C12.2864 15.0008 12.5694 14.9393 12.83 14.8204L21.42 10.9224Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22 10V16'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M6 12.5V16C6 16.7956 6.63214 17.5587 7.75736 18.1213C8.88258 18.6839 10.4087 19 12 19C13.5913 19 15.1174 18.6839 16.2426 18.1213C17.3679 17.5587 18 16.7956 18 16V12.5'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

// Coverage type icons
export const UsersGroupIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 3.12793C16.8578 3.3503 17.6174 3.85119 18.1597 4.55199C18.702 5.25279 18.9962 6.11382 18.9962 6.99993C18.9962 7.88604 18.702 8.74707 18.1597 9.44787C17.6174 10.1487 16.8578 10.6496 16 10.8719'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M22 20.9999V18.9999C21.9993 18.1136 21.7044 17.2527 21.1614 16.5522C20.6184 15.8517 19.8581 15.3515 19 15.1299'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

export const UserSingleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

export const UserGroupIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g opacity='0.6'>
      <path
        d='M16 11L18 13L22 9'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z'
        stroke='white'
        stroke-width='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </g>
  </svg>
)

export const UsersGroupMultipleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M17 20C17 18.3431 15.6569 17 14 17H10C8.34315 17 7 18.3431 7 20'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
    <path
      d='M14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
    <path
      d='M7 9C7 7.34315 5.65685 6 4 6C2.34315 6 1 7.34315 1 9'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
    <path
      d='M17 9C17 7.34315 18.3431 6 20 6C21.6569 6 23 7.34315 23 9'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
    <path
      d='M4 5C4.55228 5 5 4.55228 5 4C5 3.44772 4.55228 3 4 3C3.44772 3 3 3.44772 3 4C3 4.55228 3.44772 5 4 5Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
    <path
      d='M20 5C20.5523 5 21 4.55228 21 4C21 3.44772 20.5523 3 20 3C19.4477 3 19 3.44772 19 4C19 4.55228 19.4477 5 20 5Z'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      opacity='0.6'
    />
  </svg>
)

export const UsersIcon = ({ className }: { className?: string }) => (
  <Icon name='users' className={className} width={20} height={20} />
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
