
import React, { createContext, useContext, useState } from 'react';

type PageTheme = 'default' | 'dark' | 'light';

type PageThemeContextType = {
  pageTheme: PageTheme;
  setPageTheme: (theme: PageTheme) => void;
};

const PageThemeContext = createContext<PageThemeContextType | undefined>(undefined);

export const PageThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [pageTheme, setPageTheme] = useState<PageTheme>('default');

  return (
    <PageThemeContext.Provider value={{ pageTheme, setPageTheme }}>
      {children}
    </PageThemeContext.Provider>
  );
};

export const usePageTheme = () => {
  const context = useContext(PageThemeContext);
  if (context === undefined) {
    throw new Error('usePageTheme must be used within a PageThemeProvider');
  }
  return context;
};
