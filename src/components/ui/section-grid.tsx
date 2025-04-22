
import React from 'react';
import { motion } from 'framer-motion';

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
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted/20 rounded-lg p-6 text-center hover:bg-muted/40 transition-colors"
            >
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionGrid;
