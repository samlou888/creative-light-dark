
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

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
  const { mode } = useTheme();
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Section-specific styling
  const getSectionStyles = () => {
    switch(mode) {
      case 'creative':
        return {
          badge: "mb-4 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 border-none px-4 py-1",
          button: "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full neon-glow"
        };
      case 'academy':
        return {
          badge: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1",
          button: "bg-primary text-white hover:bg-primary/90 rounded-full"
        };
      case 'automation':
      default:
        return {
          badge: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1",
          button: "bg-primary text-white hover:bg-primary/90 rounded-full"
        };
    }
  };

  const styles = getSectionStyles();

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
            <Badge className={styles.badge}>
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
            <Button size="lg" className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
