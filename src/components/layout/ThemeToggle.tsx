
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';
import { Sparkles } from 'lucide-react';

const ThemeToggle = () => {
  const { isCreativeMode, toggleCreativeMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <Sparkles 
        className={`h-4 w-4 transition-all duration-500 ${
          isCreativeMode 
            ? 'text-accent animate-pulse-glow' 
            : 'text-muted-foreground'
        }`} 
      />
      <span className={`text-sm font-medium transition-all duration-300 ${
        isCreativeMode 
          ? 'text-accent animate-pulse-glow' 
          : 'text-muted-foreground'
      }`}>
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
