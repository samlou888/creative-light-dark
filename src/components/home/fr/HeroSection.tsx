
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import WireframeHead from '../../graphics/WireframeHead';
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
                  Apprendre l'IA. <span className="text-primary">Développer votre business.</span>
                </>
              ) : mode === 'creative' ? (
                <>
                  Graphiste, Web Designer & <span className="text-[#00FF66]">Créateur de Contenu</span>.
                </>
              ) : (
                <>Automatiser. Optimiser. <span className="text-primary">Développer.</span></>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {mode === 'academy' 
                ? "Ateliers en ligne, formations et coaching - pour les entreprises qui souhaitent développer leurs employés afin de travailler plus efficacement, plus rapidement et plus intelligemment avec l'IA."
                : mode === 'creative'
                ? "Créativité avec l'intelligence artificielle - pour les marques qui veulent se démarquer, performer et croître."
                : "Transformez votre entreprise avec des solutions d'IA sur mesure. Nous vous aidons à travailler plus efficacement, à optimiser les processus et à vous développer."
              }
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              {mode === 'academy' ? (
                <a href="#contact" className="primary-btn flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Réserver une formation
                </a>
              ) : mode === 'creative' ? (
                <a href="#contact" className="primary-btn">Démarrer un projet</a>
              ) : (
                <a href="#contact" className="primary-btn">Prendre rendez-vous</a>
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
