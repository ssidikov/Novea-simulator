# 📊 Figma → Page Mapping Reference

Быстрая справочная таблица для всех страниц и их Figma node-id.

| Figma Node ID | Маршрут | Описание |
|--------------|---------|----------|
| `2001-2804` | `/coverage-type` | Qui souhaitez-vous couvrir ? |
| `2001-2889` | `/legal-form/sas-sasu` | SAS / SASU информация |
| `2001-2984` | `/legal-form/seul-ou-plusieurs` | Êtes-vous seul ou à plusieurs ? |
| `2001-1770` | `/legal-form/conjoint-salarie` | Conjoint salarié - OUI |
| `2001-1910` | `/legal-form/conjoint-salarie` | Conjoint salarié - NON |
| `2001-2927` | `/legal-form/sarl` | SARL информация |
| `2001-2359` | `/legal-form/tns-question` | Question TNS |
| `2001-2415` | `/legal-form/remuneration` | Quelle est votre rémunération ? |
| `2001-2908` | `/legal-form/sa` | SA информация |
| `2001-3328` | `/legal-form/sa-seul` | SA - SEUL (continuer) |
| `2001-3224` | `/legal-form/sa-plusieurs` | SA - PLUSIEURS |
| `2001-2042` | `/legal-form/eurl` | EURL информация |
| `2001-3276` | `/legal-form/eurl-gerant-salarie` | EURL - Gérant salarié ? (OUI) |
| `2001-3379` | `/legal-form/gerant-non-salarie` | EURL - Gérant NON salarié |
| `2001-2057` | `/legal-form/scea-geac` | SCEA / GEAC |
| `2001-2240` | `/legal-form/association` | Association |
| `2001-3430` | `/legal-form/autre` | Autre statut |
| `2001-2747` | `/salary-employees/count` | Combien de salariés ? |
| `2001-1658` | `/salary-employees/large-company` | 6-100 salariés |
| `2001-1699` | `/salary-employees/very-large` | 100+ salariés |
| `2001-3172` | `/employee-count` | Employee count (entreprise) |
| `2001-2870` | `/retraite-indtpt/age` | Quel est votre âge ? |
| `2001-2785` | `/retraite-indtpt/social-status` | Statut social |
| `2001-1980` | `/retraite-indtpt/birth-date` | Date de naissance |
| `2001-2766` | `/other-situations/rh-comptable` | RH / Comptable info |
| `2001-2456` | `/other-situations/parti-etudiant` | Particulier / Étudiant |
| `2001-2501` | `/other-situations/salarie-entreprise` | Salarié d'entreprise |
| `2001-2828` | `/offer-setup/step1` | Configuration étape 1 |
| `2001-2850` | `/offer-setup/step2` | Configuration étape 2 |
| `2001-2851` | `/offer-setup/step2` | Alternative route |
| `2001-2965` | `/offer-setup/step3` | Configuration étape 3 |
| `2001-2318` | `/offer-setup/step4` | Configuration étape 4 |
| `2001-2559` | `/offer` | Votre Offre (finale) |

## 🎨 Как использовать для получения дизайна

```bash
# Пример для получения дизайна coverage-type
mcp_figma_get_design_context --nodeId "2001-2804" --fileKey "42T3TGX4hTv1J94sAka73j"
```

## 📝 Примечания

- Некоторые node-id используются для разных состояний одной страницы (например, 2001-1770 и 2001-1910 для conjoint-salarie)
- Все node-id можно найти в `src/utils/navigationFlow.ts` в константе `FIGMA_NODE_MAPPING`
- File Key: `42T3TGX4hTv1J94sAka73j`
- Ссылка на Figma: https://www.figma.com/design/42T3TGX4hTv1J94sAka73j/Novea-MAQUETTE--Copy-

## ✅ Статус имплементации UI

| Статус | Страниц | Описание |
|--------|---------|----------|
| ✅ Готово | 3 | page.tsx, coverage-type, company-status |
| 🎨 Базовая структура | 25+ | Все остальные страницы |
| ⏳ Ожидание Figma | 25+ | Нужно получить точный UI |
