
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import CaseStudyCard from '../showcase/CaseStudyCard';
import { automationCases } from '../showcase/caseStudies';

const content = {
  en: {
    title: "Successful Automations",
    description: "Learn how we have successfully automated and optimized processes.",
    button: "Start Similar Project"
  },
  de: {
    title: "Erfolgreiche Automatisierungen",
    description: "Erfahren Sie, wie wir Prozesse erfolgreich automatisiert und optimiert haben.",
    button: "Ähnliches Projekt starten"
  },
  fr: {
    title: "Automatisations Réussies",
    description: "Découvrez comment nous avons automatisé et optimisé les processus avec succès.",
    button: "Démarrer un Projet Similaire"
  }
};

const ShowcaseSection = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const t = content[language];
  
  if (mode === 'automation' || mode === 'creative' || mode === 'academy') {
    return null;
  }

  return (
    <section id="showcase" className="py-10 px-6 md:px-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-3">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {automationCases.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="inline-block primary-btn"
          >
            {t.button}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
