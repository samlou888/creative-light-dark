
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { isCreativeMode, toggleCreativeMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className={`text-sm font-medium ${isCreativeMode ? 'text-primary animate-pulse-glow' : ''}`}>
        Creative Studio
      </span>
      <Switch 
        checked={isCreativeMode} 
        onCheckedChange={toggleCreativeMode}
        className={isCreativeMode ? 'neon-glow' : ''}
      />
    </div>
  );
};

export default ThemeToggle;
