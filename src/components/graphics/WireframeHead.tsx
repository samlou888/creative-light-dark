
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const headImage = '/lovable-uploads/119f1f5e-5816-4515-90b6-33f3d174331f.png';

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
          src={headImage}
          alt="Wireframe Head" 
          className={`w-full h-auto max-w-lg mx-auto object-contain ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
          onLoad={() => setIsLoaded(true)}
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
