
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Brush, Zap, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const { isCreativeMode } = useTheme();
  
  const services = [
    {
      id: 'studio',
      icon: <Brush size={isCreativeMode ? 36 : 32} className={isCreativeMode ? "text-primary" : ""} />,
      title: 'Studio',
      description: 'Wir gestalten, was du im Kopf hast – visuell & funktional.',
      extendedDescription: 'Wenn Ästhetik auf Funktionalität trifft, entsteht mehr als Sichtbarkeit: Ihre Marke wird zum Gesprächsthema.',
      features: isCreativeMode 
        ? ['Branding', 'Design', 'Video', 'Social Media', 'Content', 'Web & App Development'] 
        : ['Branding', 'Design', 'Video', 'Social Media', 'Content', 'Web & App Development']
    },
    {
      id: 'automation',
      icon: <Zap size={isCreativeMode ? 36 : 32} className={isCreativeMode ? "text-primary" : ""} />,
      title: 'Automation',
      description: isCreativeMode 
        ? 'Revolutionieren Sie Ihre Arbeitsabläufe mit unseren fortschrittlichen AI-Automatisierungslösungen.'
        : 'Wir automatisieren Geschäftsprozesse und steigern Ihre Effizienz durch intelligente technologische Lösungen.',
      features: isCreativeMode 
        ? ['Robotische Prozessautomatisierung', 'Intelligente Chatbots', 'Prädiktive Analysen', 'Datengetriebene Entscheidungen'] 
        : ['Workflow-Optimierung', 'CRM-Integration', 'Dokumentenmanagement', 'Reporting & Analytics']
    },
    {
      id: 'academy',
      icon: <GraduationCap size={isCreativeMode ? 36 : 32} className={isCreativeMode ? "text-primary" : ""} />,
      title: 'Academy',
      description: isCreativeMode 
        ? 'Bringen Sie Ihre Teams auf die nächste Stufe mit unseren zukunftsorientierten AI-Schulungsprogrammen.'
        : 'Wir bilden Ihre Mitarbeiter weiter und befähigen sie, das volle Potenzial moderner Technologien zu nutzen.',
      features: isCreativeMode 
        ? ['KI-Prompt-Engineering', 'Zukunftsorientierte Tech-Skills', 'Immersive VR-Trainings', 'Personalisierte Lernpfade'] 
        : ['Digitale Transformation', 'Datenanalyse', 'Technisches Know-how', 'Change Management']
    }
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4">
            Unsere <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode 
              ? "Wir kombinieren kreative Expertise mit fortschrittlicher Technologie, um einzigartige und zukunftsweisende Lösungen zu schaffen."
              : "Wir bieten umfassende AI-Lösungen für Unternehmen, die ihre Prozesse optimieren und ihr volles Potenzial ausschöpfen möchten."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              id={service.id}
              className={`rounded-xl p-8 transition-all duration-300 ${
                isCreativeMode 
                  ? 'dark-card hover:border-primary/60' 
                  : 'light-card'
              }`}
              whileHover={{ 
                y: -5, 
                backgroundColor: isCreativeMode ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 1)",
                boxShadow: isCreativeMode 
                  ? "0 10px 25px -5px rgba(60, 214, 120, 0.2), 0 8px 10px -6px rgba(60, 214, 120, 0.1)" 
                  : "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ 
                duration: 0.25, 
                ease: "easeOut" 
              }}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                isCreativeMode 
                  ? 'bg-primary/10 neon-glow' 
                  : 'bg-primary/10'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              
              {service.id === 'studio' ? (
                <>
                  <p className="text-muted-foreground mb-6">{service.extendedDescription}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-sm italic">{service.description}</p>
                </>
              ) : (
                <>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
