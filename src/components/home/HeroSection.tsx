
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import WireframeHead from '../graphics/WireframeHead';
import { Calendar } from 'lucide-react';

const content = {
  academy: {
    en: {
      title: "Learn AI. Scale Business.",
      description: "Online workshops, training & coaching – for companies that want to develop their employees to work more efficiently, faster and smarter with AI.",
      button: "Book Training"
    },
    de: {
      title: "AI lernen. Business skalieren.",
      description: "Online-Workshops, Schulungen & Coachings – für Unternehmen, die ihre Mitarbeiter weiterentwickeln wollen, um mit KI effizienter, schneller und smarter zu arbeiten.",
      button: "Schulung buchen"
    },
    fr: {
      title: "Apprenez l'IA. Développez votre entreprise.",
      description: "Ateliers en ligne, formations et coaching – pour les entreprises qui souhaitent développer leurs employés pour travailler plus efficacement avec l'IA.",
      button: "Réserver une Formation"
    }
  },
  creative: {
    en: {
      title: "Graphic Designer, Web Designer & Content Creator.",
      description: "Creativity with artificial intelligence – for brands that want to stand out, perform and grow.",
      button: "Start Project"
    },
    de: {
      title: "Grafiker, Webdesigner & Content Creator.",
      description: "Kreativität mit künstlicher Intelligenz – für Marken, die auffallen, performen und wachsen wollen.",
      button: "Projekt starten"
    },
    fr: {
      title: "Designer Graphique, Web Designer & Créateur de Contenu.",
      description: "Créativité avec l'intelligence artificielle – pour les marques qui veulent se démarquer, performer et grandir.",
      button: "Démarrer un Projet"
    }
  },
  automation: {
    en: {
      title: "Automate. Optimize. Scale.",
      description: "Transform your business with custom AI solutions. We help you work more efficiently, optimize processes and scale.",
      button: "Book Call"
    },
    de: {
      title: "Automatisiere. Optimiere. Skaliere.",
      description: "Transformieren Sie Ihr Unternehmen mit maßgeschneiderten AI-Lösungen. Wir helfen Ihnen, effizienter zu arbeiten, Prozesse zu optimieren und zu skalieren.",
      button: "Jetzt Termin buchen"
    },
    fr: {
      title: "Automatisez. Optimisez. Développez.",
      description: "Transformez votre entreprise avec des solutions IA sur mesure. Nous vous aidons à travailler plus efficacement, optimiser vos processus et vous développer.",
      button: "Réserver un Appel"
    }
  }
};

const HeroSection = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const modeContent = content[mode][language];

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="hero-heading opacity-0 animate-slide-up-fade">
              {mode === 'academy' ? (
                <>
                  {modeContent.title.split('.').map((part, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ' '}
                      {index === 1 ? <span className="text-primary">{part}</span> : part}
                    </React.Fragment>
                  ))}
                </>
              ) : mode === 'creative' ? (
                <>
                  {modeContent.title.split('&').map((part, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ' & '}
                      {index === 1 ? <span className="text-[#00FF66]">{part}</span> : part}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                <>
                  {modeContent.title.split('.').map((part, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ' '}
                      {index === 2 ? <span className="text-primary">{part}</span> : part}
                    </React.Fragment>
                  ))}
                </>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {modeContent.description}
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              <a href="#contact" className="primary-btn flex items-center gap-2">
                {mode === 'academy' && <Calendar className="w-4 h-4" />}
                {modeContent.button}
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
