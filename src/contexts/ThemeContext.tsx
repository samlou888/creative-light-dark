
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isCreativeMode: boolean;
  toggleCreativeMode: () => void;
  setCreativeMode: (value: boolean) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCreativeMode, setIsCreativeMode] = useState(false);

  const toggleCreativeMode = () => {
    setIsCreativeMode((prev) => !prev);
  };

  const setCreativeMode = (value: boolean) => {
    setIsCreativeMode(value);
  };

  useEffect(() => {
    // Check if we're on the Creative Studio page by URL
    const isCreativeStudioPage = window.location.pathname.includes('creative-studio');
    
    if (isCreativeMode || isCreativeStudioPage) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Add a creative-mode class to enable specific styling
    if (isCreativeMode) {
      document.documentElement.classList.add('creative-mode');
    } else {
      document.documentElement.classList.remove('creative-mode');
    }
  }, [isCreativeMode]);

  return (
    <ThemeContext.Provider value={{ isCreativeMode, toggleCreativeMode, setCreativeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
