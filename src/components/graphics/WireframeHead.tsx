
import React, { useEffect, useState, useRef, memo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = memo(({ className = '' }) => {
  const { isCreativeMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const location = useLocation();
  
  // Motion values for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Animation controls for breathing effect
  const controls = useAnimation();
  
  // Determine which image to use based on current route
  const getHeadImage = () => {
    switch (location.pathname) {
      case '/academy':
        return '/lovable-uploads/12424c5f-eca8-4d92-8ce2-d74a9589dd7c.png';
      default:
        return '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';
    }
  };

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
            src={getHeadImage()}
            alt="AI Wireframe Head" 
            className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 object-contain
              ${isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'}
              ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
          />
        </motion.div>
      </motion.div>
    </div>
  );
});

WireframeHead.displayName = 'WireframeHead';

export default WireframeHead;
