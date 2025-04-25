import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GraduationCap, MessageSquareText, BookText, Palette, Globe, Video, Workflow, Mail, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

// Define service data for each mode
const academyServices = [
  {
    id: 'academy-1',
    icon: <GraduationCap className="w-6 h-6 text-[#00CFFF]" />,
    title: 'AI Schulungen',
    description: 'Maßgeschneiderte Workshops und Schulungen, um Ihr Team für KI-Anwendungen zu qualifizieren.'
  },
  {
    id: 'academy-2',
    icon: <BookText className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Lernmaterialien',
    description: 'Umfassende Dokumentationen und praxisnahe Lernmaterialien für effektives Selbststudium.'
  },
  {
    id: 'academy-3',
    icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Beratung',
    description: 'Individuelle Beratung zur Integration von KI in bestehende Prozesse und Strategien.'
  }
];

const creativeServices = [
  {
    id: 'creative-1',
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: 'Design & Konzeption',
    description: 'Kreative Konzepte und Designs für Ihre digitale Präsenz mit KI-unterstützten Tools.'
  },
  {
    id: 'creative-2',
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'Web & App Entwicklung',
    description: 'Moderne Webseiten und Apps mit Integration fortschrittlicher KI-Funktionalitäten.'
  },
  {
    id: 'creative-3',
    icon: <Video className="w-6 h-6 text-primary" />,
    title: 'Content Creation',
    description: 'KI-gestützte Erstellung von Texten, Videos und anderen Inhalten für Ihre Online-Präsenz.'
  }
];

const automationServices = [
  {
    id: 'automation-1',
    icon: <Workflow className="w-6 h-6 text-primary" />,
    title: 'Prozessautomatisierung',
    description: 'Optimierung und Automatisierung Ihrer Geschäftsprozesse durch maßgeschneiderte KI-Lösungen.'
  },
  {
    id: 'automation-2',
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'AI Development',
    description: 'Entwicklung spezialisierter KI-Anwendungen für Ihre individuellen Unternehmensbedürfnisse.'
  },
  {
    id: 'automation-3',
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: 'Datenanalyse',
    description: 'Umfassende Analyse Ihrer Unternehmensdaten zur Gewinnung wertvoller Insights.'
  }
];

const ServicesSection = () => {
  const { mode } = useTheme();
  const services = mode === 'academy' ? academyServices : mode === 'creative' ? creativeServices : automationServices;

  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className={`section-heading mb-4 hover-glow ${
            mode === 'automation' ? 'title-automation' :
            mode === 'creative' ? 'title-creative' :
            mode === 'academy' ? 'title-academy' : ''
          }`} id="services-heading">
            Unsere Angebote
          </h2>
          <p className="text-lg text-muted-foreground">
            {mode === 'academy' 
              ? "Wir bieten maßgeschneiderte Lösungen für Ihr Unternehmen - von Schulungen bis hin zu individueller Beratung."
              : mode === 'creative'
              ? "Wir kombinieren kreative Expertise mit fortschrittlicher Technologie, um einzigartige und zukunftsweisende Lösungen zu schaffen."
              : "Wir bieten umfassende AI-Lösungen für Unternehmen, die ihre Prozesse optimieren und ihr volles Potenzial ausschöpfen möchten."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="offer-card hover-glow"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-150 ${
                mode === 'academy'
                  ? 'bg-[#00CFFF]/10'
                  : mode === 'creative'
                  ? 'bg-[#00FB5C]/10 shadow-[0_0_15px_rgba(0,251,92,0.3)]'
                  : 'bg-primary/10'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
