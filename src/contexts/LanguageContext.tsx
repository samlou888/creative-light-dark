
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Language = 'de' | 'en' | 'fr' | 'it' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  switchLanguage: (newLanguage: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Default language is German
const DEFAULT_LANGUAGE: Language = 'de';

// Available languages
export const AVAILABLE_LANGUAGES: { code: Language; name: string; flag: string }[] = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

// Basic translations for demonstration
const translations: Record<Language, Record<string, string>> = {
  de: {
    'nav.studio': 'Studio',
    'nav.automation': 'Automation',
    'nav.academy': 'Academy',
    'cta.button': 'Termin buchen',
    'cta.creative': 'Projekt starten',
    'footer.rights': 'Alle Rechte vorbehalten.',
    // Add more translations as needed
  },
  en: {
    'nav.studio': 'Studio',
    'nav.automation': 'Automation',
    'nav.academy': 'Academy',
    'cta.button': 'Book Appointment',
    'cta.creative': 'Start Project',
    'footer.rights': 'All rights reserved.',
    // Add more translations as needed
  },
  fr: {
    'nav.studio': 'Studio',
    'nav.automation': 'Automatisation',
    'nav.academy': 'Académie',
    'cta.button': 'Prendre Rendez-vous',
    'cta.creative': 'Démarrer un Projet',
    'footer.rights': 'Tous droits réservés.',
    // Add more translations as needed
  },
  it: {
    'nav.studio': 'Studio',
    'nav.automation': 'Automazione',
    'nav.academy': 'Accademia',
    'cta.button': 'Prenota Appuntamento',
    'cta.creative': 'Inizia Progetto',
    'footer.rights': 'Tutti i diritti riservati.',
    // Add more translations as needed
  },
  es: {
    'nav.studio': 'Estudio',
    'nav.automation': 'Automatización',
    'nav.academy': 'Academia',
    'cta.button': 'Reservar Cita',
    'cta.creative': 'Iniciar Proyecto',
    'footer.rights': 'Todos los derechos reservados.',
    // Add more translations as needed
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get language from URL or localStorage or use default
  const getInitialLanguage = (): Language => {
    // Check if URL starts with a language code
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const firstSegment = pathSegments[0];
    
    if (firstSegment && AVAILABLE_LANGUAGES.some(lang => lang.code === firstSegment)) {
      return firstSegment as Language;
    }
    
    // Check localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && AVAILABLE_LANGUAGES.some(lang => lang.code === savedLanguage)) {
      return savedLanguage as Language;
    }
    
    return DEFAULT_LANGUAGE;
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  // Save the language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Helper function to get translated strings
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Function to switch language and update URL
  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    
    // Update URL
    if (newLanguage === DEFAULT_LANGUAGE) {
      // If default language, remove language prefix from URL
      const pathWithoutLang = location.pathname.replace(/^\/(de|en|fr|it|es)/, '');
      navigate(pathWithoutLang || '/');
    } else {
      // Update URL with new language prefix
      const currentPath = location.pathname;
      const langCodePattern = /^\/(de|en|fr|it|es)/;
      
      if (langCodePattern.test(currentPath)) {
        // Replace existing language code
        navigate(currentPath.replace(langCodePattern, `/${newLanguage}`));
      } else {
        // Add language code to path
        navigate(`/${newLanguage}${currentPath}`);
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
