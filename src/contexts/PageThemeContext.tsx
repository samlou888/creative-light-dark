
import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

type ThemeMode = 'automation' | 'creative' | 'academy';

type PageThemeContextType = {
  pageTheme: ThemeMode;
  setPageTheme: (theme: ThemeMode) => void;
};

const PageThemeContext = createContext<PageThemeContextType | undefined>(undefined);

export const PageThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [pageTheme, setPageTheme] = useState<ThemeMode>(() => {
    if (location.pathname.includes('creative-studio')) return 'creative';
    if (location.pathname.includes('academy')) return 'academy';
    return 'automation';
  });

  return (
    <PageThemeContext.Provider value={{ pageTheme, setPageTheme }}>
      {children}
    </PageThemeContext.Provider>
  );
};

export const usePageTheme = () => {
  const context = useContext(PageThemeContext);
  if (!context) {
    throw new Error('usePageTheme must be used within a PageThemeProvider');
  }
  return context;
};
