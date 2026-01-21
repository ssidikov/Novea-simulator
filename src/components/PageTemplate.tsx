'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTemplateProps {
  title: string;
  children: ReactNode;
  onBack?: () => void;
  showBackButton?: boolean;
}

export default function PageTemplate({ 
  title, 
  children, 
  onBack,
  showBackButton = true 
}: PageTemplateProps) {
  const router = useRouter();

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      router.back();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        {showBackButton && (
          <button
            onClick={handleBack}
            className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Retour
          </button>
        )}
        
        <h1 className="text-2xl md:text-3xl font-bold text-[#2A3F54] mb-8">
          {title}
        </h1>
        
        {children}
      </div>
    </div>
  );
}
