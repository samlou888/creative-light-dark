
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages: {code: Language, label: string}[] = [
    { code: 'de', label: 'Deutsch' },
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background">
        {languages.map((lang) => (
          <DropdownMenuItem 
            key={lang.code}
            className={`cursor-pointer ${language === lang.code ? 'font-bold' : ''}`}
            onClick={() => setLanguage(lang.code)}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
