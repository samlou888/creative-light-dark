
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const AutomationHero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Automatisiere. Optimiere. Skaliere.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            Reduziere manuelle Arbeit, spare Zeit und fokussiere dich aufs Wesentliche – mit intelligenten Automationen, 
            die sich perfekt in deine Prozesse integrieren.
          </motion.p>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Button size="lg" className="primary-btn">
              Jetzt Prozess-Check buchen <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AutomationHero;
