
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations from '@/translations';

export type LanguageType = 'de' | 'en' | 'fr';

type LanguageContextType = {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageType>('de');

  // Load saved language preference from localStorage on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem('aiventures-language') as LanguageType;
    if (savedLanguage && ['de', 'en', 'fr'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('aiventures-language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    // Split the key by dots to access nested objects
    const keys = key.split('.');
    let value: any = translations[language];
    
    // Navigate through the nested keys
    for (const k of keys) {
      if (value === undefined || value === null) return key;
      value = value[k];
    }
    
    if (typeof value === 'string') {
      return value;
    }
    
    // If translation is not found or is not a string, return the key
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
