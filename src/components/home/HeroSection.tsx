
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import WireframeHead from '../graphics/WireframeHead';

const HeroSection = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="hero-heading opacity-0 animate-slide-up-fade">
              {isCreativeMode ? (
                t('hero.creative.heading')
              ) : (
                t('hero.automation.heading')
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {isCreativeMode 
                ? t('hero.creative.description')
                : t('hero.automation.description')
              }
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              <a href="#contact" className={`primary-btn ${isCreativeMode ? 'neon-glow' : ''}`}>
                {isCreativeMode ? t('hero.creative.primaryButton') : t('hero.automation.primaryButton')}
              </a>
              <a href="#automation" className="secondary-btn">
                {isCreativeMode ? t('hero.creative.secondaryButton') : t('hero.automation.secondaryButton')}
              </a>
            </div>
          </div>
          
          <WireframeHead />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
