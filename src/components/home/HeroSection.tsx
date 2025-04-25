
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import WireframeHead from '../graphics/WireframeHead';
import { Calendar } from 'lucide-react';

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
                <>Automatisiere. Optimiere. <span className="text-primary">Skaliere.</span></>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {mode === 'academy' 
                ? "Online-Workshops, Schulungen & Coachings – für Unternehmen, die ihre Mitarbeiter weiterentwickeln wollen, um mit KI effizienter, schneller und smarter zu arbeiten."
                : mode === 'creative'
                ? "Kreativität mit künstlicher Intelligenz – für Marken, die auffallen, performen und wachsen wollen."
                : "Transformieren Sie Ihr Unternehmen mit maßgeschneiderten AI-Lösungen. Wir helfen Ihnen, effizienter zu arbeiten, Prozesse zu optimieren und zu skalieren."
              }
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              {mode === 'academy' ? (
                <a href="#contact" className="primary-btn flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schulung buchen
                </a>
              ) : mode === 'creative' ? (
                <a href="#contact" className="primary-btn">Projekt starten</a>
              ) : (
                <a href="#contact" className="primary-btn">Jetzt Termin buchen</a>
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

