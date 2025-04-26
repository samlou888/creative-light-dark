
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const content = {
  en: {
    title: "Start your AI journey today",
    description: "From beginners to advanced - we accompany you every step of the way.",
    button: "Request Course Overview"
  },
  de: {
    title: "Starte deine KI-Reise noch heute",
    description: "Von Anfänger bis Fortgeschrittene - wir begleiten dich auf jedem Schritt deines Weges.",
    button: "Jetzt Kursübersicht anfordern"
  },
  fr: {
    title: "Commencez votre voyage dans l'IA aujourd'hui",
    description: "Des débutants aux experts - nous vous accompagnons à chaque étape.",
    button: "Demander l'aperçu des cours"
  }
};

const CTASection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.description}
            </p>
            <Button size="lg" className="rounded-full">
              {t.button}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
