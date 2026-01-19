'use client';
import { useRouter } from 'next/navigation';
import { UsersIcon, UserSingleIcon, UserGroupIcon, ArrowLeftIcon } from '@/components/Icons';

interface TagProps {
  className?: string;
  txt?: string;
}

function Tag({ className, txt = "Votre profil" }: TagProps) {
  return (
    <div className={className}>
      <p className="font-['Poppins',sans-serif] text-center text-[12.484px] font-bold leading-[17.834px] text-white">
        {txt}
      </p>
    </div>
  );
}

interface CoverageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

function CoverageCard({ icon, title, description, onClick }: CoverageCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative flex h-[136px] w-full max-w-[653px] items-center justify-between rounded-xl bg-white/8 px-8 py-[15px] transition-all duration-300 hover:scale-[1.02] hover:bg-white/12"
    >
      <div className="flex items-center gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
          {icon}
        </div>
        <div className="flex flex-col items-start gap-[3px] text-white text-left">
          <p className="font-['Poppins',sans-serif] text-base font-semibold leading-6">{title}</p>
          <p className="font-['Poppins',sans-serif] whitespace-pre-wrap text-sm leading-5">{description}</p>
        </div>
      </div>
      <div className="shrink-0">
        <div className="h-6 w-6 opacity-30 transition-opacity group-hover:opacity-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
            <path d="M5 12L10 17L19 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </button>
  );
}

export default function Dirigeant() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5" />
      <div className="pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]" />
      <div className="pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]" />

      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="fixed left-4 top-[40px] z-10 flex h-[21px] items-center gap-2 opacity-70 transition-opacity hover:opacity-100 sm:left-[62px]"
      >
        <ArrowLeftIcon className="text-white" />
        <p className="font-['Poppins',sans-serif] text-center text-sm font-medium leading-[21px] text-white">
          Retour
        </p>
      </button>

      {/* Main content */}
      <div className="mx-auto w-full max-w-[920px] px-4 py-[149px] sm:px-[67px]">
        <div className="flex w-full flex-col items-center gap-[62px]">
          {/* Header */}
          <div className="flex w-full flex-col items-center gap-[22px] px-4">
            <Tag className="flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]" txt="Configuration" />
            <h1 className="w-full max-w-[606px] whitespace-pre-wrap text-center font-['Poppins',sans-serif] text-4xl font-extrabold leading-[70px] text-white sm:text-[56px]">
              {`Qui souhaitez-vous `}
              <span className="text-[#67d29d]">couvrir</span>
              {` ?`}
            </h1>
          </div>

          {/* Description */}
          <p className="w-full max-w-[489px] whitespace-pre-wrap text-center font-['Poppins',sans-serif] text-base font-normal leading-[28.981px] text-white/80">
            Choisissez le type de couverture santé que vous souhaitez mettre en place pour votre entreprise.
          </p>

          {/* Coverage Options */}
          <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-full flex-col items-center gap-3">
              {/* Salariés */}
              <CoverageCard
                icon={<UsersIcon className="text-white/60" />}
                title="Salariés"
                description="Couverture santé collective pour vos collaborateurs"
                onClick={() => router.push('/employee-count')}
              />

              {/* Dirigeant seulement */}
              <CoverageCard
                icon={<UserSingleIcon className="text-white/60" />}
                title="Dirigeant seulement"
                description="Protection santé individuelle pour le dirigeant"
                onClick={() => router.push('/dirigeant-seul')}
              />

              {/* Dirigeant et salarié */}
              <CoverageCard
                icon={<UserGroupIcon className="text-white/60" />}
                title="Dirigeant et salarié"
                description="Couverture complète dirigeant + collaborateurs"
                onClick={() => router.push('/company-status')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
