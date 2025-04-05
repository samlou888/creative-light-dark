import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Globe, 
  Menu, 
  X 
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Language } from '@/translations';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { isCreativeMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        menuButtonRef.current && 
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Scroll to top function for logo click
  const scrollToTop = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle smooth scrolling for internal links with improved offset calculation
  const handleInternalLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const currentPath = location.pathname;
    
    // If we're on the home page and the target section exists
    if (currentPath === '/' && document.getElementById(targetId)) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Close the mobile menu if it's open
        setIsMenuOpen(false);
        
        // Let the browser handle the scrolling using CSS scroll-behavior
        targetElement.scrollIntoView();
      }
    }
  };

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  const renderMenuItems = () => {
    if (isCreativeMode) {
      return (
        <>
          <a 
            href="#creative-studio" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'creative-studio')}
          >
            {t('header.creative.studio')}
          </a>
          <a 
            href="#showreel" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'showreel')}
          >
            {t('header.creative.showreel')}
          </a>
          <a 
            href="#projects" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'projects')}
          >
            {t('header.creative.projects')}
          </a>
          <a 
            href="#kontakt" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'kontakt')}
          >
            {t('header.contact')}
          </a>
        </>
      );
    } else {
      // Standard business mode menu
      return (
        <>
          <a 
            href="#start" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'start')}
          >
            {t('header.home')}
          </a>
          <a 
            href="#automation" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'automation')}
          >
            {t('header.automation')}
          </a>
          <a 
            href="#academy" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'academy')}
          >
            {t('header.academy')}
          </a>
          <a 
            href="#projekte" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'projekte')}
          >
            {t('header.projects')}
          </a>
          <a 
            href="#kontakt" 
            className="font-medium hover:text-primary transition-colors duration-300 py-2"
            onClick={(e) => handleInternalLinkClick(e, 'kontakt')}
          >
            {t('header.contact')}
          </a>
        </>
      );
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo positioned at the far left */}
          <div className="flex-1">
            <a 
              href="/" 
              onClick={scrollToTop} 
              className="text-2xl font-bold cursor-pointer"
            >
              <span className="text-primary">AI</span>ventures
            </a>
          </div>
          
          {/* Right side with Creative Studio toggle and burger menu */}
          <div className="flex items-center space-x-6">
            {/* Creative Studio toggle - now on the right before burger */}
            <ThemeToggle />
            
            {/* Burger menu button - now at the far right */}
            <button 
              className="flex items-center justify-center w-8 h-8" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
              ref={menuButtonRef}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation Menu - right-aligned */}
        {isMenuOpen && (
          <div 
            ref={menuRef}
            className="absolute right-0 top-full bg-white/95 dark:bg-black/95 shadow-md animate-fade-in py-4 px-6 backdrop-blur-md w-64 md:w-72 rounded-bl-lg"
          >
            <nav className="flex flex-col space-y-4">
              {renderMenuItems()}
              
              {/* Language selector with globe icon and dropdown */}
              <div className="py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 font-medium hover:text-primary transition-colors duration-300 py-2">
                    <Globe size={18} />
                    <span className="text-sm">{t(`language.${language}`)}</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="bg-background/95 backdrop-blur-sm">
                    <DropdownMenuItem onClick={() => handleLanguageChange('de')}>
                      {t('language.de')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
                      {t('language.en')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleLanguageChange('fr')}>
                      {t('language.fr')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
