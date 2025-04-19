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
import { Users, FileText, Mail, Building2, Target } from 'lucide-react';

const ShowcaseSection = () => {
  const { mode } = useTheme();
  const isMobile = useIsMobile();

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
    },
  ];

  const automationCases = [
    {
      id: 1,
      icon: <Users size={32} className="text-primary" />,
      title: 'Onboarding-Prozess automatisiert',
      industry: 'IT-Dienstleister',
      project: 'Automatisiertes Mitarbeiter-Onboarding mit E-Mail-Flows, Formularen & Tool-Setup.',
      result: '80 % weniger manuelle Arbeit bei Neueinstellungen.'
    },
    {
      id: 2,
      icon: <Mail size={32} className="text-primary" />,
      title: 'Lead-Nurturing automatisiert',
      industry: 'B2B-Softwareunternehmen',
      project: 'E-Mail-Funnels, Lead-Scoring & Follow-ups via Make & ActiveCampaign.',
      result: '30 % mehr qualifizierte Leads bei gleichem Aufwand.'
    },
    {
      id: 3,
      icon: <FileText size={32} className="text-primary" />,
      title: 'Rechnungsprozesse automatisiert',
      industry: 'E-Commerce',
      project: 'Integration von Shop, Buchhaltung & E-Mail-Benachrichtigungen.',
      result: 'Rechnungsversand & Zahlungserinnerungen laufen automatisch – fehlerfrei.'
    }
  ];

  const projects = mode === 'academy' ? academyCaseStudies : mode === 'creative' ? creativeProjects : automationCases;

  return (
    <section id="showcase" className="py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-3">
            {mode === 'academy' 
              ? "Was unsere Kunden erreicht haben"
              : mode === 'creative' 
              ? "Unsere Projekte" 
              : "Was wir automatisiert haben"
            }
          </h2>
          <p className="text-lg text-muted-foreground">
            {mode === 'academy'
              ? "Erfahren Sie, wie andere Unternehmen von unseren AI-Trainings profitiert haben."
              : mode === 'creative'
              ? "Entdecken Sie einige unserer innovativsten und kreativsten Arbeiten aus unserem Creative Studio."
              : "Erfahren Sie, wie wir Unternehmen durch maßgeschneiderte Automatisierungslösungen unterstützen."
            }
          </p>
        </div>

        {mode === 'academy' || mode === 'automation' ? (
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
        ) : (
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
