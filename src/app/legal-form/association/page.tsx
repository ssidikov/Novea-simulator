'use client';

import { useRouter } from 'next/navigation';
import { useFormData } from '@/contexts/FormContext';
import { getNextRoute } from '@/utils/navigationFlow';
import PageTemplate from '@/components/PageTemplate';

export default function AssociationPage() {
  const router = useRouter();
  const { formData } = useFormData();

  const handleContinue = () => {
    const nextRoute = getNextRoute('/legal-form/association', formData);
    router.push(nextRoute);
  };

  return (
    <PageTemplate title="Association">
      <div className="space-y-6">
        <p className="text-gray-700">
          Information sur les associations
        </p>
        
        <button
          onClick={handleContinue}
          className="w-full px-6 py-3 bg-[#2A3F54] text-white rounded-lg hover:bg-[#1a2f44] transition-colors font-medium"
        >
          Continuer
        </button>
      </div>
    </PageTemplate>
  );
}
