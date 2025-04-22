
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface SectionHeroProps {
  title: string;
  description: string;
  buttonText: string;
  badgeText?: string;
  onButtonClick?: () => void;
  className?: string;
}

const SectionHero = ({
  title,
  description,
  buttonText,
  badgeText,
  onButtonClick,
  className
}: SectionHeroProps) => {
  const { mode } = useTheme();
  
  // Section-specific animation variants
  const getAnimationVariants = () => {
    switch(mode) {
      case 'creative':
        return {
          container: {
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          },
          item: {
            hidden: { opacity: 0, y: 20, scale: 0.98 },
            visible: { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                type: "spring", 
                damping: 12,
                stiffness: 100
              } 
            }
          }
        };
      case 'academy':
        return {
          container: {
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.12, delayChildren: 0.1 }
            }
          },
          item: {
            hidden: { opacity: 0, y: 15 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                type: "tween", 
                ease: "easeOut",
                duration: 0.45
              } 
            }
          }
        };
      case 'automation':
      default:
        return {
          container: {
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.1 }
            }
          },
          item: {
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              } 
            }
          }
        };
    }
  };

  // Section-specific styling
  const getSectionStyles = () => {
    switch(mode) {
      case 'creative':
        return {
          container: "py-24 text-white",
          badge: "mb-4 bg-white/10 hover:bg-white/20 text-white border-none px-4 py-1",
          title: "text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none",
          description: "text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        };
      case 'academy':
        return {
          container: "py-16 md:py-24",
          badge: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1",
          title: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6",
          description: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        };
      case 'automation':
      default:
        return {
          container: "py-16 md:py-24",
          badge: "mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1",
          title: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
          description: "text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        };
    }
  };

  const styles = getSectionStyles();
  const variants = getAnimationVariants();

  return (
    <section className={`${styles.container} ${className}`}>
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={variants.container}
        >
          {badgeText && (
            <motion.div variants={variants.item}>
              <Badge className={styles.badge}>
                {badgeText}
              </Badge>
            </motion.div>
          )}
          
          <motion.h1 variants={variants.item} className={styles.title}>
            {title}
          </motion.h1>
          
          <motion.p variants={variants.item} className={styles.description}>
            {description}
          </motion.p>
          
          <motion.div variants={variants.item}>
            <Button 
              size="lg" 
              className={`primary-btn`} 
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;
