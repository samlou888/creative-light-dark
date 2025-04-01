
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { isCreativeMode } = useTheme();
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure animation runs after component mount
    const timer = setTimeout(() => {
      setHasLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for the floating effect
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial="initial"
        animate={hasLoaded ? "animate" : "initial"}
        variants={floatingAnimation}
        className={`relative transition-all duration-500 ${
          isCreativeMode ? 'accent-glow' : ''
        }`}
      >
        <img 
          src="/lovable-uploads/13e23013-a27c-4d80-992a-da4c0426956e.png" 
          alt="AI Wireframe Head" 
          className={`w-full h-auto max-w-lg mx-auto transition-all duration-500
            ${isCreativeMode 
              ? 'filter brightness-110 saturate-150 drop-shadow-[0_0_15px_rgba(56,182,255,0.6)]' 
              : 'filter brightness-100 drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)]'
            }
            mix-blend-screen`}
          style={{
            filter: isCreativeMode 
              ? 'drop-shadow(0 0 8px rgba(56, 182, 255, 0.6))' 
              : 'none'
          }}
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
