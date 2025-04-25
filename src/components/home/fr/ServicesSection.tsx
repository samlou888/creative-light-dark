
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GraduationCap, MessageSquareText, BookText, Palette, Globe, Video, Workflow, Mail, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

// Define service data for each mode
const academyServices = [
  {
    id: 'academy-1',
    icon: <GraduationCap className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Formation en IA',
    description: 'Ateliers et formations personnalisés pour qualifier votre équipe aux applications d\'IA.'
  },
  {
    id: 'academy-2',
    icon: <BookText className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Matériel pédagogique',
    description: 'Documentation complète et matériels d\'apprentissage pratiques pour une auto-formation efficace.'
  },
  {
    id: 'academy-3',
    icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Conseil',
    description: 'Conseil individuel sur l\'intégration de l\'IA dans les processus et stratégies existants.'
  }
];

const creativeServices = [
  {
    id: 'creative-1',
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: 'Design & Conception',
    description: 'Concepts créatifs et designs pour votre présence numérique à l\'aide d\'outils assistés par IA.'
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
];

const automationServices = [
  {
    id: 'automation-1',
    icon: <Workflow className="w-6 h-6 text-primary" />,
    title: 'Automatisation des processus',
    description: 'Optimisation et automatisation de vos processus d\'entreprise grâce à des solutions d\'IA sur mesure.'
  },
  {
    id: 'automation-2',
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'Développement IA',
    description: 'Développement d\'applications IA spécialisées pour vos besoins commerciaux individuels.'
  },
  {
    id: 'automation-3',
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: 'Analyse de données',
    description: 'Analyse complète de vos données d\'entreprise pour obtenir des informations précieuses.'
  }
];

const ServicesSection = () => {
  const { mode } = useTheme();
  const services = mode === 'academy' ? academyServices : mode === 'creative' ? creativeServices : automationServices;

  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className={`section-heading mb-4 hover-glow ${
            mode === 'automation' ? 'title-automation' :
            mode === 'creative' ? 'title-creative' :
            mode === 'academy' ? 'title-academy' : ''
          }`} id="services-heading">
            Nos Services
          </h2>
          <p className="text-lg text-muted-foreground">
            {mode === 'academy' 
              ? "Nous proposons des solutions sur mesure pour votre entreprise - de la formation au conseil individuel."
              : mode === 'creative'
              ? "Nous combinons expertise créative et technologie avancée pour créer des solutions uniques et avant-gardistes."
              : "Nous proposons des solutions d'IA complètes pour les entreprises qui souhaitent optimiser leurs processus et exploiter leur plein potentiel."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
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
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
