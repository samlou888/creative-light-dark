
import React, { useEffect, useState } from 'react';
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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle smooth scrolling for internal links with offset
  const handleInternalLinkClick = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const currentPath = location.pathname;
    
    // If we're on the home page and the target section exists
    if (currentPath === '/' && document.getElementById(targetId)) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Get header height for offset calculation
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        
        // Calculate the element's position with different offsets based on section
        let offsetAdjustment = 200; // Default offset
        
        // Apply specific offset for showcase section
        if (targetId === 'showcase') {
          offsetAdjustment = 20; // Minimal offset for showcase to show everything including button
        }
        
        // Apply specific offset for services section to match the uploaded image
        if (targetId === 'services') {
          offsetAdjustment = -100; // Negative offset to position the view much lower
        }
        
        // Apply specific offset for contact section
        if (targetId === 'contact') {
          offsetAdjustment = 20; // Small offset for contact section to ensure the form is fully visible
        }
        
        // Calculate the element's position with offset
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - offsetAdjustment;
        
        // Close the mobile menu if it's open
        setIsMenuOpen(false);
        
        // Scroll to the element with offset
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Add smooth scrolling behavior to document
  useEffect(() => {
    // Add smooth scrolling to the entire document
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      // Clean up when component unmounts
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo positioned at the far left */}
          <div className="flex-1">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-primary">AI</span>ventures
            </Link>
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
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation Menu - slide down when menu is open, for both mobile and desktop */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-white/95 dark:bg-black/95 shadow-md animate-fade-in py-4 px-6 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {/* Business Mode Navigation */}
              {!isCreativeMode && (
                <>
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
                    href="#about" 
                    className="font-medium hover:text-primary transition-colors duration-300 py-2"
                    onClick={(e) => handleInternalLinkClick(e, 'about')}
                  >
                    {t('header.about')}
                  </a>
                </>
              )}
              
              {/* Creative Mode Navigation */}
              {isCreativeMode && (
                <>
                  <a 
                    href="#services" 
                    className="font-medium hover:text-primary transition-colors duration-300 py-2"
                    onClick={(e) => handleInternalLinkClick(e, 'services')}
                  >
                    {t('header.services')}
                  </a>
                  <a 
                    href="#showcase" 
                    className="font-medium hover:text-primary transition-colors duration-300 py-2"
                    onClick={(e) => handleInternalLinkClick(e, 'showcase')}
                  >
                    {t('header.projects')}
                  </a>
                </>
              )}
              
              <a 
                href="#contact" 
                className="font-medium hover:text-primary transition-colors duration-300 py-2"
                onClick={(e) => handleInternalLinkClick(e, 'contact')}
              >
                {t('header.contact')}
              </a>
              
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
