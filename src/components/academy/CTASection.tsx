
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Starte deine KI-Reise noch heute
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Von Anfänger bis Fortgeschrittene - wir begleiten dich auf jedem Schritt deines Weges.
            </p>
            <Button size="lg" className="rounded-full">
              Jetzt Kursübersicht anfordern
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
