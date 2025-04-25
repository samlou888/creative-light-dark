import React, { useEffect, useState, useRef, memo } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, useInView, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = memo(({ className = '' }) => {
  const { isCreativeMode } = useTheme();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const controls = useAnimation();

  // Explicitly set which image to use based on the current route
  const imagePath = location.pathname === '/academy' 
    ? '/lovable-uploads/eb52459a-567a-4a86-9c38-cd28caabc328.png'
    : '/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png';

  console.log('WireframeHead - Current location:', location.pathname);
  console.log('WireframeHead - Using image:', imagePath);

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

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
            src={imagePath}
            alt="AI Wireframe Head" 
            className={`w-full h-auto max-w-lg mx-auto transition-all duration-500 object-contain
              ${isCreativeMode ? 'filter brightness-110 saturate-150' : 'filter brightness-100'}
              opacity-100`}
          />
        </motion.div>
      </motion.div>
    </div>
  );
});

WireframeHead.displayName = 'WireframeHead';

export default WireframeHead;
