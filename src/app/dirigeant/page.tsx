'use client'
import { useRouter } from 'next/navigation'
import { PageLayout, PageContainer, PageSection, PageHeader, BackButton, OptionList } from '@/components/ui'
import { OptionButton } from '@/components/ui/OptionButton'
import { UsersIcon, UserSingleIcon, UserGroupIcon } from '@/components/Icons'

export default function Dirigeant() {
  const router = useRouter()

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag="Configuration"
            title={
              <>
                {`Qui souhaitez-vous `}
                <span className="text-[#67d29d]">couvrir</span>
                {` ?`}
              </>
            }
            description="Choisissez le type de couverture santé que vous souhaitez mettre en place pour votre entreprise."
            maxWidth="606px"
          />

          <OptionList>
            <OptionButton
              icon={<UsersIcon className="text-white/60" />}
              title="Salariés"
              description="Couverture santé collective pour vos collaborateurs"
              onClick={() => router.push('/employee-count')}
              variant="hover-subtle"
            />

            <OptionButton
              icon={<UserSingleIcon className="text-white/60" />}
              title="Moi-même uniquement"
              description="Couverture santé individuelle pour le dirigeant"
              onClick={() => router.push('/company-status')}
              variant="hover-subtle"
            />

            <OptionButton
              icon={<UserGroupIcon className="text-white/60" />}
              title="Ma famille"
              description="Couverture santé pour vous et vos ayants droit"
              onClick={() => router.push('/coverage-type')}
              variant="hover-subtle"
            />
          </OptionList>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
