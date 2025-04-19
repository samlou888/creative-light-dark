
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  { text: "Praxisnah", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
  { text: "Sofort umsetzbar", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
  { text: "Keine Vorkenntnisse nötig", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
];

const BenefitsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Deine Vorteile</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4">{benefit.icon}</div>
                    <p className="text-lg">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Bereit, AI zu meistern?</h3>
              <p className="text-muted-foreground mb-6">
                Fordere jetzt die Übersicht aller verfügbaren Kurse an und starte deinen Weg zum AI-Experten.
              </p>
              <Button size="lg" className="w-full rounded-full">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Kursübersicht anfordern
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
