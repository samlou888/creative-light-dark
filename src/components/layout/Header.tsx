
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const { isCreativeMode } = useTheme();
  const location = useLocation();

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
        
        // Calculate the element's position with offset - significantly increased for better title visibility
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 200;
        
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="text-primary">AI</span>ventures
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <a 
              href="#studio" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'studio')}
            >
              Creative Studio
            </a>
            <a 
              href="#automation" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'automation')}
            >
              Automation
            </a>
            <a 
              href="#academy" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'academy')}
            >
              Academy
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a 
              href="#contact" 
              className={`hidden md:block ${
                isCreativeMode 
                ? 'bg-primary text-white neon-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]' 
                : 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]'
              } px-5 py-2 rounded-full font-medium transition-all`}
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
            >
              {isCreativeMode ? 'Projekt starten' : 'Termin buchen'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
