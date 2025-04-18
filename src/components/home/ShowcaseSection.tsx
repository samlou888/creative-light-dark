import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';

const ShowcaseSection = () => {
  const { isCreativeMode } = useTheme();
  const isMobile = useIsMobile();

  const projects = isCreativeMode 
    ? [
        {
          id: 1,
          title: 'Bento Build',
          category: 'Webseiten & Apps',
          description: 'Webdesign & App-Konzept für ein digitales Architektur-Studio. Minimalistisches Design, mobile Optimierung und AI-gestütztes Formular.',
          image: '/photo-1488590528505-98d2b5aba04b.jpeg'
        },
        {
          id: 2,
          title: 'Raw Energy',
          category: 'Grafik & Branding',
          description: 'Logo, Farben, Schrift und Verpackung für ein Fitness-Start-up. Kraftvoll, clean, markant.',
          image: '/photo-1581091226825-a6a2a5aee158.jpeg'
        },
        {
          id: 3,
          title: 'Studio Verde',
          category: 'Social Media & Content',
          description: 'Instagram-Kampagne & Video-Editing für ein nachhaltiges Mode-Label. Reels, Stories, Paid Ads – alles KI-beschleunigt produziert.',
          image: '/photo-1486312338219-ce68d2c6f44d.jpeg'
        },
      ]
    : [
        { id: 1, title: 'Workflow Automatisierung', category: 'Prozess', image: '/placeholder.svg' },
        { id: 2, title: 'Datenanalyse Dashboard', category: 'Analytics', image: '/placeholder.svg' },
        { id: 3, title: 'Digitale Transformation', category: 'Strategie', image: '/placeholder.svg' },
        { id: 4, title: 'Unternehmensbranding', category: 'Design', image: '/placeholder.svg' },
      ];

  return (
    <section id="showcase" className="py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-3">
            {isCreativeMode ? "Unsere Projekte" : <><span className="text-primary">Projekte</span></>}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode 
              ? "Entdecken Sie einige unserer innovativsten und kreativsten Arbeiten aus unserem Creative Studio."
              : "Sehen Sie, wie wir Unternehmen dabei helfen, ihre Ziele durch maßgeschneiderte AI-Lösungen zu erreichen."
            }
          </p>
        </div>

        {isCreativeMode ? (
          <div className="relative max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((project) => (
                  <CarouselItem key={project.id}>
                    <div className={`
                      overflow-hidden rounded-xl transition-all duration-500
                      ${isCreativeMode ? 'dark-card hover:border-primary/60' : 'light-card'}
                    `}>
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="text-sm font-medium text-primary mb-2">{project.category}</div>
                        <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                        <p className="text-muted-foreground mb-6">{project.description}</p>
                        <Button 
                          variant="outline"
                          className="w-full md:w-auto hover:bg-primary hover:text-primary-foreground"
                        >
                          Projekt ansehen
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className={`${isMobile ? 'mt-6' : ''}`}>
                <CarouselPrevious className={`
                  ${isMobile ? 'relative !-left-0 translate-y-0 mr-2' : ''}
                  ${isCreativeMode ? 'hover:border-primary hover:text-primary' : ''}
                `} />
                <CarouselNext className={`
                  ${isMobile ? 'relative !-right-0 translate-y-0 ml-2' : ''}
                  ${isCreativeMode ? 'hover:border-primary hover:text-primary' : ''}
                `} />
              </div>
            </Carousel>
          </div>
        ) : (
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`group overflow-hidden transition-all ${
                  isCreativeMode 
                  ? 'rounded-xl dark-card hover:neon-glow' 
                  : 'rounded-xl light-card'
                }`}
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-5">
                  <span className="text-sm font-medium text-primary">{project.category}</span>
                  <h3 className="text-lg font-bold mt-2">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className={`inline-block primary-btn ${isCreativeMode ? 'neon-glow' : ''}`}
          >
            {isCreativeMode ? "Dein Projekt starten" : "Ähnliches Projekt starten"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
