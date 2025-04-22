
import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

interface GridItem {
  title: string;
  description: string;
}

interface SectionGridProps {
  title: string;
  subtitle: string;
  items: GridItem[];
  className?: string;
}

const SectionGrid = ({
  title,
  subtitle,
  items,
  className
}: SectionGridProps) => {
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
          header: {
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                type: "spring", 
                damping: 12,
                stiffness: 100
              } 
            }
          },
          item: {
            hidden: { opacity: 0, y: 30, scale: 0.95 },
            visible: (i: number) => ({ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { 
                type: "spring", 
                damping: 12,
                stiffness: 100,
                delay: 0.1 + (i * 0.1)
              } 
            })
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
          header: {
            hidden: { opacity: 0, y: 15 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1]
              } 
            }
          },
          item: {
            hidden: { opacity: 0, y: 20 },
            visible: (i: number) => ({ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 + (i * 0.08)
              } 
            })
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
          header: {
            hidden: { opacity: 0, y: 10 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
              } 
            }
          },
          item: {
            hidden: { opacity: 0, y: 20 },
            visible: (i: number) => ({ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1 + (i * 0.05)
              } 
            })
          }
        };
    }
  };

  // Section-specific styling
  const getSectionStyles = () => {
    switch(mode) {
      case 'creative':
        return {
          container: "py-16",
          title: "text-3xl font-bold mb-4 text-white",
          subtitle: "text-gray-300",
          grid: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",
          item: "neo-blur rounded-lg p-6 text-center border border-white/10",
          itemTitle: "text-xl font-medium mb-2 text-white",
          itemDescription: "text-gray-300"
        };
      case 'academy':
        return {
          container: "py-16",
          title: "text-3xl font-bold mb-4",
          subtitle: "text-muted-foreground",
          grid: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",
          item: "bg-muted/20 rounded-lg p-6 text-center",
          itemTitle: "text-xl font-medium mb-2",
          itemDescription: "text-muted-foreground"
        };
      case 'automation':
      default:
        return {
          container: "py-16",
          title: "text-3xl font-bold mb-4",
          subtitle: "text-muted-foreground",
          grid: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",
          item: "light-card h-full",
          itemTitle: "text-xl font-medium mb-2",
          itemDescription: "text-muted-foreground"
        };
    }
  };

  const styles = getSectionStyles();
  const variants = getAnimationVariants();

  return (
    <section className={`${styles.container} ${className}`}>
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants.container}
        >
          <motion.h2 variants={variants.header} className={styles.title}>{title}</motion.h2>
          <motion.p variants={variants.header} className={styles.subtitle}>{subtitle}</motion.p>
        </motion.div>
        
        <motion.div 
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={variants.item}
              className={styles.item}
            >
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionGrid;
