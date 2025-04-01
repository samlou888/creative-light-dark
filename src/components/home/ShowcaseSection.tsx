
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

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
    <section id="showcase" className="py-14 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-10 max-w-3xl mx-auto">
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
        
        {/* Desktop view: Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`group overflow-hidden transition-all ${
                isCreativeMode 
                ? 'rounded-xl dark-card hover:neon-glow' 
                : 'rounded-xl light-card'
              }`}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="p-3">
                <span className="text-sm font-medium text-primary">{project.category}</span>
                <h3 className="text-base font-bold mt-1">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view: Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:basis-1/2 lg:basis-1/3">
                  <div 
                    className={`group overflow-hidden transition-all ${
                      isCreativeMode 
                      ? 'rounded-xl dark-card hover:neon-glow' 
                      : 'rounded-xl light-card'
                    }`}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="p-3">
                      <span className="text-sm font-medium text-primary">{project.category}</span>
                      <h3 className="text-base font-bold mt-1">{project.title}</h3>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4" />
            <CarouselNext className="hidden sm:flex -right-4" />
          </Carousel>
        </div>
        
        <div className="text-center mt-8">
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
