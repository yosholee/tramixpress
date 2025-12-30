"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { content } from "@/lib/content"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: typeof content.en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLang = localStorage.getItem("language") as Language
    if (savedLang) {
      setLanguage(savedLang)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  // Prevent hydration mismatch by initially rendering null or a loading state if needed, 
  // but for simple text replacement, we can just default to 'en' content on server 
  // and update on client. However, to avoid flash, we'll return consistent state.
  // Ideally, use cookies for server-side lang, but localStorage is fine for this SPA-like behavior.
  
  const value = {
    language,
    setLanguage: handleSetLanguage,
    t: content[language],
  }

  if (!mounted) {
    return (
        <LanguageContext.Provider value={{ language: "en", setLanguage: () => {}, t: content.en }}>
            {children}
        </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
