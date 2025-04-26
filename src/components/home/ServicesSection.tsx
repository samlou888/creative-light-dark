import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Book, MessageSquareText, GraduationCap, Palette, Globe, Video, Workflow, Mail, Brain } from 'lucide-react';

const content = {
  en: {
    academy: {
      heading: "Our Offerings",
      description: "We offer tailored solutions for your company - from training to individual consulting.",
      services: [
        {
          id: 'academy-1',
          icon: <GraduationCap className="w-6 h-6 text-[#00CFFF]" />,
          title: 'AI Training',
          description: 'Customized workshops and training to qualify your team for AI applications.'
        },
        {
          id: 'academy-2',
          icon: <Book className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Learning Materials',
          description: 'Comprehensive documentation and practical learning materials for effective self-study.'
        },
        {
          id: 'academy-3',
          icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Consulting',
          description: 'Individual consulting on integrating AI into existing processes and strategies.'
        }
      ]
    },
    creative: {
      heading: "Our Offerings",
      description: "We combine creative expertise with advanced technology to create unique and forward-looking solutions.",
      services: [
        {
          id: 'creative-1',
          icon: <Palette className="w-6 h-6 text-primary" />,
          title: 'Design & Conception',
          description: 'Creative concepts and designs for your digital presence with AI-supported tools.'
        },
        {
          id: 'creative-2',
          icon: <Globe className="w-6 h-6 text-primary" />,
          title: 'Web & App Development',
          description: 'Modern websites and apps with integration of advanced AI functionalities.'
        },
        {
          id: 'creative-3',
          icon: <Video className="w-6 h-6 text-primary" />,
          title: 'Content Creation',
          description: 'AI-assisted creation of texts, videos and other content for your online presence.'
        }
      ]
    },
    automation: {
      heading: "Our Offerings",
      description: "We offer comprehensive AI solutions for companies that want to optimize their processes and reach their full potential.",
      services: [
        {
          id: 'automation-1',
          icon: <Workflow className="w-6 h-6 text-primary" />,
          title: 'Process Automation',
          description: 'Optimization and automation of your business processes through customized AI solutions.'
        },
        {
          id: 'automation-2',
          icon: <Brain className="w-6 h-6 text-primary" />,
          title: 'AI Development',
          description: 'Development of specialized AI applications for your individual business needs.'
        },
        {
          id: 'automation-3',
          icon: <Mail className="w-6 h-6 text-primary" />,
          title: 'Data Analysis',
          description: 'Comprehensive analysis of your business data to gain valuable insights.'
        }
      ]
    }
  },
  de: {
    academy: {
      heading: "Unsere Angebote",
      description: "Wir bieten maßgeschneiderte Lösungen für Ihr Unternehmen - von Schulungen bis hin zu individueller Beratung.",
      services: [
        {
          id: 'academy-1',
          icon: <GraduationCap className="w-6 h-6 text-[#00CFFF]" />,
          title: 'AI Schulungen',
          description: 'Maßgeschneiderte Workshops und Schulungen, um Ihr Team für KI-Anwendungen zu qualifizieren.'
        },
        {
          id: 'academy-2',
          icon: <Book className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Lernmaterialien',
          description: 'Umfassende Dokumentationen und praxisnahe Lernmaterialien für effektives Selbststudium.'
        },
        {
          id: 'academy-3',
          icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Beratung',
          description: 'Individuelle Beratung zur Integration von KI in bestehende Prozesse und Strategien.'
        }
      ]
    },
    creative: {
      heading: "Unsere Angebote",
      description: "Wir kombinieren kreative Expertise mit fortschrittlicher Technologie, um einzigartige und zukunftsweisende Lösungen zu schaffen.",
      services: [
        {
          id: 'creative-1',
          icon: <Palette className="w-6 h-6 text-primary" />,
          title: 'Design & Konzeption',
          description: 'Kreative Konzepte und Designs für Ihre digitale Präsenz mit KI-unterstützten Tools.'
        },
        {
          id: 'creative-2',
          icon: <Globe className="w-6 h-6 text-primary" />,
          title: 'Web & App Entwicklung',
          description: 'Moderne Webseiten und Apps mit Integration fortschrittlicher KI-Funktionalitäten.'
        },
        {
          id: 'creative-3',
          icon: <Video className="w-6 h-6 text-primary" />,
          title: 'Content Creation',
          description: 'KI-gestützte Erstellung von Texten, Videos und anderen Inhalten für Ihre Online-Präsenz.'
        }
      ]
    },
    automation: {
      heading: "Unsere Angebote",
      description: "Wir bieten umfassende AI-Lösungen für Unternehmen, die ihre Prozesse optimieren und ihr volles Potenzial ausschöpfen möchten.",
      services: [
        {
          id: 'automation-1',
          icon: <Workflow className="w-6 h-6 text-primary" />,
          title: 'Prozessautomatisierung',
          description: 'Optimierung und Automatisierung Ihrer Geschäftsprozesse durch maßgeschneiderte KI-Lösungen.'
        },
        {
          id: 'automation-2',
          icon: <Brain className="w-6 h-6 text-primary" />,
          title: 'AI Development',
          description: 'Entwicklung spezialisierter KI-Anwendungen für Ihre individuellen Unternehmensbedürfnisse.'
        },
        {
          id: 'automation-3',
          icon: <Mail className="w-6 h-6 text-primary" />,
          title: 'Datenanalyse',
          description: 'Umfassende Analyse Ihrer Unternehmensdaten zur Gewinnung wertvoller Insights.'
        }
      ]
    }
  },
  fr: {
    academy: {
      heading: "Nos Offres",
      description: "Nous proposons des solutions sur mesure pour votre entreprise - de la formation au conseil individuel.",
      services: [
        {
          id: 'academy-1',
          icon: <GraduationCap className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Formation en IA',
          description: 'Ateliers et formations personnalisés pour qualifier votre équipe aux applications d\'IA.'
        },
        {
          id: 'academy-2',
          icon: <Book className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Matériel pédagogique',
          description: 'Documentation complète et supports d\'apprentissage pratiques pour l\'auto-formation.'
        },
        {
          id: 'academy-3',
          icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
          title: 'Conseil',
          description: 'Conseil individuel sur l\'intégration de l\'IA dans les processus et stratégies existants.'
        }
      ]
    },
    creative: {
      heading: "Nos Offres",
      description: "Nous combinons expertise créative et technologie avancée pour créer des solutions uniques et innovantes.",
      services: [
        {
          id: 'creative-1',
          icon: <Palette className="w-6 h-6 text-primary" />,
          title: 'Design & Conception',
          description: 'Concepts créatifs et designs pour votre présence digitale avec des outils assistés par l\'IA.'
        },
        {
          id: 'creative-2',
          icon: <Globe className="w-6 h-6 text-primary" />,
          title: 'Développement Web & App',
          description: 'Sites web et applications modernes avec intégration de fonctionnalités IA avancées.'
        },
        {
          id: 'creative-3',
          icon: <Video className="w-6 h-6 text-primary" />,
          title: 'Création de Contenu',
          description: 'Création assistée par IA de textes, vidéos et autres contenus pour votre présence en ligne.'
        }
      ]
    },
    automation: {
      heading: "Nos Offres",
      description: "Nous proposons des solutions IA complètes pour les entreprises qui souhaitent optimiser leurs processus.",
      services: [
        {
          id: 'automation-1',
          icon: <Workflow className="w-6 h-6 text-primary" />,
          title: 'Automatisation des Processus',
          description: 'Optimisation et automatisation de vos processus métier grâce à des solutions IA personnalisées.'
        },
        {
          id: 'automation-2',
          icon: <Brain className="w-6 h-6 text-primary" />,
          title: 'Développement IA',
          description: 'Développement d\'applications IA spécialisées pour vos besoins professionnels.'
        },
        {
          id: 'automation-3',
          icon: <Mail className="w-6 h-6 text-primary" />,
          title: 'Analyse de Données',
          description: 'Analyse complète de vos données d\'entreprise pour obtenir des insights précieux.'
        }
      ]
    }
  }
};

const ServicesSection = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  
  const currentContent = content[language];
  const modeContent = mode === 'academy' ? currentContent.academy : 
                     mode === 'creative' ? currentContent.creative : 
                     currentContent.automation;
  
  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24">
      <div className="offers-section">
        <motion.h2 
          className="offers-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          id="services-heading"
        >
          {modeContent.heading}
        </motion.h2>
        
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground">
            {modeContent.description}
          </p>
        </div>
        
        <motion.div 
          className="offers-wrapper"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {modeContent.services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="offer-card hover-glow"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-150 ${
                mode === 'academy'
                  ? 'bg-[#00CFFF]/10'
                  : mode === 'creative'
                  ? 'bg-[#00FB5C]/10 shadow-[0_0_15px_rgba(0,251,92,0.3)]'
                  : 'bg-primary/10'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
