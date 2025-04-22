
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'automation' | 'creative' | 'academy';

type ThemeContextType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isCreativeMode: boolean; // Keep for backwards compatibility during transition
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('automation');

  // This effect handles the document classes
  useEffect(() => {
    // Remove all mode classes first
    document.documentElement.classList.remove('mode-automation', 'mode-creative', 'mode-academy');
    document.body.classList.remove('creative-mode');
    
    // Add new mode class
    document.documentElement.classList.add(`mode-${mode}`);
    
    // Handle dark mode for creative mode
    if (mode === 'creative') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('creative-mode');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  // Provide isCreativeMode for backward compatibility
  const isCreativeMode = mode === 'creative';

  return (
    <ThemeContext.Provider value={{ mode, setMode, isCreativeMode }}>
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
