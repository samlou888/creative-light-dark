
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { contactTexts } from './translations';

const QuickContact = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const t = contactTexts[language].form;

  return (
    <div className={`${
      mode === 'creative' 
        ? 'bg-primary/20 backdrop-blur-md' 
        : 'bg-primary/5'
    } p-5 md:p-6 flex flex-col justify-center`}>
      <h3 className="text-base font-bold mb-3">{t.contactTitle}</h3>
      
      <ul className="space-y-2">
        {t.benefits.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
              mode === 'creative' 
                ? 'bg-primary text-white' 
                : 'bg-primary/20 text-primary'
            }`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span className="text-sm">{item}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-4 pt-4 border-t border-primary/20">
        <p className="font-medium mb-1 text-sm">{t.quickContact}</p>
        <p className="text-muted-foreground text-sm">info@aiventures.de</p>
        <p className="text-muted-foreground text-sm">+49 123 4567890</p>
      </div>
    </div>
  );
};

export default QuickContact;
