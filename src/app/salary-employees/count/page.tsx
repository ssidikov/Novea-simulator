'use client';

import { useRouter } from 'next/navigation';
import { useFormData, type EmployeeCount } from '@/contexts/FormContext';
import { getNextRoute } from '@/utils/navigationFlow';
import PageTemplate from '@/components/PageTemplate';

export default function SalaryEmployeesCountPage() {
  const router = useRouter();
  const { formData, updateFormData } = useFormData();

  const handleSelect = (count: EmployeeCount) => {
    updateFormData({ employeeCount: count });
    const nextRoute = getNextRoute('/salary-employees/count', { 
      ...formData, 
      employeeCount: count 
    });
    router.push(nextRoute);
  };

  return (
    <PageTemplate title="Combien de salariés ?">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button
          onClick={() => handleSelect('1-5')}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
        >
          <div className="font-semibold text-2xl mb-2">1 - 5</div>
          <p className="text-gray-600 text-sm">salariés</p>
        </button>

        <button
          onClick={() => handleSelect('6-100')}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
        >
          <div className="font-semibold text-2xl mb-2">6 - 100</div>
          <p className="text-gray-600 text-sm">salariés</p>
        </button>

        <button
          onClick={() => handleSelect('100+')}
          className="p-6 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-center"
        >
          <div className="font-semibold text-2xl mb-2">100+</div>
          <p className="text-gray-600 text-sm">salariés</p>
        </button>
      </div>
    </PageTemplate>
  );
}
