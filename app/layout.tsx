import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TramiXpress - Envíos Rápidos y Seguros a Cuba",
  description: "Servicio de envíos a Cuba, recargas Cubacel, pasaportes y viajes. Entregas rápidas y seguras. Ubicados en 1201 9th ST W, Bradenton, FL.",
  keywords: ["envios a cuba", "shipping to cuba", "bradenton", "florida", "recargas cubacel", "tramites", "pasaportes", "paqueteria"],
};

import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import { Providers } from "@/components/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <LanguageProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}
