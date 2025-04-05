
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Brush, Zap, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();
  
  // We'll only show Creative Studio section in creative mode
  const services = isCreativeMode 
    ? [
        {
          id: 'studio',
          icon: <Brush size={32} className="text-primary" />,
          title: t('services.studio.title'),
          description: t('services.studio.description'),
          extendedDescription: t('services.studio.extendedDescription'),
          features: (t('services.studio.features') as unknown) as string[],
          cta: t('services.studio.cta'),
        },
        {
          id: 'automation',
          icon: <Zap size={32} className="text-primary" />,
          title: t('services.automation.title'),
          description: t('services.automation.creativeDescription'),
          features: (t('services.automation.features.creative') as unknown) as string[],
          cta: t('services.automation.cta'),
        },
        {
          id: 'academy',
          icon: <GraduationCap size={32} className="text-primary" />,
          title: t('services.academy.title'),
          description: t('services.academy.creativeDescription'),
          features: (t('services.academy.features.creative') as unknown) as string[],
          cta: t('services.academy.cta'),
        }
      ]
    : []; // Empty array in automation mode since we'll create separate sections

  return (
    <>
      {/* Creative Mode: Show all services in one section */}
      {isCreativeMode && (
        <section id="services" className="py-36 px-6 md:px-10 mt-24">
          <div className="container mx-auto">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="section-heading mb-4" id="services-heading">
                {t('services.title')} <span className="text-primary">Services</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('services.description.creative')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <motion.div 
                  key={service.id} 
                  id={service.id}
                  className="rounded-xl p-6 transition-all duration-300 dark-card hover:border-primary/60 pt-10 h-full"
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
                  
                  {service.id === 'studio' ? (
                    <>
                      <p className="text-muted-foreground mb-4 text-sm">{service.extendedDescription}</p>
                      <ul className="space-y-1 mb-3">
                        {service.features.map((feature, index) => (
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
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <div className="mt-4 pt-4 text-center">
                    <Button variant="default" size="sm" className="neon-glow">
                      {service.cta}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Automation Mode: Show automation and academy as separate sections */}
      {!isCreativeMode && (
        <>
          {/* Automation Section */}
          <section id="automation" className="py-36 px-6 md:px-10 mt-24">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="section-heading mb-4">
                    {t('automation.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('automation.description')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="light-card p-8 rounded-xl h-full">
                    <h3 className="text-xl font-bold mb-4">{t('automation.services')}</h3>
                    <ul className="space-y-3">
                      {((t('automation.features') as unknown) as string[]).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-8 rounded-xl flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4">{t('automation.benefits')}</h3>
                    <ul className="space-y-3">
                      {((t('automation.benefitsList') as unknown) as string[]).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="rounded-full px-8">
                    {t('automation.cta')}
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Academy Section */}
          <section id="academy" className="py-36 px-6 md:px-10 bg-primary/5">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="section-heading mb-4">
                    {t('academy.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('academy.description')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="light-card p-8 rounded-xl h-full">
                    <h3 className="text-xl font-bold mb-4">{t('academy.services')}</h3>
                    <ul className="space-y-3">
                      {((t('academy.features') as unknown) as string[]).map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-8 rounded-xl flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-4">{t('academy.benefits')}</h3>
                    <ul className="space-y-3">
                      {((t('academy.benefitsList') as unknown) as string[]).map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="rounded-full px-8">
                    {t('academy.cta')}
                  </Button>
                </div>
              </div>
            </div>
          </section>
          
          {/* About Us Section */}
          <section id="about" className="py-36 px-6 md:px-10">
            <div className="container mx-auto">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="section-heading mb-4">
                    {t('about.title')}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    {t('about.description')}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="light-card p-8 rounded-xl h-full">
                    <h3 className="text-xl font-bold mb-4">{t('about.mission')}</h3>
                    <p className="text-muted-foreground">{t('about.missionText')}</p>
                  </div>
                  
                  <div className="bg-primary/5 p-8 rounded-xl h-full">
                    <h3 className="text-xl font-bold mb-4">{t('about.approach')}</h3>
                    <p className="text-muted-foreground">{t('about.approachText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ServicesSection;
