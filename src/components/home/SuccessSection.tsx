
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, Quote, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Automatisierte Dokumentenverarbeitung",
      industry: "Finanzsektor",
      result: "97% Zeitersparnis bei der Datenverarbeitung, 76% Reduktion von Fehlern"
    },
    {
      title: "KI-gestützte Kundenservice Automation",
      industry: "E-Commerce",
      result: "68% schnellere Antwortzeiten, 42% höhere Kundenzufriedenheit"
    },
    {
      title: "Prozessautomatisierung in der Logistik",
      industry: "Transportwesen",
      result: "35% Effizienzsteigerung, 28% Kosteneinsparung"
    }
  ];

  const testimonial = {
    quote: "Die Zusammenarbeit mit AIventures hat unser Unternehmen transformiert. Die maßgeschneiderten Automatisierungslösungen haben unsere internen Prozesse revolutioniert und uns geholfen, unsere Ziele schneller zu erreichen.",
    author: "Maria Schmidt",
    position: "Digitalisierungsleitung, TechCorp GmbH"
  };

  return (
    <section id="success" className="py-24 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4">
            Unsere <span className="text-primary">Erfolge</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Entdecken Sie, wie wir Unternehmen bei ihrer digitalen Transformation unterstützen und messbare Ergebnisse liefern.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="light-card"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start mb-4">
                <div className="p-2 bg-primary/10 rounded-full mr-4">
                  <Briefcase size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.industry}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-primary mt-4">{project.result}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="bg-secondary/30 rounded-xl p-8 md:p-10 mb-16 relative">
          <div className="absolute top-6 left-6 md:top-10 md:left-10 text-primary/20">
            <Quote size={64} />
          </div>
          <div className="md:ml-16 relative z-10">
            <p className="text-lg md:text-xl italic mb-6">
              "{testimonial.quote}"
            </p>
            <div>
              <p className="font-bold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.position}</p>
            </div>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="mb-16 relative overflow-hidden rounded-xl shadow-lg">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/20 flex flex-col items-center justify-center">
              <PlayCircle size={80} className="text-primary mb-4 opacity-80" />
              <p className="text-lg font-medium">Unsere Erfolgsgeschichten</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button className="primary-btn">
            Jetzt Strategiegespräch buchen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
