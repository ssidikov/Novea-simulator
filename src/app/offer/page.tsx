'use client';

import { useFormData } from '@/contexts/FormContext';
import PageTemplate from '@/components/PageTemplate';

export default function OfferPage() {
  const { formData } = useFormData();

  return (
    <PageTemplate title="Votre Offre" showBackButton={false}>
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Félicitations !</h2>
          <p className="text-xl">Voici votre offre personnalisée</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Formule Essential</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">49€</div>
            <p className="text-gray-600 text-sm mb-6">par mois</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Consultations médicales</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Pharmacie</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Hospitalisation</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Choisir
            </button>
          </div>

          <div className="bg-blue-50 border-2 border-blue-500 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Recommandé
            </div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Formule Confort</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">89€</div>
            <p className="text-gray-600 text-sm mb-6">par mois</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Tout Essential</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Dentaire renforcé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Optique premium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Médecines douces</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Choisir
            </button>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">Formule Premium</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">129€</div>
            <p className="text-gray-600 text-sm mb-6">par mois</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Tout Confort</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Orthodontie adulte</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Implants dentaires</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Cure thermale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span className="text-sm">Assistance 24/7</span>
              </li>
            </ul>
            <button className="w-full px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Choisir
            </button>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-4">Récapitulatif de votre profil</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-600">Situation :</span>{' '}
              <span className="font-medium">{formData.situation || 'Non renseigné'}</span>
            </div>
            {formData.coverageType && (
              <div>
                <span className="text-gray-600">Type de couverture :</span>{' '}
                <span className="font-medium">{formData.coverageType}</span>
              </div>
            )}
            {formData.companyStatus && (
              <div>
                <span className="text-gray-600">Statut entreprise :</span>{' '}
                <span className="font-medium">{formData.companyStatus}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
