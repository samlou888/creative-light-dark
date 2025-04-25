import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GraduationCap, MessageSquareText, BookText, Palette, Globe, Video, Workflow, Mail, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const { mode } = useTheme();
  
  const academyServices = [
    {
      id: 'workshops',
      icon: <GraduationCap size={32} className="text-[#00CFFF]" />,
      title: 'Workshops & Schulungen für Unternehmen',
      description: 'Live und On-Demand Trainings zu AI-Tools, Prozessautomatisierung und effizientem Arbeiten mit künstlicher Intelligenz. Klar, praxisnah, umsetzbar.'
    },
    {
      id: 'coaching',
      icon: <MessageSquareText size={32} className="text-[#D2A8FF]" />,
      title: 'Prompt-Coaching & Templates',
      description: '1:1 Prompt-Coaching plus sofort einsetzbare AI-Vorlagen für Sales, Marketing, Support & HR. Für Teams, die schneller ans Ziel wollen.'
    },
    {
      id: 'kurse',
      icon: <BookText size={32} className="text-[#00CFFF]" />,
      title: 'Digitale Weiterbildung & Online-Kurse',
      description: 'Interaktive Lernpfade mit Videoinhalten, Übungen und optionalen Zertifikaten. Für Unternehmen, die intern Wissen aufbauen und skalieren wollen.'
    }
  ];

  const creativeServices = [
    {
      id: 'branding',
      icon: <Palette size={28} className="text-[#00FF66]" />,
      title: 'Grafik & Branding',
      description: 'Logos, Farben, Schrift, Visitenkarten, Präsentationen. Alles, was deinen Auftritt professionell und wiedererkennbar macht.'
    },
    {
      id: 'web',
      icon: <Globe size={28} className="text-[#9b87f5]" />,
      title: 'Webseiten & Apps',
      description: 'UI/UX-Design und Umsetzung – von kreativen Webauftritten bis zu komplexen Apps. Schön, schnell, sauber gebaut.'
    },
    {
      id: 'social',
      icon: <Video size={28} className="text-[#00FF66]" />,
      title: 'Social Media & Content',
      description: 'Posts, Reels, Videos, Texte – ready zum Hochladen auf Social Media. Schnell produziert, kreativ gedacht, KI-optimiert.'
    }
  ];

  const automationServices = [
    {
      id: 'internal',
      icon: <Workflow size={28} />,
      title: 'Interne Prozesse automatisieren',
      description: 'Von HR bis Buchhaltung: Wir digitalisieren und automatisieren interne Abläufe, damit dein Team sich auf das Wesentliche konzentrieren kann.'
    },
    {
      id: 'marketing',
      icon: <Mail size={28} />,
      title: 'Sales & Marketing Flows auf Autopilot',
      description: 'E-Mail-Sequenzen, Lead-Scoring, Follow-ups & mehr – wir machen deine Kundengewinnung effizient und skalierbar.'
    },
    {
      id: 'custom',
      icon: <Brain size={28} />,
      title: 'Individuelle Automationen mit AI',
      description: 'Wir analysieren dein Business und bauen maßgeschneiderte Automationen mit No-Code-Tools & künstlicher Intelligenz.'
    }
  ];

  const services = mode === 'academy' ? academyServices : mode === 'creative' ? creativeServices : automationServices;

  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4 hover-glow" id="services-heading">
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
              className="offer-card"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                mode === 'academy'
                  ? 'bg-[#00CFFF]/10'
                  : mode === 'creative'
                  ? 'bg-primary/10 neon-glow'
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
