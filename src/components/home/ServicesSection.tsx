
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Palette, Globe, Video } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const { isCreativeMode } = useTheme();
  
  const services = [
    {
      id: 'branding',
      icon: <Palette size={isCreativeMode ? 32 : 28} className={isCreativeMode ? "text-[#00FF66]" : ""} />,
      title: 'Grafik & Branding',
      description: 'Logos, Farben, Schrift, Visitenkarten, Präsentationen. Alles, was deinen Auftritt professionell und wiedererkennbar macht.'
    },
    {
      id: 'web',
      icon: <Globe size={isCreativeMode ? 32 : 28} className={isCreativeMode ? "text-[#9b87f5]" : ""} />,
      title: 'Webseiten & Apps',
      description: 'UI/UX-Design und Umsetzung – von kreativen Webauftritten bis zu komplexen Apps. Schön, schnell, sauber gebaut.'
    },
    {
      id: 'social',
      icon: <Video size={isCreativeMode ? 32 : 28} className={isCreativeMode ? "text-[#00FF66]" : ""} />,
      title: 'Social Media & Content',
      description: 'Posts, Reels, Videos, Texte – ready zum Hochladen auf Social Media. Schnell produziert, kreativ gedacht, KI-optimiert.'
    }
  ];

  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4" id="services-heading">
            {isCreativeMode ? (
              "Unsere Leistungen"
            ) : (
              <>Unsere <span className="text-primary">Services</span></>
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode 
              ? "Wir kombinieren kreative Expertise mit fortschrittlicher Technologie, um einzigartige und zukunftsweisende Lösungen zu schaffen."
              : "Wir bieten umfassende AI-Lösungen für Unternehmen, die ihre Prozesse optimieren und ihr volles Potenzial ausschöpfen möchten."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`rounded-xl p-6 transition-all duration-300 ${
                isCreativeMode 
                  ? 'dark-card hover:border-primary/60' 
                  : 'light-card'
              } pt-10 h-full`}
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
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${
                isCreativeMode 
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
