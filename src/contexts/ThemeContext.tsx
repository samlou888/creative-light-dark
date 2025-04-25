
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type ThemeMode = 'automation' | 'creative' | 'academy';

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isCreativeMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('automation');
  const location = useLocation();

  // Update mode based on current route
  useEffect(() => {
    const path = location.pathname;
    console.log('Current path:', path);
    
    if (path === '/creative-studio') {
      setMode('creative');
    } else if (path === '/academy') {
      setMode('academy');
    } else {
      setMode('automation');
    }
  }, [location.pathname]);

  useEffect(() => {
    document.documentElement.classList.remove('mode-automation', 'mode-creative', 'mode-academy');
    document.body.classList.remove('creative-mode');
    
    document.documentElement.classList.add(`mode-${mode}`);
    
    // Apply dark mode only for creative mode
    if (mode === 'creative') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('creative-mode');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  const isCreativeMode = mode === 'creative';
  
  const contextValue = useMemo(() => ({
    mode,
    setMode,
    isCreativeMode
  }), [mode, isCreativeMode]);

  return (
    <ThemeContext.Provider value={contextValue}>
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
