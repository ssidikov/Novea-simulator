import { FormData } from '@/contexts/FormContext'

/**
 * Централизованная логика навигации для всех веток симулятора
 * Определяет следующий маршрут на основе текущего пути и данных формы
 */
export function getNextRoute(currentPath: string, formData: FormData): string {
  // ========== ВЕТКА 1: DIRIGEANT ==========
  if (formData.situation === 'dirigeant') {
    if (currentPath === '/') {
      return '/coverage-type'
    }

    if (currentPath === '/coverage-type') {
      if (
        formData.coverageType === 'dirigeant-seulement' ||
        formData.coverageType === 'dirigeant-salarie'
      ) {
        return '/company-status'
      }
      if (formData.coverageType === 'salarie-seulement') {
        return '/salary-employees/count'
      }
    }

    if (currentPath === '/company-status') {
      // SAS/SASU ветка
      if (formData.companyStatus === 'SAS/SASU') {
        return '/legal-form/sas-sasu'
      }
      // SARL ветка
      if (formData.companyStatus === 'SARL') {
        return '/legal-form/sarl'
      }
      // SA ветка
      if (formData.companyStatus === 'SA') {
        return '/legal-form/sa'
      }
      // EURL ветка
      if (formData.companyStatus === 'EURL') {
        return '/legal-form/eurl'
      }
      // SCEA/GEAC ветка
      if (formData.companyStatus === 'SCEA/GEAC') {
        return '/legal-form/scea-geac'
      }
      // Association ветка
      if (formData.companyStatus === 'association') {
        return '/legal-form/association'
      }
      // Autre ветка
      if (formData.companyStatus === 'autre') {
        return '/legal-form/autre'
      }
    }

    // SAS/SASU подветка
    if (currentPath === '/legal-form/sas-sasu') {
      if (formData.sasSeulOuPlusieur === 'seul') {
        return '/legal-form/seul-ou-plusieurs/remuneration'
      }
      if (formData.sasSeulOuPlusieur === 'plusieurs') {
        return '/salary-employees/count'
      }
    }

    if (currentPath === '/legal-form/seul-ou-plusieurs/remuneration') {
      if (formData.remuneration === 'oui') {
        return '/legal-form/seul-ou-plusieurs/remuneration/result-tns'
      }
      // For 'non', go to offer setup
      return '/offer-setup/step2'
    }

    if (currentPath === '/legal-form/seul-ou-plusieurs/remuneration/result-tns') {
      return '/offer-setup/step1'
    }

    // SARL подветка
    if (currentPath === '/legal-form/sarl') {
      return '/legal-form/tns-question'
    }

    if (currentPath === '/legal-form/tns-question') {
      return '/legal-form/remuneration'
    }

    // SA подветка
    if (currentPath === '/legal-form/sa') {
      return '/legal-form/sa-seul-ou-plusieurs'
    }

    if (currentPath === '/legal-form/sa-seul-ou-plusieurs') {
      if (formData.saSeulOuPlusieur === 'seul') {
        return '/legal-form/sa-seul'
      }
      if (formData.saSeulOuPlusieur === 'plusieurs') {
        return '/legal-form/sa-plusieurs'
      }
    }

    if (currentPath === '/legal-form/sa-seul') {
      return '/offer-setup/step2'
    }

    if (currentPath === '/legal-form/sa-plusieurs') {
      return '/salary-employees/count'
    }

    // EURL подветка
    if (currentPath === '/legal-form/eurl') {
      return '/legal-form/eurl-gerant-salarie'
    }

    if (currentPath === '/legal-form/eurl-gerant-salarie') {
      if (formData.gerantSalarie === 'oui') {
        return '/salary-employees/count'
      }
      if (formData.gerantSalarie === 'non') {
        return '/legal-form/gerant-non-salarie'
      }
    }

    if (currentPath === '/legal-form/gerant-non-salarie') {
      return '/offer-setup/step2'
    }

    // SCEA/GEAC подветка
    if (currentPath === '/legal-form/scea-geac') {
      return '/salary-employees/count'
    }

    // Association подветка
    if (currentPath === '/legal-form/association') {
      return '/offer-setup/step2'
    }

    // Autre подветка
    if (currentPath === '/legal-form/autre') {
      return '/offer-setup/step2'
    }
  }

  // ========== ВЕТКА 2: ENTREPRISE ==========
  if (formData.situation === 'entreprise') {
    if (currentPath === '/') {
      return '/employee-count'
    }

    if (currentPath === '/employee-count') {
      return '/salary-employees/count'
    }
  }

  // ========== ОБЩАЯ ЛОГИКА ДЛЯ SALARY EMPLOYEES ==========
  if (currentPath === '/salary-employees/count') {
    if (formData.employeeCount === '6-100') {
      return '/salary-employees/large-company'
    }
    if (formData.employeeCount === '100+') {
      return '/salary-employees/very-large'
    }
    // Для 1-5
    return '/offer-setup/step1'
  }

  if (
    currentPath === '/salary-employees/large-company' ||
    currentPath === '/salary-employees/very-large'
  ) {
    return '/salary-employees/convention-collective'
  }

  if (currentPath === '/salary-employees/convention-collective') {
    return '/salary-employees/existing-contract'
  }

  if (currentPath === '/salary-employees/existing-contract') {
    return '/salary-employees/situation-details'
  }

  if (currentPath === '/salary-employees/situation-details') {
    return '/salary-employees/health-offer'
  }

  if (currentPath === '/salary-employees/health-offer') {
    return '/offer-setup/step1'
  }

  // ========== ВЕТКА 3: RETRAITÉ / INDTPT ==========
  if (formData.situation === 'retraite' || formData.situation === 'indtpt') {
    if (currentPath === '/') {
      return '/retraite-indtpt/age'
    }

    if (currentPath === '/retraite-indtpt/age') {
      return '/retraite-indtpt/social-status'
    }

    if (currentPath === '/retraite-indtpt/social-status') {
      return '/retraite-indtpt/birth-date'
    }

    if (currentPath === '/retraite-indtpt/birth-date') {
      return '/offer-setup/step4'
    }

    if (currentPath === '/offer-setup/step4') {
      return '/offer-setup/step2'
    }
  }

  // ========== ВЕТКА 4: RH / COMPTABLE ==========
  if (formData.situation === 'rh' || formData.situation === 'comptable') {
    if (currentPath === '/') {
      return '/other-situations/rh-comptable'
    }

    if (currentPath === '/other-situations/rh-comptable') {
      return '/coverage-type'
    }

    // Дальше следует общая логика coverage-type
  }

  // ========== ВЕТКА 5: PARTI / ETUDIANT ==========
  if (formData.situation === 'parti' || formData.situation === 'etudiant') {
    if (currentPath === '/') {
      return '/other-situations/parti-etudiant'
    }
  }

  // ========== ВЕТКА 6: SALARIÉ ENTR ==========
  if (formData.situation === 'salarie-entr') {
    if (currentPath === '/') {
      return '/other-situations/salarie-entreprise'
    }
  }

  // ========== ОБЩИЕ ФИНАЛЬНЫЕ ШАГИ ==========
  if (currentPath === '/offer-setup/step1') {
    return '/offer-setup/step2'
  }

  if (currentPath === '/offer-setup/step2') {
    return '/offer-setup/step3'
  }

  if (currentPath === '/offer-setup/step3') {
    return '/offer'
  }

  if (currentPath === '/offer') {
    // Финальная страница - никуда не идем
    return '/offer'
  }

  // Fallback - если не нашли маршрут
  console.warn('No route found for:', { currentPath, formData })
  return '/'
}

