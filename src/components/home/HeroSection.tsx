
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import BrainWireframe from '../graphics/BrainWireframe';

const HeroSection = () => {
  const { isCreativeMode } = useTheme();

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="hero-heading">
              {isCreativeMode ? (
                <>Design. Create. <span className="text-primary">Disrupt.</span></>
              ) : (
                <>Automate. Optimize. <span className="text-primary">Scale.</span></>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              {isCreativeMode 
                ? "Entfesseln Sie die Kraft künstlicher Intelligenz in Ihrem kreativen Prozess. Wir erschaffen digitale Experiences, die begeistern."
                : "Transformieren Sie Ihr Unternehmen mit maßgeschneiderten AI-Lösungen. Wir helfen Ihnen, effizienter zu arbeiten und besser zu skalieren."
              }
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="primary-btn neon-glow">
                {isCreativeMode ? "Projekt starten" : "Jetzt Termin buchen"}
              </a>
              <a href="#showcase" className="secondary-btn">
                {isCreativeMode ? "Showreel ansehen" : "Demo anfordern"}
              </a>
            </div>
          </div>
          
          <div className={`relative ${isCreativeMode ? 'accent-glow' : ''}`}>
            <BrainWireframe isCreativeMode={isCreativeMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
