
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface CTAProps {
  label: string;
  action: () => void;
}

interface HeroSectionProps {
  titleAnimationWords: string[];
  subtitle: string;
  cta: CTAProps;
  wireframeImage: string;
  textColor: string;
  backgroundColor: string;
}

const NeutralHeroSection = ({
  titleAnimationWords,
  subtitle,
  cta,
  wireframeImage,
  textColor = "black",
  backgroundColor = "white"
}: HeroSectionProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % titleAnimationWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titleAnimationWords.length]);

  return (
    <section 
      className={`pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center font-mono`}
      style={{ color: textColor, backgroundColor }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-slide-up-fade">
              <span className="block">Wir entwickeln</span>
              <motion.div
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-primary"
              >
                {titleAnimationWords[currentWordIndex]}
              </motion.div>
            </h1>
            
            <p className="text-xl opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {subtitle}
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              <button 
                onClick={cta.action}
                className="primary-btn flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700"
              >
                {cta.label}
              </button>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <motion.img
              src={wireframeImage}
              alt="Wireframe Head"
              className="w-full max-w-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeutralHeroSection;
