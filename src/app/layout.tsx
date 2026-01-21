import type { Metadata } from "next";
import "./globals.css";
import { FormProvider } from "@/contexts/FormContext";

export const metadata: Metadata = {
  title: "Novéa Simulateur - Mutuelle Santé",
  description: "Simulateur de mutuelle santé Novéa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <FormProvider>
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
