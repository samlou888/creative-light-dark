
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const content = {
  en: {
    title: "Your Benefits",
    benefits: [
      "Practical", 
      "Immediately applicable",
      "No prior knowledge needed"
    ],
    callout: {
      title: "Ready to master AI?",
      description: "Request an overview of all available courses now and start your journey to becoming an AI expert.",
      button: "Request Course Overview"
    }
  },
  de: {
    title: "Deine Vorteile",
    benefits: [
      "Praxisnah",
      "Sofort umsetzbar",
      "Keine Vorkenntnisse nötig"
    ],
    callout: {
      title: "Bereit, AI zu meistern?",
      description: "Fordere jetzt die Übersicht aller verfügbaren Kurse an und starte deinen Weg zum AI-Experten.",
      button: "Jetzt Kursübersicht anfordern"
    }
  },
  fr: {
    title: "Vos Avantages",
    benefits: [
      "Pratique",
      "Applicable immédiatement",
      "Aucune connaissance préalable requise"
    ],
    callout: {
      title: "Prêt à maîtriser l'IA ?",
      description: "Demandez maintenant un aperçu de tous les cours disponibles et commencez votre voyage vers l'expertise en IA.",
      button: "Demander l'aperçu des cours"
    }
  }
};

const BenefitsSection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.title}</h2>
              <div className="space-y-4">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-primary/5 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">{t.callout.title}</h3>
              <p className="text-muted-foreground mb-6">
                {t.callout.description}
              </p>
              <Button size="lg" className="w-full rounded-full">
                <Calendar className="mr-2 h-5 w-5" />
                {t.callout.button}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
