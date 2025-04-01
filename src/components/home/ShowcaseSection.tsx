
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ShowcaseSection = () => {
  const { isCreativeMode } = useTheme();

  // Mockup project data
  const projects = isCreativeMode 
    ? [
        { id: 1, title: 'Neurale Branding Identität', category: 'Branding', image: '/placeholder.svg' },
        { id: 2, title: 'KI-generierte Produktvisualisierung', category: 'Design', image: '/placeholder.svg' },
        { id: 3, title: 'Immersive Web Experience', category: 'Web', image: '/placeholder.svg' },
        { id: 4, title: 'Futuristische UI Konzepte', category: 'App Design', image: '/placeholder.svg' },
      ]
    : [
        { id: 1, title: 'Workflow Automatisierung', category: 'Prozess', image: '/placeholder.svg' },
        { id: 2, title: 'Datenanalyse Dashboard', category: 'Analytics', image: '/placeholder.svg' },
        { id: 3, title: 'Digitale Transformation', category: 'Strategie', image: '/placeholder.svg' },
        { id: 4, title: 'Unternehmensbranding', category: 'Design', image: '/placeholder.svg' },
      ];

  return (
    <section id="showcase" className="py-20 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4">
            {isCreativeMode ? (
              <>Kreative <span className="text-primary">Projekte</span></>
            ) : (
              <>Erfolgreiche <span className="text-primary">Projekte</span></>
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode 
              ? "Entdecken Sie einige unserer innovativsten und disruptivsten Arbeiten aus unserem Creative Studio."
              : "Sehen Sie, wie wir Unternehmen dabei helfen, ihre Ziele durch maßgeschneiderte AI-Lösungen zu erreichen."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group overflow-hidden transition-all ${
                isCreativeMode 
                ? 'rounded-xl dark-card hover:neon-glow' 
                : 'rounded-xl light-card'
              }`}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <span className="text-sm font-medium text-primary">{project.category}</span>
                <h3 className="text-lg font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className={`inline-block primary-btn ${isCreativeMode ? 'neon-glow' : ''}`}
          >
            {isCreativeMode ? "Ihr Projekt starten" : "Ähnliches Projekt starten"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
