
import React, { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { isCreativeMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Short delay to trigger the animation after component mount
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className} ${isCreativeMode ? 'accent-glow' : ''}`}>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
        transition={{ 
          duration: 0.7, 
          ease: "easeOut",
          opacity: { duration: 0.8 },
          y: { duration: 0.5 }
        }}
        className="relative z-10"
      >
        <motion.img 
          src="/lovable-uploads/13e23013-a27c-4d80-992a-da4c0426956e.png" 
          alt="AI Wireframe Head" 
          className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 ${
            isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'
          }`}
          animate={{ 
            scale: [1, 1.02, 1],
            y: [0, -5, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6, 
            ease: "easeInOut" 
          }}
          style={{ 
            filter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.25))",
            WebkitFilter: "drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.25))"
          }}
        />
      </motion.div>
      
      {/* Glow effect behind the head */}
      {isCreativeMode && (
        <div className="absolute inset-0 z-0 blur-3xl opacity-20 bg-gradient-to-r from-purple-600 via-blue-400 to-cyan-300 rounded-full transform scale-75 translate-y-10"></div>
      )}
    </div>
  );
};

export default WireframeHead;
