
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export type Language = 'de' | 'en' | 'fr';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translations: Record<string, Record<Language, string>>;
};

// Core translations that are used across multiple components
const translations = {
  'nav.bookAppointment': {
    de: 'Termin buchen',
    en: 'Book Appointment',
    fr: 'Prendre rendez-vous',
  },
  'nav.startProject': {
    de: 'Projekt starten',
    en: 'Start Project',
    fr: 'Démarrer un projet',
  },
  'nav.bookCourse': {
    de: 'Kurs buchen',
    en: 'Book Course',
    fr: 'Réserver un cours',
  },
  'footer.tagline': {
    de: 'Wir revolutionieren Unternehmen durch AI-Lösungen, die wirklich funktionieren.',
    en: 'We revolutionize businesses through AI solutions that really work.',
    fr: 'Nous révolutionnons les entreprises grâce à des solutions d\'IA qui fonctionnent réellement.',
  },
  'footer.services': {
    de: 'Services',
    en: 'Services',
    fr: 'Services',
  },
  'footer.studio': {
    de: 'Studio',
    en: 'Studio',
    fr: 'Studio',
  },
  'footer.automation': {
    de: 'Automation',
    en: 'Automation',
    fr: 'Automatisation',
  },
  'footer.academy': {
    de: 'Academy',
    en: 'Academy',
    fr: 'Académie',
  },
  'footer.contact': {
    de: 'Kontakt',
    en: 'Contact',
    fr: 'Contact',
  },
  'footer.legal': {
    de: 'Rechtliches',
    en: 'Legal',
    fr: 'Mentions légales',
  },
  'footer.imprint': {
    de: 'Impressum',
    en: 'Imprint',
    fr: 'Mentions légales',
  },
  'footer.privacy': {
    de: 'Datenschutz',
    en: 'Privacy Policy',
    fr: 'Politique de confidentialité',
  },
  'footer.terms': {
    de: 'AGB',
    en: 'Terms and Conditions',
    fr: 'Conditions générales',
  },
  'footer.copyright': {
    de: '© {year} AIventures. Alle Rechte vorbehalten.',
    en: '© {year} AIventures. All rights reserved.',
    fr: '© {year} AIventures. Tous droits réservés.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Extract language from URL path
const getLanguageFromPath = (path: string): Language => {
  if (path.startsWith('/en/')) return 'en';
  if (path.startsWith('/fr/')) return 'fr';
  return 'de'; // Default language
};

// Get path without language prefix
const getPathWithoutLanguage = (path: string): string => {
  if (path.startsWith('/en/') || path.startsWith('/fr/')) {
    return path.substring(3); // Remove language prefix
  }
  return path;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>(() => {
    // Check URL first
    const pathLanguage = getLanguageFromPath(location.pathname);
    if (pathLanguage) return pathLanguage;
    
    // Then check localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'de'; // Default to German
  });

  // Update language and navigate to the corresponding URL
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);

    // Update the URL with the new language
    const currentPath = getPathWithoutLanguage(location.pathname);
    const newPath = newLanguage === 'de' ? currentPath : `/${newLanguage}${currentPath}`;
    navigate(newPath);
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) return key;
    return translations[key][language] || key;
  };

  useEffect(() => {
    // Update the HTML lang attribute
    document.documentElement.setAttribute('lang', language);

    // Check if URL language matches the selected language
    const urlLanguage = getLanguageFromPath(location.pathname);
    if (urlLanguage !== language) {
      setLanguageState(urlLanguage);
    }
  }, [language, location.pathname]);

  const value = {
    language,
    setLanguage,
    t,
    translations
  };

  return (
    <LanguageContext.Provider value={value}>
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
