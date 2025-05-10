
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';
import WireframeHead from '@/components/graphics/WireframeHead';

interface HeroSectionProps {
  titleAnimationWords: string[];
  subtitle: string;
  cta: {
    label: string;
    action?: () => void;
  };
  wireframeImage?: string;
  textColor?: string;
  backgroundColor?: string;
}

interface CalendlyOptions {
  requireEmailConfirmation?: boolean;
}

const NeutralHeroSection: React.FC<HeroSectionProps> = ({
  titleAnimationWords,
  subtitle,
  cta,
  wireframeImage,
  textColor = 'black',
  backgroundColor = 'white'
}) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');
  const titleRef = useRef<HTMLSpanElement>(null);
  
  // Animation for typing effect
  useEffect(() => {
    const word = titleAnimationWords[currentWord];
    let charIndex = 0;
    setIsTyping(true);
    
    // Type effect
    const typeInterval = setInterval(() => {
      if (charIndex < word.length) {
        setDisplayedText(word.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait before erasing
        setTimeout(() => {
          // Start erasing effect
          let eraseIndex = word.length;
          setIsTyping(true);
          
          const eraseInterval = setInterval(() => {
            if (eraseIndex > 0) {
              setDisplayedText(word.substring(0, eraseIndex - 1));
              eraseIndex--;
            } else {
              clearInterval(eraseInterval);
              setIsTyping(false);
              
              // Move to next word
              setTimeout(() => {
                setCurrentWord((prev) => (prev + 1) % titleAnimationWords.length);
              }, 500);
            }
          }, 50);
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(typeInterval);
  }, [currentWord, titleAnimationWords]);
  
  // Function to open Calendly modal with options
  const openCalendlyModal = (options?: CalendlyOptions) => {
    // We can use options later if needed for additional Calendly configuration
    setIsCalendlyOpen(true);
    if (cta.action) {
      cta.action();
    }
  };
  
  const bgStyle = { backgroundColor };
  const textStyle = { color: textColor };
  
  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center font-mono" style={bgStyle}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" style={textStyle}>
              Wir erstellen {' '}
              <span className="relative inline-block">
                <span 
                  ref={titleRef}
                  className="inline-block min-w-[20px]"
                >
                  {displayedText}
                </span>
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 max-w-lg" style={textStyle}>
              {subtitle}
            </p>
            
            <div>
              <Dialog open={isCalendlyOpen} onOpenChange={setIsCalendlyOpen}>
                <DialogTrigger asChild>
                  <button 
                    onClick={() => openCalendlyModal({ requireEmailConfirmation: true })}
                    className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-all"
                  >
                    {cta.label}
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
                  <CalendlyEmbed className="w-full" />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            {wireframeImage ? (
              <img 
                src={wireframeImage} 
                alt="Wireframe illustration" 
                className="w-full h-auto object-contain max-h-[400px]" 
              />
            ) : (
              <div className="invert-0">
                <WireframeHead />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeutralHeroSection;
