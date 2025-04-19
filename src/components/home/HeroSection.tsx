
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import WireframeHead from '../graphics/WireframeHead';
import { Calendar, Clock } from 'lucide-react';

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
                <>
                  Automatisiere. Optimiere. <span className="text-neutral-900">Skaliere.</span>
                </>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {mode === 'academy' 
                ? "Online-Workshops, Schulungen & Coaching – für Unternehmen, die mit künstlicher Intelligenz effizienter werden, Kosten senken und neue Umsatzquellen erschließen wollen."
                : mode === 'creative'
                ? "Kreativität mit künstlicher Intelligenz – für Marken, die auffallen, performen und wachsen wollen."
                : "Wir bauen smarte Automationen, die deinen Alltag vereinfachen, dein Team entlasten und dein Business skalieren. Von E-Mail-Flows bis hin zu vollautomatisierten Workflows – alles aus einer Hand."
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
                  <a href="#contact" className="automation-btn-primary flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Jetzt analysieren lassen
                  </a>
                  <a href="#contact" className="automation-btn-secondary flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Online-Beratung buchen
                  </a>
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
