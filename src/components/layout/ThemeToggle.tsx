
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { isCreativeMode, toggleCreativeMode } = useTheme();

  return (
    <button
      onClick={toggleCreativeMode}
      className={`px-4 py-2 rounded-full font-medium transition-all ${
        isCreativeMode 
          ? 'bg-black text-white border border-primary/50 hover:border-primary/80' 
          : 'bg-[#0a2641] text-white'
      }`}
    >
      {isCreativeMode ? 'Creative Studio' : 'Creative Studio'}
    </button>
  );
};

export default ThemeToggle;
