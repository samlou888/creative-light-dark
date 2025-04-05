
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage, LanguageType } from '@/contexts/LanguageContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const { isCreativeMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const isMobile = useIsMobile();

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

  // Handle language change
  const handleLanguageChange = (value: string) => {
    setLanguage(value as LanguageType);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-10 py-3 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo positioned at the far left */}
          <div className="flex-shrink-0 mr-auto">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-primary">AI</span>ventures
            </Link>
          </div>
          
          {/* Navigation in the middle-left - hidden on mobile */}
          <nav className="hidden md:flex items-center gap-10 ml-10">
            <a 
              href="#services" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'services')}
            >
              {t('navigation.services')}
            </a>
            <a 
              href="#showcase" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'showcase')}
            >
              {t('navigation.projects')}
            </a>
            <a 
              href="#contact" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
            >
              {t('navigation.contact')}
            </a>
          </nav>
          
          {/* Right side controls with better spacing for mobile */}
          <div className={`flex items-center ${isMobile ? 'gap-4' : 'gap-8'}`}>
            {/* Creative Studio toggle */}
            <div className={isMobile ? 'mx-2' : ''}>
              <ThemeToggle />
            </div>
            
            {/* Language selector on the far right */}
            <div className={isMobile ? 'ml-2' : ''}>
              <Select value={language} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-auto bg-transparent border-none focus:ring-0 px-2">
                  <Globe size={18} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="de">Deutsch</SelectItem>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">Français</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* CTA button - hidden on mobile */}
            <a 
              href="#contact" 
              className={`hidden md:block ${
                isCreativeMode 
                ? 'bg-primary text-white neon-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]' 
                : 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]'
              } px-5 py-2 rounded-full font-medium transition-all`}
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
            >
              {isCreativeMode ? t('hero.creative.primaryButton') : t('hero.standard.primaryButton')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
