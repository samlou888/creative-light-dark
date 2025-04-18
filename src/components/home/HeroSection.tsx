
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import WireframeHead from '../graphics/WireframeHead';

const HeroSection = () => {
  const { isCreativeMode } = useTheme();

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="hero-heading opacity-0 animate-slide-up-fade">
              {isCreativeMode ? (
                <>
                  Grafik, Web & <span className="text-[#00FF66]">Content</span>.
                </>
              ) : (
                <>Automate. Optimize. <span className="text-primary">Scale.</span></>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {isCreativeMode 
                ? "Kreativität mit künstlicher Intelligenz – für Marken, die auffallen, performen und wachsen wollen."
                : "Transformieren Sie Ihr Unternehmen mit maßgeschneiderten AI-Lösungen. Wir helfen Ihnen, effizienter zu arbeiten und besser zu skalieren."
              }
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              <a href="#contact" className="primary-btn neon-glow">
                {isCreativeMode ? "Projekt starten" : "Jetzt Termin buchen"}
              </a>
              <a href="#showcase" className="secondary-btn">
                {isCreativeMode ? "Projekte entdecken" : "Demo anfordern"}
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

