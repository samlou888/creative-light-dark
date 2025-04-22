
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

interface SectionCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
}

const SectionCTA = ({
  title,
  description,
  buttonText,
  onButtonClick,
  className
}: SectionCTAProps) => {
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
              transition: { staggerChildren: 0.2, delayChildren: 0.1 }
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
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          },
          item: {
            hidden: { opacity: 0, y: 15 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
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
                duration: 0.5,
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
          container: "py-24 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-white/10",
          title: "text-3xl font-bold mb-6 text-white",
          description: "text-lg text-gray-300 mb-8",
          button: "primary-btn"
        };
      case 'academy':
        return {
          container: "py-24 bg-primary/5",
          title: "text-3xl font-bold mb-6",
          description: "text-lg text-muted-foreground mb-8",
          button: "primary-btn"
        };
      case 'automation':
      default:
        return {
          container: "py-24 bg-primary/5",
          title: "text-3xl font-bold mb-6",
          description: "text-lg text-muted-foreground mb-8",
          button: "primary-btn"
        };
    }
  };

  const styles = getSectionStyles();
  const variants = getAnimationVariants();

  return (
    <section className={`${styles.container} ${className}`}>
      <div className="container px-4 md:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.container}
        >
          <motion.h2 variants={variants.item} className={styles.title}>{title}</motion.h2>
          <motion.p variants={variants.item} className={styles.description}>{description}</motion.p>
          <motion.div variants={variants.item}>
            <Button size="lg" className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionCTA;
