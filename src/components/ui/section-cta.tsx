
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
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Section-specific styling
  const getSectionStyles = () => {
    switch(mode) {
      case 'creative':
        return {
          container: "py-24 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-md border border-white/10",
          title: "text-3xl font-bold mb-6 text-white",
          description: "text-lg text-gray-300 mb-8",
          button: "bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full neon-glow"
        };
      case 'academy':
        return {
          container: "py-24 bg-primary/5",
          title: "text-3xl font-bold mb-6",
          description: "text-lg text-muted-foreground mb-8",
          button: "bg-primary text-white hover:bg-primary/90 rounded-full"
        };
      case 'automation':
      default:
        return {
          container: "py-24 bg-primary/5",
          title: "text-3xl font-bold mb-6",
          description: "text-lg text-muted-foreground mb-8",
          button: "bg-primary text-white hover:bg-primary/90 rounded-full"
        };
    }
  };

  const styles = getSectionStyles();

  return (
    <section className={`${styles.container} ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.description}>{description}</p>
            <Button size="lg" className={styles.button} onClick={onButtonClick}>
              {buttonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
