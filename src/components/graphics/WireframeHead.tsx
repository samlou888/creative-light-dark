
import React, { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { mode } = useTheme();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  
  // Use the newly uploaded blue head image for academy mode
  const blueHeadImage = '/lovable-uploads/064810f6-b99a-43a7-bdec-d8be5bd8df15.png';
  const defaultHeadImage = '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
  
  // Select the appropriate image based on the current mode
  const imageSrc = mode === 'academy' ? blueHeadImage : defaultHeadImage;
  
  useEffect(() => {
    // Force reload the image when mode changes
    setIsLoaded(false);
    
    // Log for debugging
    console.log("Current mode:", mode);
    console.log("Using image:", imageSrc);
  }, [mode, imageSrc]);

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
        key={mode} // Add key to force remount when mode changes
      >
        <img 
          src={imageSrc}
          alt="AI Head" 
          className={`w-full h-auto max-w-lg mx-auto object-contain ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => {
            console.log("Image loaded successfully:", imageSrc);
            setIsLoaded(true);
          }}
          onError={(e) => {
            console.error("Failed to load image:", imageSrc);
            console.log("Setting static image directly");
            // Set the image source directly
            if (mode === 'academy') {
              (e.target as HTMLImageElement).src = blueHeadImage;
            } else {
              (e.target as HTMLImageElement).src = defaultHeadImage;
            }
            setIsLoaded(true);
          }}
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
