
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface SectionHeroProps {
  badgeText?: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const SectionHero = ({
  badgeText,
  title,
  description,
  buttonText,
  onButtonClick,
  className
}: SectionHeroProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
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
      </div>
    </section>
  );
};

export default SectionHero;
