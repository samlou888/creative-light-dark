
import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, AVAILABLE_LANGUAGES } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useLanguage();
  const { isCreativeMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = AVAILABLE_LANGUAGES.find(lang => lang.code === language);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={`relative ${isCreativeMode ? 'hover:text-primary' : ''} focus:ring-0`}
          aria-label="Select language"
        >
          <Globe 
            className={`h-[1.2rem] w-[1.2rem] transition-all ${isOpen ? 'text-primary' : ''}`} 
          />
          <span className="sr-only">Switch language</span>
          <span className="absolute -bottom-1 -right-1 text-xs font-bold">
            {language.toUpperCase()}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {AVAILABLE_LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center gap-2 cursor-pointer ${
              lang.code === language ? 'bg-primary/10 text-primary font-medium' : ''
            }`}
            onClick={() => {
              switchLanguage(lang.code);
              setIsOpen(false);
            }}
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
