# 🗺️ Точная логика навигации по Figma макетам

## 📍 Главная страница → Ветки

### **1️⃣ DIRIGEANT**

```
Quelle est votre situation ? (главная) → DIRIGEANT
  ↓
Qui souhaitez-vous couvrir ? (2001-2804: /coverage-type)
  ├─→ Dirigeant seulement ──┐
  ├─→ Dirigeant et salarié ─┤
  │                          ↓
  │      Quel est le statut de l'entreprise ? (/company-status)
  │         ├─→ SAS/SASU (2001-2889: /legal-form/sas-sasu)
  │         │    ↓
  │         │   Seul ou plusieurs ? (2001-2984: /legal-form/seul-ou-plusieurs)
  │         │    ├─→ Seul
  │         │    │    ↓
  │         │    │   Conjoint salarié ? (/legal-form/conjoint-salarie)
  │         │    │    ├─→ OUI (2001-1770) → Remuneration (2001-2415) → step2 (2001-2850)
  │         │    │    └─→ NON (2001-1910) → step2 (2001-2850)
  │         │    │
  │         │    └─→ Plusieurs → count (2001-2747: /salary-employees/count)
  │         │
  │         ├─→ SARL (2001-2927: /legal-form/sarl)
  │         │    ↓
  │         │   TNS ? (2001-2359: /legal-form/tns-question)
  │         │    ↓
  │         │   Remuneration (2001-2415: /legal-form/remuneration)
  │         │    ↓
  │         │   step2 (2001-2850)
  │         │
  │         ├─→ SA (2001-2908: /legal-form/sa)
  │         │    ↓
  │         │   Seul ou plusieurs ? (/legal-form/sa-seul-ou-plusieurs)
  │         │    ├─→ Seul (2001-3328: /legal-form/sa-seul)
  │         │    │    ↓
  │         │    │   step2 (2001-2851 или 2001-2850)
  │         │    │
  │         │    └─→ Plusieurs (2001-3224: /legal-form/sa-plusieurs)
  │         │         ↓
  │         │        count (2001-2747: /salary-employees/count)
  │         │
  │         ├─→ EURL (2001-2042: /legal-form/eurl)
  │         │    ↓
  │         │   Gérant salarié ? (2001-3276: /legal-form/eurl-gerant-salarie)
  │         │    ├─→ OUI → count (2001-2747: /salary-employees/count)
  │         │    └─→ NON (2001-3379: /legal-form/gerant-non-salarie) → step2 (2001-2850)
  │         │
  │         ├─→ SCEA/GEAC (2001-2057: /legal-form/scea-geac)
  │         │    ↓
  │         │   count (2001-2747: /salary-employees/count)
  │         │
  │         ├─→ Association (2001-2240: /legal-form/association)
  │         │    ↓
  │         │   step2 (2001-2850)
  │         │
  │         └─→ Autre (2001-3430: /legal-form/autre)
  │              ↓
  │             step2 (2001-2850)
  │
  └─→ Salariés seulement → count (2001-2747: /salary-employees/count)
```

### **2️⃣ ENTREPRISE**

```
Quelle est votre situation ? (главная) → ENTREPRISE
  ↓
(2001-3172: /employee-count)
  ↓
count (2001-2747: /salary-employees/count)
  ├─→ 1-5 → step1 (2001-2828)
  ├─→ 6-100 (2001-1658: /salary-employees/large-company) → step1 (2001-2828)
  └─→ 100+ (2001-1699: /salary-employees/very-large) → step1 (2001-2828)
```

### **3️⃣ RETRAITÉ / INDTPT**

```
Quelle est votre situation ? (главная) → RETRAITÉ или INDTPT
  ↓
Quel est votre âge ? (2001-2870: /retraite-indtpt/age)
  ↓
Statut social (2001-2785: /retraite-indtpt/social-status)
  ↓
Date de naissance (2001-1980: /retraite-indtpt/birth-date)
  ↓
step4 (2001-2318: /offer-setup/step4)
  ↓
step2 (2001-2850: /offer-setup/step2)
```

### **4️⃣ RH / COMPTABLE**

```
Quelle est votre situation ? (главная) → RH или COMPTABLE
  ↓
Info entreprise (2001-2766: /other-situations/rh-comptable)
  ↓
Qui souhaitez-vous couvrir ? (2001-2804: /coverage-type)
  [далее как в ветке DIRIGEANT]
```

### **5️⃣ PARTICULIER / ÉTUDIANT**

```
Quelle est votre situation ? (главная) → PARTI или ETUDIANT
  ↓
(2001-2456: /other-situations/parti-etudiant) [КОНЕЧНАЯ СТРАНИЦА]
```

### **6️⃣ SALARIÉ D'ENTREPRISE**

```
Quelle est votre situation ? (главная) → SALARIÉ ENTR
  ↓
(2001-2501: /other-situations/salarie-entreprise) [КОНЕЧНАЯ СТРАНИЦА]
```

## 🎯 Общий финальный путь

Все ветки (кроме parti/etudiant и salarie-entr) проходят через:

```
... → step1 (2001-2828: /offer-setup/step1)
       ↓
      step2 (2001-2850: /offer-setup/step2)
       ↓
      step3 (2001-2965: /offer-setup/step3)
       ↓
      Votre Offre (2001-2559: /offer) [ФИНАЛ]
```

## ⚠️ Важные моменты

1. **node-id 2001-2804** = /coverage-type (это не следующее окно после выбора, а сама страница)
2. **node-id 2001-2747** = /salary-employees/count (используется в нескольких ветках)
3. **node-id 2001-2850** = /offer-setup/step2 (точка схождения многих веток)
4. **SA** имеет ДВЕ разные страницы после выбора seul/plusieurs:
   - seul → 2001-3328 (/legal-form/sa-seul)
   - plusieurs → 2001-3224 (/legal-form/sa-plusieurs)
5. **EURL** имеет отдельную страницу для вопроса о геранте:
   - 2001-2042 = info страница EURL
   - 2001-3276 = вопрос "Gérant salarié?"

## 📊 Структура директорий

```
src/app/
├── legal-form/
│   ├── sas-sasu/           ✅ 2001-2889
│   ├── seul-ou-plusieurs/  ✅ 2001-2984
│   ├── conjoint-salarie/   ✅ 2001-1770 / 2001-1910
│   ├── sarl/               ✅ 2001-2927
│   ├── tns-question/       ✅ 2001-2359
│   ├── remuneration/       ✅ 2001-2415
│   ├── sa/                 ✅ 2001-2908
│   ├── sa-seul-ou-plusieurs/ ✅
│   ├── sa-seul/            ✅ 2001-3328
│   ├── sa-plusieurs/       ✅ 2001-3224
│   ├── eurl/               ✅ 2001-2042
│   ├── eurl-gerant-salarie/ ✅ 2001-3276
│   ├── gerant-non-salarie/ ✅ 2001-3379
│   ├── scea-geac/          ✅ 2001-2057
│   ├── association/        ✅ 2001-2240
│   └── autre/              ✅ 2001-3430
└── [остальные директории]
```
