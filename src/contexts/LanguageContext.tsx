
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'de' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check if we have a stored language preference
    const storedLanguage = localStorage.getItem('preferred-language');
    if (storedLanguage === 'en' || storedLanguage === 'fr' || storedLanguage === 'de') {
      return storedLanguage;
    }
    return 'de'; // Default language
  });

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('preferred-language', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
