
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const content = {
  en: {
    badge: "AI Academy",
    title: "Learn AI. Scale Your Business.",
    description: "Online workshops, training & coaching – for companies that want to develop their employees to work more efficiently, faster and smarter with AI.",
    button: "Book Your Training Now"
  },
  de: {
    badge: "AI Academy",
    title: "Lerne, wie du AI zu deinem Vorteil nutzt.",
    description: "Unsere Academy bietet Workshops, Kurse und 1:1 Coachings – speziell für den praktischen Einsatz in Alltag & Business.",
    button: "Jetzt Kursübersicht anfordern"
  },
  fr: {
    badge: "AI Academy",
    title: "Apprenez l'IA. Développez votre entreprise.",
    description: "Ateliers en ligne, formations et coaching – pour les entreprises qui souhaitent développer leurs employés pour travailler plus efficacement avec l'IA.",
    button: "Réserver votre formation"
  }
};

const HeroSection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
            {t.badge}
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t.description}
          </p>
          <Button size="lg" className="rounded-full">
            {t.button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
