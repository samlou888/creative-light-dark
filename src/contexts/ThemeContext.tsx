
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

type ThemeMode = 'automation' | 'creative' | 'academy';

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isCreativeMode: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode as ThemeMode) || 'automation';
  });

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  useEffect(() => {
    // Clean up all class names first
    document.documentElement.classList.remove('mode-automation', 'mode-creative', 'mode-academy', 'dark');
    document.body.classList.remove('creative-mode');
    
    // Add mode-specific class
    document.documentElement.classList.add(`mode-${mode}`);
    
    // Handle dark mode specifically for creative mode
    if (mode === 'creative') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('creative-mode');
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
