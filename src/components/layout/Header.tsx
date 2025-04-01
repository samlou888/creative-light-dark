
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const { isCreativeMode } = useTheme();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 transition-all duration-300 ${
      isCreativeMode 
        ? 'backdrop-blur-md bg-black/90' 
        : 'backdrop-blur-md bg-white/90'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            {isCreativeMode ? 'AIventures' : 'AIventures'}
          </Link>
          
          <nav className="hidden md:flex items-center gap-10">
            <Link to="#studio" className="font-medium hover:text-primary transition-colors">
              {isCreativeMode ? 'Staduo' : 'Studio'} 
            </Link>
            <Link to="#automation" className="font-medium hover:text-primary transition-colors">
              {isCreativeMode ? 'Academi' : 'Automation'}
            </Link>
            <Link to="#academy" className="font-medium hover:text-primary transition-colors">
              {isCreativeMode ? 'Creative' : 'Academy'}
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
