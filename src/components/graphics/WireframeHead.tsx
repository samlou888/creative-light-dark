
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { isCreativeMode } = useTheme();

  return (
    <div className={`relative ${className} ${isCreativeMode ? 'accent-glow' : ''}`}>
      <motion.div
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
        <img 
          src="/lovable-uploads/13e23013-a27c-4d80-992a-da4c0426956e.png" 
          alt="AI Wireframe Head" 
          className={`w-full h-auto max-w-lg mx-auto drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] transition-all duration-500 ${
            isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'
          }`}
          style={{
            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.3))'
          }}
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
