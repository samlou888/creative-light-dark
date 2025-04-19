import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { mode, isCreativeMode } = useTheme();
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
    // Bildpfad für beide Modi
    const defaultImage = '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
    
    // Wir verwenden für Academy das Bild, das der Benutzer hochgeladen hat
    if (mode === 'academy') {
      // Benutze direkt das hochgeladene Bild aus dem Upload vom Benutzer
      setImageSrc('/lovable-uploads/13e23013-a27c-4d80-992a-da4c0426956e.png');
      console.log('Academy mode detected, using blue wireframe image');
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

  console.log('Current mode:', mode);
  console.log('Image URL being used:', imageSrc);

  if (mode === 'academy') {
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
          {imageSrc && (
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
                // Fallback zum Standard-Bild bei Ladefehler
                setImageSrc('/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png');
              }}
            />
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WireframeHead;
