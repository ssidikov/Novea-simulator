'use client'

import { useRouter } from 'next/navigation'
import { useFormData } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid,
  OptionButton,
} from '@/components/ui'
import { HeartIcon } from '@/components/Icons'

// Health offer specific icons
function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function PillIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M4.5 16.5L16.5 4.5M10.5 10.5L13.5 13.5M4.5 16.5C3 18 3 20 4.5 21.5C6 23 8 23 9.5 21.5L16.5 14.5C18 13 18 11 16.5 9.5C15 8 13 8 11.5 9.5L4.5 16.5Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
      <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='2' opacity='0.6' />
    </svg>
  )
}

function ToothIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 2C8.5 2 6 4.5 6 8V14C6 16 5 18 4 20C3.5 21 4 22 5 22C6 22 7 21 7.5 19.5L9 15L10 19C10.5 21 11 22 12 22C13 22 13.5 21 14 19L15 15L16.5 19.5C17 21 18 22 19 22C20 22 20.5 21 20 20C19 18 18 16 18 14V8C18 4.5 15.5 2 12 2Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function HospitalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M12 6V12M12 12V18M12 12H18M12 12H6'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
      <rect
        x='3'
        y='3'
        width='18'
        height='18'
        rx='2'
        stroke='currentColor'
        strokeWidth='2'
        opacity='0.6'
      />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='9' cy='7' r='4' stroke='currentColor' strokeWidth='2' opacity='0.6' />
      <path
        d='M2 21V19C2 16.2386 4.23858 14 7 14H11C13.7614 14 16 16.2386 16 19V21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
      <path
        d='M16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
      <path
        d='M19 14C20.5 14.5 22 16 22 18V21'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
    </svg>
  )
}

function CrownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M2 20H22M2 20L6 8L12 13L18 8L22 20M12 2L14 8L12 13L10 8L12 2Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        opacity='0.6'
      />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='12' cy='12' r='5' stroke='currentColor' strokeWidth='2' opacity='0.6' />
      <path
        d='M12 1V3M12 21V23M23 12H21M3 12H1M20.49 3.51L19.07 4.93M4.93 19.07L3.51 20.49M20.49 20.49L19.07 19.07M4.93 4.93L3.51 3.51'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        opacity='0.6'
      />
    </svg>
  )
}

export default function HealthOfferPage() {
  const router = useRouter()
  const { updateFormData, formData } = useFormData()

  const handleSelect = (value: string) => {
    updateFormData({ healthOffer: value })
    const nextRoute = getNextRoute('/salary-employees/health-offer', {
      ...formData,
      healthOffer: value,
    })
    router.push(nextRoute)
  }

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag='Votre Offre'
            title={
              <>
                Choisissez une <span className='text-[#67d29d]'>offre de santé adaptée</span>
              </>
            }
            description="Sélectionnez l'offre qui correspond le mieux à vos besoins de santé."
            maxWidth='704px'
          />

          {/* Grid 2x4 */}
          <OptionGrid>
            <OptionButton
              icon={<HeartIcon className='h-6 w-6 text-white/60' />}
              title='Essentiel'
              description='Protection de base pour vos besoins essentiels'
              onClick={() => handleSelect('essentiel')}
              variant='hover-white'
            />
            <OptionButton
              icon={<ShieldIcon className='h-6 w-6 text-white/60' />}
              title='Confort'
              description='Couverture équilibrée et complète'
              onClick={() => handleSelect('confort')}
              variant='hover-white'
            />
            <OptionButton
              icon={<PillIcon className='h-6 w-6 text-white/60' />}
              title='Pharmacie +'
              description='Médicaments et traitements bien remboursés'
              onClick={() => handleSelect('pharmacie-plus')}
              variant='hover-white'
            />
            <OptionButton
              icon={<EyeIcon className='h-6 w-6 text-white/60' />}
              title='Optique renforcée'
              description='Remboursements optimisés pour vos lunettes'
              onClick={() => handleSelect('optique-renforcee')}
              variant='hover-white'
            />
            <OptionButton
              icon={<ToothIcon className='h-6 w-6 text-white/60' />}
              title='Dentaire +'
              description='Soins dentaires et prothèses remboursés'
              onClick={() => handleSelect('dentaire-plus')}
              variant='hover-white'
            />
            <OptionButton
              icon={<HospitalIcon className='h-6 w-6 text-white/60' />}
              title='Hospitalisation'
              description="Garanties étendues en cas d'hospitalisation"
              onClick={() => handleSelect('hospitalisation')}
              variant='hover-white'
            />
            <OptionButton
              icon={<UsersIcon className='h-6 w-6 text-white/60' />}
              title='Famille'
              description='Offre adaptée pour toute la famille'
              onClick={() => handleSelect('famille')}
              variant='hover-white'
            />
            <OptionButton
              icon={<SunIcon className='h-6 w-6 text-white/60' />}
              title='Senior'
              description='Protection renforcée pour les seniors'
              onClick={() => handleSelect('senior')}
              variant='hover-white'
            />
          </OptionGrid>

          {/* Premium button - full width */}
          <div className='mt-8 flex w-full justify-center'>
            <div className='w-full max-w-[875px]'>
              <OptionButton
                icon={<CrownIcon className='h-6 w-6 text-white/60' />}
                title='Premium'
                description='Protection maximale et services haut de gamme'
                onClick={() => handleSelect('premium')}
                variant='hover-white'
              />
            </div>
          </div>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
