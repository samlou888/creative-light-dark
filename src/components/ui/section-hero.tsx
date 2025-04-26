
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SectionHeroProps {
  badgeText?: string;
  title: string | React.ReactNode;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
  image?: string;
}

const SectionHero = ({
  badgeText,
  title,
  description,
  buttonText,
  onButtonClick,
  className,
  image
}: SectionHeroProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.div 
            className="max-w-2xl mx-auto md:mx-0 text-center md:text-left flex-1"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            {badgeText && (
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
                {badgeText}
              </Badge>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              {description}
            </p>
            {buttonText && (
              <Button size="lg" className="rounded-full" onClick={onButtonClick}>
                {buttonText}
              </Button>
            )}
          </motion.div>
          
          {image && (
            <motion.div 
              className="flex-1 mt-8 md:mt-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src={image} 
                alt="Hero illustration" 
                className="w-full h-auto object-contain max-h-[400px]" 
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
