
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { isCreativeMode } = useTheme();

  return (
    <div className={`relative ${className} ${isCreativeMode ? 'accent-glow' : ''}`}>
      <img 
        src="/lovable-uploads/13e23013-a27c-4d80-992a-da4c0426956e.png" 
        alt="AI Wireframe Head" 
        className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 ${
          isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'
        }`}
      />
    </div>
  );
};

export default WireframeHead;
