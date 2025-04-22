
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
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
          item: "neo-blur rounded-lg p-6 text-center hover:bg-black/50 transition-colors border border-white/10",
          itemTitle: "text-xl font-medium mb-2 text-white",
          itemDescription: "text-gray-300"
        };
      case 'academy':
        return {
          container: "py-16",
          title: "text-3xl font-bold mb-4",
          subtitle: "text-muted-foreground",
          grid: "grid md:grid-cols-3 gap-8 max-w-5xl mx-auto",
          item: "bg-muted/20 rounded-lg p-6 text-center hover:bg-muted/40 transition-colors",
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
          item: "light-card dark-card h-full hover:shadow-md",
          itemTitle: "text-xl font-medium mb-2",
          itemDescription: "text-muted-foreground"
        };
    }
  };

  const styles = getSectionStyles();

  return (
    <section className={`${styles.container} ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        
        <div className={styles.grid}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.item}
            >
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGrid;
