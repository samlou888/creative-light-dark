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
import { 
  Layout, 
  FileText, 
  Workflow, 
  PenTool, 
  Video, 
  Smartphone, 
  Building2,
  Target,
  Users 
} from 'lucide-react';

const ShowcaseSection = () => {
  const { mode } = useTheme();
  const isMobile = useIsMobile();
  
  const automationCases = [
    {
      id: 1,
      company: 'Cloudnest',
      image: '/photo-1488590528505-98d2b5aba04b.jpeg',
      title: 'Cloud-Infrastructure Automatisierung',
      problem: 'Manuelle Server-Verwaltung kostete 20+ Stunden pro Woche',
      solution: 'Implementierung einer vollautomatischen DevOps-Pipeline',
      result: '85% Zeitersparnis bei der Server-Administration',
      icons: [
        { icon: <Layout className="w-5 h-5" />, label: 'Automation' },
        { icon: <Workflow className="w-5 h-5" />, label: 'Workflow' },
        { icon: <FileText className="w-5 h-5" />, label: 'Dokumentation' }
      ]
    },
    {
      id: 2,
      company: 'Studio Verde',
      image: '/photo-1486312338219-ce68d2c6f44d.jpeg',
      title: 'E-Commerce Prozessoptimierung',
      problem: 'Unübersichtliche Bestellabwicklung mit vielen manuellen Schritten',
      solution: 'Aufbau einer automatisierten Order-Processing-Pipeline',
      result: 'Bestellabwicklung 3x schneller, 0 Fehler seit Launch',
      icons: [
        { icon: <Layout className="w-5 h-5" />, label: 'Automation' },
        { icon: <Smartphone className="w-5 h-5" />, label: 'App' },
        { icon: <PenTool className="w-5 h-5" />, label: 'Design' }
      ]
    },
    {
      id: 3,
      company: 'Legalshift',
      image: '/photo-1581091226825-a6a2a5aee158.jpeg',
      title: 'Legal Document Automation',
      problem: 'Dokumente wurden manuell erstellt, hoher Zeitaufwand',
      solution: 'KI-gestützte Automatisierung der Vertragserstellung',
      result: 'Erstellungszeit pro Dokument von 2h auf 10min reduziert',
      icons: [
        { icon: <Layout className="w-5 h-5" />, label: 'Automation' },
        { icon: <FileText className="w-5 h-5" />, label: 'Dokumente' },
        { icon: <Video className="w-5 h-5" />, label: 'Tutorials' }
      ]
    }
  ];

  const creativeProjects = [
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
    }
  ];

  const academyCaseStudies = [
    {
      id: 1,
      icon: <Building2 size={32} className="text-[#00CFFF]" />,
      title: 'Sales-Team automatisiert mit AI',
      company: 'Tech-Start-up (15 Mitarbeitende)',
      project: 'Live-Workshop + Template-Set zur Automatisierung von Angeboten & E-Mails.',
      result: '40 % weniger Admin-Aufwand, schnellere Deals.'
    },
    {
      id: 2,
      icon: <Target size={32} className="text-[#D2A8FF]" />,
      title: 'Marketing-Team boosted Content mit KI',
      company: 'Werbeagentur (25 Mitarbeitende)',
      project: 'Prompt-Coachings + Vorlagen für Kampagnen, Headlines & Creatives.',
      result: '3x mehr Output, weniger Reibung im kreativen Prozess.'
    },
    {
      id: 3,
      icon: <Users size={32} className="text-[#00CFFF]" />,
      title: 'HR & Support lernen mit Lernpfad',
      company: 'E-Commerce Brand (50+ Mitarbeitende)',
      project: 'Onboarding-Kurse & AI-Trainings für neue Mitarbeitende via Online-Plattform.',
      result: 'Schnellere Einarbeitung & bessere interne Kommunikation.'
    }
  ];

  const projects = mode === 'academy' ? academyCaseStudies : mode === 'creative' ? creativeProjects : automationCases;

  return (
    <section id="showcase" className="py-10 px-6 md:px-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-3">
            {mode === 'academy' 
              ? "Was unsere Kunden erreicht haben"
              : mode === 'creative' 
              ? "Unsere Projekte" 
              : "Erfolgreiche Automatisierungen"
            }
          </h2>
          <p className="text-lg text-muted-foreground">
            {mode === 'academy'
              ? "Erfahren Sie, wie andere Unternehmen von unseren AI-Trainings profitiert haben."
              : mode === 'creative'
              ? "Entdecken Sie einige unserer innovativsten und kreativsten Arbeiten aus unserem Creative Studio."
              : "Erfahren Sie, wie wir Prozesse erfolgreich automatisiert und optimiert haben."
            }
          </p>
        </div>

        {mode === 'automation' && (
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
                    <div className="p-6 md:p-8 bg-white dark:bg-black/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                      <div className="mb-6 relative w-full h-48 rounded-lg overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.company} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-medium text-primary mb-2">{project.company}</h4>
                      <h3 className="text-2xl font-bold mb-6">{project.title}</h3>
                      <div className="space-y-4 mb-6 text-left max-w-2xl mx-auto">
                        <div>
                          <p className="font-medium text-primary">Problem</p>
                          <p className="text-muted-foreground">{project.problem}</p>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Lösung</p>
                          <p className="text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Ergebnis</p>
                          <p className="text-muted-foreground">{project.result}</p>
                        </div>
                      </div>
                      <div className="flex justify-center gap-8 mb-6">
                        {project.icons.map((icon, index) => (
                          <div key={index} className="flex flex-col items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                              {icon.icon}
                            </div>
                            <span className="text-sm text-muted-foreground">{icon.label}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full hover:bg-primary hover:text-white">
                        Projekt ansehen
                      </Button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="hover:bg-primary hover:text-white" />
                <CarouselNext className="hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </div>
        )}

        {mode === 'creative' && (
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`group overflow-hidden transition-all ${
                  mode === 'creative' 
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

        {mode === 'academy' && (
          <div className="relative max-w-4xl mx-auto">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {projects.map((study) => (
                  <CarouselItem key={study.id}>
                    <div className="p-6 md:p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                        {study.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium text-primary">
                            {mode === 'academy' ? 'Unternehmen' : 'Branche'}
                          </p>
                          <p className="text-muted-foreground">
                            {mode === 'academy' ? study.company : study.industry}
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Projekt</p>
                          <p className="text-muted-foreground">{study.project}</p>
                        </div>
                        <div>
                          <p className="font-medium text-primary">Ergebnis</p>
                          <p className="text-muted-foreground">{study.result}</p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <Button 
                          variant="outline"
                          className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                          Ähnliches Projekt starten
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className={`${isMobile ? 'mt-6' : ''}`}>
                <CarouselPrevious className={`
                  ${isMobile ? 'relative !-left-0 translate-y-0 mr-2' : ''}
                  hover:bg-primary hover:text-white
                `} />
                <CarouselNext className={`
                  ${isMobile ? 'relative !-right-0 translate-y-0 ml-2' : ''}
                  hover:bg-primary hover:text-white
                `} />
              </div>
            </Carousel>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className={`inline-block primary-btn ${mode === 'creative' ? 'neon-glow' : ''}`}
          >
            {mode === 'academy' 
              ? "Jetzt Beratung vereinbaren" 
              : mode === 'creative' 
              ? "Dein Projekt starten" 
              : "Ähnliches Projekt starten"
            }
          </a>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
