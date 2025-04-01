
import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeContextType = {
  isCreativeMode: boolean;
  toggleCreativeMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isCreativeMode, setIsCreativeMode] = useState(false);

  const toggleCreativeMode = () => {
    setIsCreativeMode((prev) => !prev);
  };

  useEffect(() => {
    if (isCreativeMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('creative-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('creative-mode');
    }
  }, [isCreativeMode]);

  return (
    <ThemeContext.Provider value={{ isCreativeMode, toggleCreativeMode }}>
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
