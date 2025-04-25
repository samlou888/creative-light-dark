import React, { useCallback, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Zap, Palette, GraduationCap, Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Header = memo(() => {
  const { mode, setMode } = useTheme();
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
    
    // Smooth scroll to top
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-3 transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-black/50 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link 
            to={location.pathname} 
            onClick={handleLogoClick} 
            className="text-2xl font-bold"
          >
            <span className="text-primary">AI</span>ventures
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => handleModeChange('automation')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  mode === 'automation' 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => handleModeChange('creative')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  mode === 'creative' 
                    ? 'bg-primary/10 text-primary dark:text-[#00FF66]' 
                    : 'hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Palette className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                onClick={() => handleModeChange('academy')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  mode === 'academy' 
                    ? 'bg-primary/10 text-primary' 
                    : 'hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GraduationCap className="w-5 h-5" />
              </motion.button>
            </div>
            
            <a 
              href="#contact" 
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
              className="hidden md:inline-flex items-center justify-center w-40 h-10 bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)] rounded-full font-medium"
            >
              {mode === 'creative' ? 'Projekt starten' : mode === 'academy' ? 'Kurs buchen' : 'Termin buchen'}
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.button
                  className="p-2 rounded-lg transition-all duration-300 hover:bg-primary/5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-5 h-5" />
                </motion.button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="w-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg"
              >
                <DropdownMenuGroup>
                  <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" asChild>
                    <Link to="/en" className="flex items-center justify-center">
                      <span role="img" aria-label="English">🇬🇧</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700" asChild>
                    <Link to="/fr" className="flex items-center justify-center">
                      <span role="img" aria-label="Français">🇫🇷</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
