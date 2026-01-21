'use client';

import { useRouter } from 'next/navigation';
import { useFormData } from '@/contexts/FormContext';
import { getNextRoute } from '@/utils/navigationFlow';
import PageTemplate from '@/components/PageTemplate';
import { useState } from 'react';

export default function RhComptablePage() {
  const router = useRouter();
  const { formData, updateFormData } = useFormData();
  const [companyName, setCompanyName] = useState('');

  const handleContinue = () => {
    updateFormData({ companyName });
    const nextRoute = getNextRoute('/other-situations/rh-comptable', formData);
    router.push(nextRoute);
  };

  return (
    <PageTemplate title="Informations sur votre entreprise">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'entreprise
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Nom de votre entreprise"
          />
        </div>
        
        <button
          onClick={handleContinue}
          disabled={!companyName}
          className="w-full px-6 py-3 bg-[#2A3F54] text-white rounded-lg hover:bg-[#1a2f44] transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuer
        </button>
      </div>
    </PageTemplate>
  );
}
