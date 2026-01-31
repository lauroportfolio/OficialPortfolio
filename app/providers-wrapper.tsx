"use client"

import { ThemeProvider } from "./provider";
import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
      forcedTheme="dark"
    >
      <LanguageProvider>
        <LanguageSwitcher />
        {children}
      </LanguageProvider>
    </ThemeProvider>
  )
}
