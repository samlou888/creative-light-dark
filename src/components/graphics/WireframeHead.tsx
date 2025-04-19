
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { mode } = useTheme();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Define images for different modes
  const blueHeadImage = '/lovable-uploads/fd0b61b1-3eeb-4d28-849c-6df9ba65884c.png';
  const defaultHeadImage = '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
  
  // Select the appropriate image based on the current mode
  const imageSrc = mode === 'academy' ? blueHeadImage : defaultHeadImage;
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <img 
          src={imageSrc}
          alt="AI Head" 
          className={`w-full h-auto max-w-lg mx-auto object-contain ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => setIsLoaded(true)}
          onError={(e) => {
            console.error("Failed to load image:", e);
            if (mode === 'academy') {
              console.log("Falling back to default image for academy mode");
              (e.target as HTMLImageElement).src = defaultHeadImage;
            }
          }}
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
