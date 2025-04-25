
import React, { useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import NavButtons from './navigation/NavButtons';
import CTAButton from './navigation/CTAButton';

const Header = memo(() => {
  const { mode } = useTheme();
  const location = useLocation();

  const handleInternalLinkClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const currentPath = location.pathname;
    
    if (currentPath === '/' && document.getElementById(targetId)) {
      event.preventDefault();
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        let offsetAdjustment = 200;
        
        if (targetId === 'showcase') offsetAdjustment = 20;
        if (targetId === 'services') offsetAdjustment = -100;
        if (targetId === 'contact') offsetAdjustment = 20;
        
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - offsetAdjustment;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [location.pathname]);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
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
            <NavButtons />
            <CTAButton 
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
              mode={mode}
            />
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
