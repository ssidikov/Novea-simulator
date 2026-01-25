'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPinIcon } from '@/components/Icons';
import { useFormData } from '@/contexts/FormContext';

export default function LocationPage() {
  const router = useRouter();
  const { updateFormData } = useFormData();
  const [location, setLocation] = useState('');

  const handleContinue = () => {
    // Save location to form data
    updateFormData({
      city: location,
    });
    
    // Navigate to existing contract question
    router.push('/salary-employees/existing-contract');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#0a253a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[71.34px] left-[611.59px] w-[342.414px] h-[342.414px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]" />
      <div className="absolute top-[769.06px] left-[71.34px] w-[342.414px] h-[342.414px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]" />

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
        <div className="w-full max-w-[930px] flex flex-col items-center gap-8 px-[144px]">
          {/* Tag */}
          <div className="bg-white/10 px-[31px] py-[9px] rounded-full">
            <p className="text-white text-[12.484px] font-bold leading-[17.834px]">
              Vos Informations
            </p>
          </div>

          {/* Title */}
          <h1 className="text-[56px] font-extrabold text-center text-white leading-[80.254px] max-w-[888px]">
            <span className="text-[#67d29d]">Où</span> habitez-vous?
          </h1>

          {/* Description */}
          <p className="text-white/80 text-base text-center leading-[28.981px]">
            Votre lieu de résidence nous permet d&apos;adapter les offres disponibles dans votre région.
          </p>

          {/* Form card */}
          <div className="w-[600px] bg-white/8 rounded-[10px] shadow-lg px-10 py-10 flex flex-col gap-6 mt-[70px]">
            {/* Icon */}
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-b from-[#55c1ff] to-[#715aff] flex items-center justify-center">
              <MapPinIcon className="w-10 h-10 text-white" />
            </div>

            {/* Form field */}
            <div className="flex flex-col gap-[36px] mt-6">
              <label className="text-white text-base font-semibold leading-6">
                Ville ou code postal
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Ex: Paris, Lyon, 75001..."
                  className="w-full h-14 bg-white/5 border-2 border-[#52bcf8]/77 rounded-lg px-5 py-[14px] text-white text-base placeholder:text-white/50 focus:outline-none focus:border-[#55c1ff] transition-colors"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 10.625C11.0355 10.625 11.875 9.78553 11.875 8.75C11.875 7.71447 11.0355 6.875 10 6.875C8.96447 6.875 8.125 7.71447 8.125 8.75C8.125 9.78553 8.96447 10.625 10 10.625Z" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                    <path d="M16.25 8.75C16.25 13.75 10 18.125 10 18.125C10 18.125 3.75 13.75 3.75 8.75C3.75 5.29822 6.54822 2.5 10 2.5C13.4518 2.5 16.25 5.29822 16.25 8.75Z" stroke="white" strokeOpacity="0.5" strokeWidth="1.5"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-[#55c1ff]/20 rounded-lg px-4 py-4 flex items-start gap-3 mt-6">
              <div className="w-[22px] h-[22px] rounded-full bg-[#55c1ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="6" stroke="white" strokeWidth="1.5"/>
                  <path d="M7 4V7.5M7 10H7.005" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-white/70 text-[13px] leading-5 flex-1">
                Votre localisation permet à nos conseillers de vous proposer les meilleures options de couverture santé disponibles dans votre département.
              </p>
            </div>
          </div>

          {/* Continue button */}
          <button
            onClick={handleContinue}
            disabled={!location.trim()}
            className="mt-[80px] px-8 h-12 bg-[#67d29d] rounded-[10px] text-white text-base font-semibold hover:bg-[#5bc38d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuer
          </button>
        </div>
      </div>
    </div>
  );
}
