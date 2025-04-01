
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary">AI</span>ventures
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link to="/creative-studio" className="font-medium hover:text-primary transition-colors">
              {t('nav.studio')}
            </Link>
            <Link to="/automation-services" className="font-medium hover:text-primary transition-colors">
              {t('nav.automation')}
            </Link>
            <Link to="/academy" className="font-medium hover:text-primary transition-colors">
              {t('nav.academy')}
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <a 
              href="#contact" 
              className={`hidden md:block ${
                isCreativeMode 
                ? 'bg-primary text-white neon-glow' 
                : 'bg-primary text-white'
              } px-5 py-2 rounded-full font-medium transition-all`}
            >
              {isCreativeMode ? t('cta.creative') : t('cta.button')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
