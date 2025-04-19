
import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { mode } = useTheme();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const blueHeadImage = '/lovable-uploads/981db267-7a89-4863-be60-68f94e204584.png';
    const defaultImage = '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
    
    setImageSrc(mode === 'academy' ? blueHeadImage : defaultImage);
  }, [mode]);

  if (!imageSrc) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <img 
        src={imageSrc}
        alt="AI Head" 
        className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 object-contain 
          ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => setImageSrc('/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png')}
      />
    </div>
  );
};

export default WireframeHead;
