'use client'
import { useRouter } from 'next/navigation'
import { useFormData, type CompanyStatus } from '@/contexts/FormContext'
import { getNextRoute } from '@/utils/navigationFlow'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid,
} from '@/components/ui'
import { OptionButton } from '@/components/ui/OptionButton'
import {
  BuildingIcon,
  SuitcaseIcon,
  BuildingColumnsIcon,
  DocumentIcon,
  TractorIcon,
  HeartHandIcon,
  QuestionIcon,
} from '@/components/Icons'

export default function CompanyStatusPage() {
  const router = useRouter()
  const { formData, updateFormData } = useFormData()

  const handleStatusSelect = (companyStatus: CompanyStatus) => {
    updateFormData({ companyStatus })
    const nextRoute = getNextRoute('/company-status', { ...formData, companyStatus })
    router.push(nextRoute)
  }

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag='Configuration'
            title={
              <>
                {`Quel est le `}
                <span className='text-[#67d29d]'>statut</span>
                {` de l'entreprise ?`}
              </>
            }
            maxWidth='606px'
          />

          <OptionGrid>
            <OptionButton
              icon={<SuitcaseIcon className='text-white/60' />}
              title='SAS ou SASU'
              description='Société par Actions Simplifiée'
              onClick={() => handleStatusSelect('SAS/SASU')}
            />

            <OptionButton
              icon={<BuildingIcon className='text-white/60' />}
              title='SARL'
              description='Société À Responsabilité Limitée'
              onClick={() => handleStatusSelect('SARL')}
            />

            <OptionButton
              icon={<BuildingColumnsIcon className='text-white/60' />}
              title='SA'
              description='Société Anonyme'
              onClick={() => handleStatusSelect('SA')}
            />

            <OptionButton
              icon={<DocumentIcon className='text-white/60' />}
              title='EURL'
              description='Entreprise Unipersonnelle'
              onClick={() => handleStatusSelect('EURL')}
            />

            <OptionButton
              icon={<TractorIcon className='text-white/60' />}
              title='SCEA ou GEAC'
              description="Société Civile d'Exploitation Agricole"
              onClick={() => handleStatusSelect('SCEA/GEAC')}
            />

            <OptionButton
              icon={<HeartHandIcon className='text-white/60' />}
              title='Association de loi 1901'
              description='Association à but non lucratif'
              onClick={() => handleStatusSelect('association')}
            />

            <OptionButton
              icon={<QuestionIcon className='text-white/60' />}
              title='Autre'
              description='Micro-entreprise, EIRL, TNS'
              onClick={() => handleStatusSelect('autre')}
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
