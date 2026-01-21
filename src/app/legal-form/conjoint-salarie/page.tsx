'use client';

import { useRouter } from 'next/navigation';
import { useFormData } from '@/contexts/FormContext';
import { getNextRoute } from '@/utils/navigationFlow';
import PageTemplate from '@/components/PageTemplate';

export default function ConjointSalariePage() {
  const router = useRouter();
  const { formData, updateFormData } = useFormData();

  const handleSelect = (choice: 'oui' | 'non') => {
    updateFormData({ conjointSalarie: choice });
    const nextRoute = getNextRoute('/legal-form/conjoint-salarie', { 
      ...formData, 
      conjointSalarie: choice 
    });
    router.push(nextRoute);
  };

  return (
    <PageTemplate title="Votre conjoint est-il salarié ?">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => handleSelect('oui')}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
        >
          <span className="font-semibold text-lg">Oui</span>
        </button>

        <button
          onClick={() => handleSelect('non')}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
        >
          <span className="font-semibold text-lg">Non</span>
        </button>
      </div>
    </PageTemplate>
  );
}
