
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

type ThemeMode = 'automation' | 'creative' | 'academy' | 'blue';

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isCreativeMode: boolean; // Keep for backwards compatibility during transition
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Try to get stored preference from localStorage or default to automation
  const [mode, setMode] = useState<ThemeMode>(() => {
    const savedMode = localStorage.getItem('themeMode');
    return (savedMode as ThemeMode) || 'automation';
  });

  // Save mode preference to localStorage
  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  // This effect handles the document classes
  useEffect(() => {
    // Remove all mode classes first
    document.documentElement.classList.remove('mode-automation', 'mode-creative', 'mode-academy', 'mode-blue');
    document.body.classList.remove('creative-mode', 'blue-mode');
    
    // Add new mode class
    document.documentElement.classList.add(`mode-${mode}`);
    
    // Handle special modes
    if (mode === 'creative' || mode === 'blue') {
      document.documentElement.classList.add('dark');
      
      if (mode === 'creative') {
        document.body.classList.add('creative-mode');
      } else if (mode === 'blue') {
        document.body.classList.add('blue-mode');
      }
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  // Provide isCreativeMode for backward compatibility
  const isCreativeMode = mode === 'creative';
  
  // Create a memoized context value to prevent unnecessary rerenders
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
