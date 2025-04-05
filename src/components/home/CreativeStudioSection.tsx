
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brush, Globe, Video, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CreativeStudioSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'branding',
      icon: <Brush size={32} className="text-primary" />,
      title: "Branding & Markenentwicklung",
      description: "Wir entwickeln prägnante Markenidentitäten, die für dich sprechen – vom Logo über Corporate Design bis zum einheitlichen Auftritt."
    },
    {
      id: 'web',
      icon: <Globe size={32} className="text-primary" />,
      title: "UI/UX Design & Webentwicklung",
      description: "Benutzerfreundliche Websites und Apps mit einzigartigem Design, die auf allen Geräten perfekt funktionieren."
    },
    {
      id: 'social',
      icon: <Star size={32} className="text-primary" />,
      title: "Social Media Content & Kampagnen",
      description: "Content, der auffällt und konvertiert – für alle relevanten Kanäle mit zielgerichteten Kampagnenstrategien."
    },
    {
      id: 'motion',
      icon: <Video size={32} className="text-primary" />,
      title: "Motion Design & Storytelling",
      description: "Bewegte Bilder, die Emotionen wecken – von Animationen über Produktvideos bis hin zu komplexen Erklärfilmen."
    }
  ];

  return (
    <section id="studio" className="py-36 px-6 md:px-10 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4">
            Creative <span className="text-primary">Studio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Wir gestalten digitale Markenauftritte, die wirken – mit KI, Strategie und Design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              className="rounded-xl p-6 transition-all duration-300 dark-card hover:border-primary/60 pt-10"
              whileHover={{ 
                y: -5, 
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                boxShadow: "0 10px 25px -5px rgba(60, 214, 120, 0.2), 0 8px 10px -6px rgba(60, 214, 120, 0.1)"
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-primary/10 neon-glow">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button className="rounded-full px-8 py-6 text-lg neon-glow">
            Projekt anfragen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreativeStudioSection;
