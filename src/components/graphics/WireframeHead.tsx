import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { mode, isCreativeMode } = useTheme();
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Motion values for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Animation controls for breathing effect
  const controls = useAnimation();
  
  // Start breathing animation when component is in view
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.stop();
    }
  }, [isInView, controls]);
  
  // Handle mouse move for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x * 10);
        mouseY.set(y * 10);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Set image source based on mode
  useEffect(() => {
    const defaultImage = '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
    
    if (mode === 'academy') {
      setImageSrc('/lovable-uploads/4c779416-61ec-4559-9b8e-4c99ac0cbe29.png');
      console.log('Academy mode detected, using blue academy wireframe image');
    } else {
      setImageSrc(defaultImage);
      console.log('Using default wireframe image');
    }
  }, [mode]);

  // Breathing animation variant
  const breathingAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };

  // Parallax effect values
  const x = useTransform(mouseX, [-5, 5], [5, -5]);
  const y = useTransform(mouseY, [-5, 5], [5, -5]);

  if (!imageSrc) {
    return null;
  }

  return (
    <div className={`relative ${className}`} ref={containerRef}>
      <motion.div
        className="w-full h-full"
        initial="initial"
        animate={controls}
        variants={{
          initial: {},
          animate: {}
        }}
        style={{ 
          x: isInView ? x : 0,
          y: isInView ? y : 0
        }}
      >
        <motion.div
          initial="initial"
          animate={controls}
          variants={breathingAnimation}
        >
          <img 
            src={imageSrc}
            alt="AI Wireframe Head" 
            className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 object-contain
              ${isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'}
              ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => {
              console.log('Image loaded successfully:', imageSrc);
              setIsLoaded(true);
            }}
            onError={(e) => {
              console.error('Image failed to load:', imageSrc);
              setImageSrc('/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png');
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WireframeHead;
