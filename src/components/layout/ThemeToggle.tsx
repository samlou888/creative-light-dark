
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isCreativeMode, toggleCreativeMode } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <motion.span 
        className={`text-sm font-medium transition-colors duration-300 ${isCreativeMode ? 'text-primary' : 'text-muted-foreground'}`}
        animate={{ 
          opacity: isCreativeMode ? 1 : 0.8,
          scale: isCreativeMode ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      >
        Creative Studio
      </motion.span>
      <Switch 
        checked={isCreativeMode} 
        onCheckedChange={toggleCreativeMode}
        className={isCreativeMode ? 'neon-glow' : ''}
      />
    </div>
  );
};

export default ThemeToggle;
