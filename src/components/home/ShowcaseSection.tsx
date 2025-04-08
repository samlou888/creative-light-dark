
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import useEmblaCarousel from 'embla-carousel-react';

const ShowcaseSection = () => {
  const { isCreativeMode } = useTheme();
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  // Update current slide when carousel changes
  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrentSlide(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

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
    <section id="showcase" className="py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-6 max-w-3xl mx-auto">
          <h2 className="section-heading mb-3">
            {isCreativeMode ? (
              <>Kreative <span className="text-primary">Projekte</span></>
            ) : (
              <><span className="text-primary">Projekte</span></>
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode 
              ? "Entdecken Sie einige unserer innovativsten und disruptivsten Arbeiten aus unserem Creative Studio."
              : "Sehen Sie, wie wir Unternehmen dabei helfen, ihre Ziele durch maßgeschneiderte AI-Lösungen zu erreichen."
            }
          </p>
        </div>
        
        {/* Desktop view: Grid with larger sizes */}
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

        {/* Mobile view: Enhanced Carousel */}
        <div className="md:hidden">
          <div className="w-full" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] pl-4 md:basis-1/2 lg:basis-1/3">
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
                    
                    <div className="p-5">
                      <span className="text-sm font-medium text-primary">{project.category}</span>
                      <h3 className="text-lg font-bold mt-2">{project.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-4">
            <button 
              className="h-8 w-8 rounded-full flex items-center justify-center bg-background text-foreground border border-input mr-2"
              onClick={() => emblaApi?.scrollPrev()}
            >
              <span className="sr-only">Previous slide</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <div className="flex-1 max-w-xs">
              <Slider
                value={[currentSlide]}
                max={projects.length - 1}
                step={1}
                onValueChange={(value) => {
                  if (emblaApi) emblaApi.scrollTo(value[0]);
                }}
              />
            </div>
            <button 
              className="h-8 w-8 rounded-full flex items-center justify-center bg-background text-foreground border border-input ml-2"
              onClick={() => emblaApi?.scrollNext()}
            >
              <span className="sr-only">Next slide</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
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
