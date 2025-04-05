
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brush, Zap, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();
  
  const services = [
    {
      id: 'studio',
      icon: <Brush size={isCreativeMode ? 32 : 28} className={isCreativeMode ? "text-primary" : ""} />,
      title: t('services.studio.title'),
      description: t('services.studio.description'),
      extendedDescription: t('services.studio.extendedDescription'),
      features: t('services.studio.features')
    },
    {
      id: 'automation',
      icon: <Zap size={isCreativeMode ? 32 : 28} className={isCreativeMode ? "text-primary" : ""} />,
      title: t('services.automation.title'),
      description: isCreativeMode 
        ? t('services.automation.creativeDescription')
        : t('services.automation.description'),
      features: isCreativeMode 
        ? t('services.automation.features.creative')
        : t('services.automation.features.automation')
    },
    {
      id: 'academy',
      icon: <GraduationCap size={isCreativeMode ? 32 : 28} className={isCreativeMode ? "text-primary" : ""} />,
      title: t('services.academy.title'),
      description: isCreativeMode 
        ? t('services.academy.creativeDescription')
        : t('services.academy.description'),
      features: isCreativeMode 
        ? t('services.academy.features.creative')
        : t('services.academy.features.automation')
    }
  ];

  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24"> {/* Maintained padding and margin */}
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4" id="services-heading">
            {t('services.title')} <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode 
              ? t('services.description.creative')
              : t('services.description.automation')
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              id={service.id}
              className={`rounded-xl p-6 transition-all duration-300 ${
                isCreativeMode 
                  ? 'dark-card hover:border-primary/60' 
                  : 'light-card'
              } pt-10 h-full`} // Adjusted padding and removed margin-top
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
              
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              
              {service.id === 'studio' ? (
                <>
                  <p className="text-muted-foreground mb-4 text-sm">{service.extendedDescription}</p>
                  <ul className="space-y-1 mb-3">
                    {Array.isArray(service.features) && service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground text-xs italic">{service.description}</p>
                </>
              ) : (
                <>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-1">
                    {Array.isArray(service.features) && service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
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
