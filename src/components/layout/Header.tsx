import React, { useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, Palette, GraduationCap, Globe } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = memo(() => {
  const { mode, setMode } = useTheme();
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const handleInternalLinkClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const currentPath = location.pathname;
    
    if (currentPath === '/' && document.getElementById(targetId)) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        
        let offsetAdjustment = 200;
        
        if (targetId === 'showcase') {
          offsetAdjustment = 20;
        }
        
        if (targetId === 'services') {
          offsetAdjustment = -100;
        }
        
        if (targetId === 'contact') {
          offsetAdjustment = 20;
        }
        
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - offsetAdjustment;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location.pathname]);

  const handleModeChange = useCallback((newMode: 'automation' | 'creative' | 'academy') => {
    setMode(newMode);
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [setMode]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleLanguage = (newLanguage: 'de' | 'en' | 'fr') => {
    if (newLanguage === 'fr') {
      return;
    }
    
    setLanguage(newLanguage as 'de' | 'en');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            onClick={handleLogoClick} 
            className="text-2xl font-bold"
          >
            <span className="text-primary">AI</span>ventures
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleModeChange('automation')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  mode === 'automation' 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/5'
                }`}
              >
                <Zap className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleModeChange('creative')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  mode === 'creative' 
                    ? 'bg-primary/10 text-primary dark:text-[#00FF66]' 
                    : 'hover:bg-primary/5'
                }`}
              >
                <Palette className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => handleModeChange('academy')}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  mode === 'academy' 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/5'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
              </button>
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
              className="hidden md:inline-flex items-center justify-center w-40 h-10 bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)] rounded-full font-medium"
            >
              {language === 'en'
                ? (mode === 'creative' ? 'Start Project' : mode === 'academy' ? 'Book Course' : 'Book Call')
                : (mode === 'creative' ? 'Projekt starten' : mode === 'academy' ? 'Kurs buchen' : 'Termin buchen')
              }
            </a>

            <div className="flex items-center">
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    className={`w-9 h-9 flex items-center justify-center rounded-lg ${
                      language === 'en' || location.pathname.includes('/fr')
                        ? 'bg-primary/10 text-primary' 
                        : 'hover:bg-primary/5'
                    }`}
                    aria-label="Change language"
                  >
                    <Globe className="w-5 h-5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-[120px] p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md" 
                  align="end" 
                  sideOffset={8}
                  style={{ 
                    position: 'absolute',
                    zIndex: 100,
                    right: 0,
                    transformOrigin: 'top right'
                  }}
                  avoidCollisions={false}
                >
                  <div className="flex flex-col w-full">
                    <button 
                      onClick={() => toggleLanguage('de')}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                    >
                      <img 
                        src="/lovable-uploads/bec88d6e-64d4-4eae-a164-c5f224bc9b7d.png" 
                        alt="Deutsch"
                        className="w-4 h-4 rounded"
                        loading="lazy"
                      />
                      <span className="text-sm">Deutsch</span>
                    </button>
                    <button 
                      onClick={() => toggleLanguage('en')}
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                    >
                      <img 
                        src="/lovable-uploads/8c881562-6cd8-417b-a191-57ec5a81a40f.png" 
                        alt="English"
                        className="w-4 h-4 rounded"
                        loading="lazy"
                      />
                      <span className="text-sm">English</span>
                    </button>
                    <Link 
                      to="/fr" 
                      className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <img 
                        src="/lovable-uploads/d3886c5c-7be7-4725-93b3-88ef4fcc4e62.png" 
                        alt="Français"
                        className="w-4 h-4 rounded"
                        loading="lazy"
                      />
                      <span className="text-sm">Français</span>
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
