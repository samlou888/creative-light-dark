import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Palette, 
  Video, 
  Globe, 
  Sparkles, 
  ArrowRight, 
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SectionHero from '@/components/ui/section-hero';
import SectionCTA from '@/components/ui/section-cta';
import SectionGrid from '@/components/ui/section-grid';

const CreativeStudio = () => {
  const { mode, setMode } = useTheme();
  
  // Force creative mode on this page
  useEffect(() => {
    if (mode !== 'creative') {
      setMode('creative');
    }
  }, [mode, setMode]);
  
  // Animation variants
  const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  const serviceItems = [
    { 
      title: "Branding", 
      description: "Stärke deine Markenidentität mit KI-generierten Designs: Logos, Markenzeichen, Farbpaletten und Corporate Identity Systeme."
    },
    { 
      title: "Content Creation", 
      description: "Erzeuge einzigartigen Content mit KI-Technologie: Social Media Posts, Reels, Videos, Blogartikel und Newsletter."
    },
    { 
      title: "Web & App Design", 
      description: "Digitale Präsenzen mit KI-optimiertem Design: Landingpages, Websites, Webshops, Tools und Mobile App Interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="bg-gradient-to-b from-black to-[#0c0225] min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <SectionHero
          badgeText="AI Creative Studio"
          title="Design. Create. Disrupt."
          description="Wir gestalten Marken, Websites, Videos und Apps mit der Kraft von Künstlicher Intelligenz – schnell, stilvoll und zukunftsfähig."
          buttonText="Projekt starten"
          className="pt-32 pb-20 relative overflow-hidden"
        />
        
        {/* Background glow effects */}
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 bg-purple-800/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-[120px] animate-pulse-glow"></div>
        
        {/* Services Section */}
        <SectionGrid
          title="Unser Angebot"
          subtitle="Kreative Lösungen mit AI-Power für deine Marke"
          items={serviceItems}
          className="py-20 relative"
        />
        
        {/* Showcase Section */}
        <section className="py-20 relative">
          <div className="container mx-auto">
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="section-heading mb-4 text-white">Showcases</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Beispiele unserer AI-unterstützten Kreationen
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Showcase Items */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div 
                  key={item}
                  className="aspect-square bg-gradient-to-br from-purple-900/40 to-blue-900/40 rounded-lg overflow-hidden backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item * 0.1 }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-white/50">Projekt Mockup {item}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Statement Section */}
        <section className="py-20 relative">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-10 inline-flex p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full backdrop-blur-md">
                <Sparkles className="h-10 w-10 text-gradient-to-r from-purple-400 to-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400">
                "Wir kombinieren Strategie, Ästhetik & Speed."
              </h2>
              <p className="text-xl text-gray-300">
                Mit KI als kreativem Partner erschaffen wir einzigartige digitale Erlebnisse, 
                die deine Marke auf das nächste Level heben.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Section */}
        <SectionCTA
          title="Bereit für dein nächstes Projekt?"
          description="Lass uns gemeinsam etwas Außergewöhnliches erschaffen."
          buttonText="Projekt starten"
          className=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default CreativeStudio;
