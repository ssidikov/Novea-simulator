'use client';

import { useRouter } from 'next/navigation';
import { CheckIcon, ArrowRightIcon, CloseIcon } from '@/components/Icons';

export default function SceaGeacPage() {
  const router = useRouter();

  const handleContinue = () => {
    router.push('/salary-employees/count');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#0a253a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[71.34px] left-[611.59px] w-[342.414px] h-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]" />
      <div className="absolute top-[659.39px] left-[71.34px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]" />

      {/* Back button */}
      <button
        onClick={handleBack}
        className="absolute top-10 left-[62px] flex items-center gap-2 text-white opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="text-sm font-medium">Retour</span>
      </button>

      {/* Main content */}
      <div className="flex flex-col items-center justify-start pt-20 px-4">
        <div className="w-full max-w-[930px] flex flex-col items-center gap-8 px-[115px]">
          {/* Success tag */}
          <div className="bg-white/10 px-4 py-[9px] rounded-full flex items-center gap-[10px]">
            <CheckIcon className="w-4 h-4 text-[#67d39d]" />
            <p className="text-[#67d39d] text-[12.484px] font-bold leading-[17.834px]">
              Simulation terminée
            </p>
          </div>

          {/* Icon */}
          <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#715aff] to-[#67d39d] flex items-center justify-center">
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" className="text-white">
              <path d="M25 25C30.5228 25 35 20.5228 35 15C35 9.47715 30.5228 5 25 5C19.4772 5 15 9.47715 15 15C15 20.5228 19.4772 25 25 25Z" fill="currentColor"/>
              <path d="M10 40C10 32.268 16.268 26 24 26H26C33.732 26 40 32.268 40 40V42C40 43.1046 39.1046 44 38 44H12C10.8954 44 10 43.1046 10 42V40Z" fill="currentColor"/>
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-[56px] font-extrabold text-center text-white leading-[70px] max-w-[606px]">
            Un même <span className="text-[#705aff]">contrat</span> pour tout le monde !
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg text-center max-w-[642px] leading-[28.981px]">
            L'associé peut être couvert au même titre que les salariés. Vous pouvez donc souscrire à un contrat collectif et couvrir l'associé comme un salarié.
          </p>

          {/* Advantages card */}
          <div className="w-[700px] bg-white/8 rounded-[10px] shadow-lg px-10 py-10 flex flex-col gap-6 mt-[157px]">
            <h3 className="text-white text-2xl font-semibold leading-8">
              Avantages du contrat collectif
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Advantage 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#715aff] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-base font-semibold leading-6">
                    Une seule couverture pour tous
                  </p>
                  <p className="text-white/70 text-sm leading-6">
                    Associés et salariés bénéficient du même niveau de protection santé.
                  </p>
                </div>
              </div>

              {/* Advantage 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#67d39d] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-base font-semibold leading-6">
                    Gestion simplifiée
                  </p>
                  <p className="text-white/70 text-sm leading-6">
                    Un seul contrat à gérer pour toute votre structure.
                  </p>
                </div>
              </div>

              {/* Advantage 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#55c1ff] flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white">
                    <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-white text-base font-semibold leading-6">
                    Accompagnement personnalisé
                  </p>
                  <p className="text-white/70 text-sm leading-6">
                    Nos experts vous aident à mettre en place la solution adaptée.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Confirmation card */}
          <div className="w-[700px] bg-white/8 rounded-[10px] shadow-lg px-10 py-10 flex flex-col gap-8 mt-8">
            {/* Question */}
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-white text-2xl font-semibold text-center leading-8">
                Voulez-vous continuer la simulation ?
              </h3>
              <p className="text-white/70 text-base text-center leading-6">
                Nous vous accompagnerons pour finaliser votre projet de couverture santé.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={handleContinue}
                className="flex-1 max-w-[300px] h-[52px] bg-[#705aff] rounded-[10px] flex items-center justify-center gap-[10px] hover:bg-[#604aef] transition-colors"
              >
                <span className="text-white text-base font-semibold">Oui, continuer</span>
                <ArrowRightIcon className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={handleBack}
                className="flex-1 max-w-[304px] h-[52px] bg-white/80 border-2 border-[#705aff] rounded-[10px] flex items-center justify-center gap-[10px] hover:bg-white/90 transition-colors"
              >
                <CloseIcon className="w-5 h-5 text-[#705aff]" />
                <span className="text-[#705aff] text-base font-semibold">Non, revenir</span>
              </button>
            </div>
          </div>

          {/* Additional info */}
          <p className="text-white/70 text-sm text-center max-w-[574px] leading-6 mt-[60px]">
            Si vous continuez, nous vous demanderons quelques informations supplémentaires pour personnaliser votre proposition.
          </p>
        </div>
      </div>
    </div>
  );
}