/**
 * Получить предыдущий маршрут (для кнопки "Назад")
 */
export function getPreviousRoute(currentPath: string, formData: FormData): string {
  // Простая логика - можно расширить если нужно
  const pathSegments = currentPath.split('/').filter(Boolean)

  if (pathSegments.length === 0) return '/'
  if (pathSegments.length === 1) return '/'

  // Убираем последний сегмент
  return '/' + pathSegments.slice(0, -1).join('/')
}

/**
 * Маппинг Figma node-id к путям страниц
 */
export const FIGMA_NODE_MAPPING: Record<string, string> = {
  '2001-2804': '/coverage-type',
  '2001-2889': '/legal-form/sas-sasu',
  '2001-2984': '/legal-form/seul-ou-plusieurs',
  '2001-1770': '/legal-form/conjoint-salarie', // oui
  '2001-1910': '/legal-form/conjoint-salarie', // non
  '2001-2927': '/legal-form/sarl',
  '2001-2359': '/legal-form/tns-question',
  '2001-2415': '/legal-form/remuneration',
  '2001-2908': '/legal-form/sa',
  '2001-3328': '/legal-form/sa-seul', // SA seul
  '2001-3224': '/legal-form/sa-plusieurs', // SA plusieurs
  '2001-2042': '/legal-form/eurl',
  '2001-3276': '/legal-form/eurl-gerant-salarie', // EURL gérant salarié oui
  '2001-3379': '/legal-form/gerant-non-salarie', // EURL gérant non
  '2001-2057': '/legal-form/scea-geac',
  '2001-2240': '/legal-form/association',
  '2001-3430': '/legal-form/autre',
  '2001-2747': '/salary-employees/count',
  '2001-1658': '/salary-employees/large-company',
  '2001-1699': '/salary-employees/very-large',
  '2001-3172': '/employee-count',
  '2001-2870': '/retraite-indtpt/age',
  '2001-2785': '/retraite-indtpt/social-status',
  '2001-1980': '/retraite-indtpt/birth-date',
  '2001-2766': '/other-situations/rh-comptable',
  '2001-2456': '/other-situations/parti-etudiant',
  '2001-2501': '/other-situations/salarie-entreprise',
  '2001-2828': '/offer-setup/step1',
  '2001-2850': '/offer-setup/step2',
  '2001-2965': '/offer-setup/step3',
  '2001-2318': '/offer-setup/step4',
  '2001-2559': '/offer',
  '2001-2851': '/legal-form/sa-seul', // SA seul continuer (альтернативный node-id)
}
