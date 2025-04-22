
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'automation' | 'creative' | 'academy';

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
    
    // Store the current mode in localStorage to persist between page refreshes
    localStorage.setItem('themeMode', mode);
    
    console.log(`Theme mode changed to: ${mode}`);
  }, [mode]);

  // Check localStorage for saved mode on initial load
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
    
    // Check for route-specific saved modes
    const pathname = window.location.pathname;
    if (pathname.includes('automation')) {
      const automationMode = localStorage.getItem('automation_page_mode') as ThemeMode | null;
      if (automationMode) {
        setMode(automationMode);
        return;
      }
    } else if (pathname.includes('creative')) {
      const creativeMode = localStorage.getItem('creative_page_mode') as ThemeMode | null;
      if (creativeMode) {
        setMode(creativeMode);
        return;
      }
    } else if (pathname.includes('academy')) {
      const academyMode = localStorage.getItem('academy_page_mode') as ThemeMode | null;
      if (academyMode) {
        setMode(academyMode);
        return;
      }
    }
    
    // Fall back to the globally saved mode
    if (savedMode && ['automation', 'creative', 'academy'].includes(savedMode)) {
      setMode(savedMode);
    }
  }, []);

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
