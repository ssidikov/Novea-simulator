# Novea Simulateur - Project Setup

## Project Details

- **Type**: Next.js App Router with TypeScript
- **Styling**: TailwindCSS
- **Purpose**: Health insurance (mutuelle) simulator
- **Pages**: Multi-step form with dynamic navigation flow
- **Status**: ✅ Production ready

## Project Structure

```
src/
├── app/                   # Pages (App Router)
│   ├── company-status/   # Statut de l'entreprise
│   ├── coverage-type/    # Type de couverture
│   ├── dirigeant/        # Parcours dirigeant
│   ├── employee-count/   # Nombre d'employés
│   ├── legal-form/       # Formulaires juridiques
│   ├── retraite-indtpt/  # Parcours retraité
│   ├── salary-employees/ # Parcours salariés
│   └── other-situations/ # Autres situations
├── components/           # Reusable components
│   ├── Icons.tsx        # Icon components
│   └── OptionCard.tsx   # Standard option card
├── contexts/            # React contexts
│   └── FormContext.tsx  # Global form state
└── utils/               # Utilities
    └── navigationFlow.ts # Navigation logic
```

## Key Features

- ✅ Multi-step form with dynamic routing
- ✅ Context API for state management
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Custom fonts (Poppins, DM Sans)
- ✅ Reusable, optimized components
- ✅ TypeScript for type safety
- ✅ Tailwind CSS 4 for styling

## Development

```bash
npm run dev   # Start dev server
npm run build # Build for production
npm start     # Start production server
```
