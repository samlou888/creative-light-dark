
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Zap, Palette, GraduationCap } from 'lucide-react';

const Header = () => {
  const { mode, setMode } = useTheme();
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

  // Add smooth scrolling effect
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
              href="#services" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'services')}
            >
              Services
            </a>
            <a 
              href="#showcase" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'showcase')}
            >
              Projekte
            </a>
            <a 
              href="#contact" 
              className="font-medium hover:text-primary transition-colors duration-300"
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
            >
              Kontakt
            </a>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <motion.button
                onClick={() => setMode('automation')}
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
                onClick={() => setMode('creative')}
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
                onClick={() => setMode('academy')}
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
              className={`hidden md:block ${
                mode === 'creative' 
                  ? 'bg-primary text-white neon-glow transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]' 
                  : 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]'
              } px-5 py-2 rounded-full font-medium transition-all`}
              onClick={(e) => handleInternalLinkClick(e, 'contact')}
            >
              {mode === 'creative' ? 'Projekt starten' : mode === 'academy' ? 'Kurs buchen' : 'Termin buchen'}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
