
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import WireframeHead from '../graphics/WireframeHead';
import { Calendar, BookOpen } from 'lucide-react';

const HeroSection = () => {
  const { mode } = useTheme();

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="hero-heading opacity-0 animate-slide-up-fade">
              {mode === 'academy' ? (
                <>
                  AI lernen. <span className="text-primary">Business skalieren.</span>
                </>
              ) : mode === 'creative' ? (
                <>
                  Grafiker, Webdesigner & <span className="text-[#00FF66]">Content Creator</span>.
                </>
              ) : (
                <>Automate. Optimize. <span className="text-primary">Scale.</span></>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {mode === 'academy' 
                ? "Online-Workshops, Schulungen & Coaching – für Unternehmen, die mit künstlicher Intelligenz effizienter werden, Kosten senken und neue Umsatzquellen erschließen wollen."
                : mode === 'creative'
                ? "Kreativität mit künstlicher Intelligenz – für Marken, die auffallen, performen und wachsen wollen."
                : "Transformieren Sie Ihr Unternehmen mit maßgeschneiderten AI-Lösungen. Wir helfen Ihnen, effizienter zu arbeiten und besser zu skalieren."
              }
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              {mode === 'academy' ? (
                <>
                  <a href="#contact" className="primary-btn flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Schulung buchen
                  </a>
                  <a href="#contact" className="secondary-btn flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Gratis Erstgespräch
                  </a>
                </>
              ) : mode === 'creative' ? (
                <>
                  <a href="#contact" className="primary-btn">Projekt starten</a>
                  <a href="#showcase" className="secondary-btn">Projekte entdecken</a>
                </>
              ) : (
                <>
                  <a href="#contact" className="primary-btn">Jetzt Termin buchen</a>
                  <a href="#showcase" className="secondary-btn">Demo anfordern</a>
                </>
              )}
            </div>
          </div>
          
          <WireframeHead />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
