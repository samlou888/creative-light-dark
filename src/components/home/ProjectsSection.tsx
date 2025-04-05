
import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Slider } from "@/components/ui/slider";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const [currentProject, setCurrentProject] = useState(0);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Dummy project data
  const projects = [
    {
      id: 'project1',
      title: 'Brandrelaunch StartupX',
      category: 'Branding',
      image: '/placeholder.svg',
      description: 'Kompletter Markenrelaunch für ein Tech-Startup mit neuem Corporate Design, Website und Kommunikationsstrategie.',
      details: {
        challenge: 'Veralteter Markenauftritt, unklare Positionierung',
        solution: 'Neupositionierung und vollständiges Redesign mit KI-basierten Design-Iterationen',
        outcome: 'Erhöhte Conversion-Rate um 27%, verbesserte Kundenbindung'
      }
    },
    {
      id: 'project2',
      title: 'Social Media Kampagne',
      category: 'Social Media',
      image: '/placeholder.svg',
      description: 'Crossmediale Kampagne für die Produkteinführung eines DTC-Brands mit Content-Strategie und Publishing.',
      details: {
        challenge: 'Neue Marke ohne Community und mit limitiertem Budget',
        solution: 'Fokus auf UGC und algorithmisch optimierte Content-Strategie',
        outcome: '340% ROI innerhalb der ersten 3 Monate, 12.500 neue Follower'
      }
    },
    {
      id: 'project3',
      title: 'E-Commerce Relaunch',
      category: 'Web Development',
      image: '/placeholder.svg',
      description: 'Neugestaltung eines E-Commerce-Shops mit optimierter Customer Experience und technischer Performance.',
      details: {
        challenge: 'Hohe Abbruchraten im Checkout, komplexe Legacy-Architektur',
        solution: 'Headless Commerce-Ansatz mit optimierter UX und neuem visuellen Design',
        outcome: 'Conversion-Rate-Steigerung um 43%, Reduzierung der Seitenladezeit um 67%'
      }
    },
    {
      id: 'project4',
      title: 'Produktvideo Serie',
      category: 'Motion Design',
      image: '/placeholder.svg',
      description: 'Serie von animierten Produkterklärungsvideos für ein SaaS-Unternehmen aus dem Bereich FinTech.',
      details: {
        challenge: 'Komplexe Produktfeatures verständlich erklären',
        solution: '3D-Animationen und storytelling-fokussierte Skripts mit KI-Visualisierung',
        outcome: '34% höhere Feature-Adoption, 22% Rückgang der Support-Anfragen'
      }
    }
  ];
  
  // Navigate between projects on mobile
  const handlePrevProject = () => {
    setCurrentProject(prev => (prev === 0 ? projects.length - 1 : prev - 1));
  };
  
  const handleNextProject = () => {
    setCurrentProject(prev => (prev === projects.length - 1 ? 0 : prev + 1));
  };
  
  // Scroll to project detail section
  const scrollToProjectDetail = (projectId: string) => {
    const element = document.getElementById(projectId);
    if (element) {
      const yOffset = -100; // Offset from the top
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Projects Grid/Carousel Section */}
      <section id="projects" className="py-36 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="section-heading mb-4">
              Unsere <span className="text-primary">Projekte</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Einblicke in unsere Arbeit und die Erfolge unserer Kunden. Branding, Design, Digital und mehr.
            </p>
          </div>
          
          {/* Desktop view: Project Grid */}
          {!isMobile && (
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="rounded-xl overflow-hidden dark-card hover:border-primary/40 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => scrollToProjectDetail(`detail-${project.id}`)}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-bold">{project.title}</h3>
                      <p className="text-white/80 text-sm">{project.category}</p>
                      <Button variant="outline" size="sm" className="mt-2 bg-black/50 border-white/30 text-white">
                        Mehr Details
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
          
          {/* Mobile view: Project Carousel */}
          {isMobile && (
            <div className="md:hidden" ref={projectsRef}>
              <div className="relative">
                {/* Current project */}
                <div className="rounded-xl overflow-hidden dark-card border-primary/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold">{projects[currentProject].title}</h3>
                    <p className="text-sm text-primary">{projects[currentProject].category}</p>
                    <p className="text-sm text-muted-foreground mt-2">{projects[currentProject].description}</p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 w-full" 
                      onClick={() => scrollToProjectDetail(`detail-${projects[currentProject].id}`)}
                    >
                      Mehr Details
                    </Button>
                  </div>
                </div>
                
                {/* Project navigation controls */}
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary"
                    onClick={handlePrevProject}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="text-sm text-muted-foreground">
                    Projekt {currentProject + 1}/{projects.length}
                  </div>
                  
                  <button
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-primary/10 text-primary"
                    onClick={handleNextProject}
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Detail Sections */}
      {projects.map((project) => (
        <section 
          key={`detail-${project.id}`} 
          id={`detail-${project.id}`} 
          className="py-20 px-6 md:px-10 bg-gradient-to-br from-black to-[#0c0225]/60"
        >
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-primary mb-4">{project.category}</p>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="neo-blur p-3 rounded-lg">
                    <h4 className="text-white/70 text-sm">Challenge:</h4>
                    <p className="text-white text-sm">{project.details.challenge}</p>
                  </div>
                  <div className="neo-blur p-3 rounded-lg">
                    <h4 className="text-white/70 text-sm">Solution:</h4>
                    <p className="text-white text-sm">{project.details.solution}</p>
                  </div>
                  <div className="neo-blur p-3 rounded-lg">
                    <h4 className="text-white/70 text-sm">Outcome:</h4>
                    <p className="text-white text-sm">{project.details.outcome}</p>
                  </div>
                </div>
                
                <Button className="mt-6 neon-glow">
                  Ähnliches Projekt anfragen
                </Button>
              </motion.div>
              
              <motion.div
                className="rounded-xl overflow-hidden"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-xl border border-white/10 flex items-center justify-center">
                  {/* Placeholder for project images/videos */}
                  <p className="text-white/50">Projekt Visualisierung</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ProjectsSection;
