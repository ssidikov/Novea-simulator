'use client';

import { useRouter } from 'next/navigation';
import { useFormData } from '@/contexts/FormContext';
import { getNextRoute } from '@/utils/navigationFlow';
import PageTemplate from '@/components/PageTemplate';
import { useState } from 'react';

export default function SocialStatusPage() {
  const router = useRouter();
  const { formData, updateFormData } = useFormData();
  const [status, setStatus] = useState('');

  const options = [
    'Régime général',
    'Travailleur indépendant',
    'Fonctionnaire',
    'Autre'
  ];

  const handleSelect = (selectedStatus: string) => {
    setStatus(selectedStatus);
    updateFormData({ socialStatus: selectedStatus });
    const nextRoute = getNextRoute('/retraite-indtpt/social-status', formData);
    router.push(nextRoute);
  };

  return (
    <PageTemplate title="Quel est votre statut social ?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left"
          >
            <span className="font-medium">{option}</span>
          </button>
        ))}
      </div>
    </PageTemplate>
  );
}
