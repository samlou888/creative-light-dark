
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

    // Remove all theme classes first
    document.documentElement.classList.remove('mode-automation', 'mode-creative', 'mode-academy');
    document.documentElement.classList.remove('dark');
    
    // Add new theme classes
    document.documentElement.classList.add(`mode-${mode}`);
    
    // Add dark class for creative mode
    if (mode === 'creative') {
      document.documentElement.classList.add('dark');
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
