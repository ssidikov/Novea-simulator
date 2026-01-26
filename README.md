# Novéa Simulateur

A modern health insurance (mutuelle) simulator built with Next.js, TypeScript, and TailwindCSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                   # Pages de l'application (App Router)
│   ├── layout.tsx        # Root layout avec fonts
│   ├── page.tsx          # Page principale
│   ├── company-status/   # Statut de l'entreprise
│   ├── coverage-type/    # Type de couverture
│   ├── dirigeant/        # Parcours dirigeant
│   ├── employee-count/   # Nombre d'employés
│   ├── legal-form/       # Formulaires juridiques
│   ├── retraite-indtpt/  # Parcours retraité/indépendant
│   ├── salary-employees/ # Parcours salariés
│   ├── other-situations/ # Autres situations
│   └── globals.css       # Styles globaux et Tailwind
├── components/           # Composants réutilisables
│   ├── Icons.tsx        # Composants d'icônes
│   └── OptionCard.tsx   # Carte d'option standard
├── contexts/            # Contextes React
│   └── FormContext.tsx  # État global du formulaire
└── utils/               # Utilitaires
    └── navigationFlow.ts # Logique de navigation
```

## 🎨 Design

The simulator follows the Figma design specifications with:

- Dark blue primary theme (#0a253a)
- Gradient background effects
- Custom fonts: Poppins and DM Sans
- Responsive grid layouts
- Smooth hover transitions

## 🛠️ Built With

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS framework
- **React 19** - UI library

## 📝 Features

- Multi-step form simulator
- 6 situation options (first page)
- 3 coverage options for dirigeant (second page)
- Smooth navigation between pages
- Responsive design for all screen sizes
- Accessible UI components

## 🔧 Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

ISC
