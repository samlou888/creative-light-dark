
import React, { useEffect, useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  const { mode, isCreativeMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
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

  // Bildpfad für beide Modi
  const defaultImage = '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
  const academyImage = '/lovable-uploads/9849a95e-d9ac-4ca8-941e-754d3926aaa6.png'; // Neuer hochgeladener Pfad

  // Bildauswahl basierend auf dem Modus
  const imageUrl = mode === 'academy' ? academyImage : defaultImage;

  // Console Logs für Debugging
  console.log('Current mode:', mode);
  console.log('Image URL being used:', imageUrl);

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
            src={imageUrl}
            alt="AI Wireframe Head" 
            className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 object-contain
              ${isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'}
              ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            onError={(e) => {
              console.error('Image failed to load:', imageUrl);
              // Fallback zum Standard-Bild bei Ladefehler
              if (mode === 'academy' && imageUrl !== defaultImage) {
                (e.target as HTMLImageElement).src = defaultImage;
              }
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WireframeHead;
