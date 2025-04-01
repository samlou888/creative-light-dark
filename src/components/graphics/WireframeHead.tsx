
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { isCreativeMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  // Animation variants für smooth hover/float effect
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        className={`w-full h-full ${isCreativeMode ? 'accent-glow' : ''}`}
        initial="initial"
        animate="animate"
        variants={floatingAnimation}
      >
        <img 
          src="/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png"
          alt="AI Wireframe Head" 
          className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 object-contain
            ${isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'}
            ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
