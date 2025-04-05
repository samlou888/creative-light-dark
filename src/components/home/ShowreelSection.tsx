
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const ShowreelSection = () => {
  const { t } = useLanguage();

  return (
    <section id="showreel" className="py-36 px-6 md:px-10 bg-gradient-to-br from-black to-[#0c0225]">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="section-heading mb-4 text-white">
            Showreel – <span className="text-primary">Unsere Arbeit in Bewegung</span>
          </h2>
          <p className="text-lg text-gray-300">
            Ein visueller Einblick in unsere Branding-, Design- und Digitalprojekte. Alles, was wirkt – in unter 90 Sekunden.
          </p>
        </div>
        
        <motion.div
          className="max-w-4xl mx-auto relative overflow-hidden rounded-xl aspect-video mb-8 border border-white/10 neo-blur"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Video Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center">
            {/* Play button */}
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
        </motion.div>
        
        <div className="text-center text-gray-400 mb-8">
          <p>Showreel in Bearbeitung – demnächst verfügbar</p>
        </div>
        
        <div className="text-center">
          <Button className="rounded-full px-8 py-6 text-lg neon-glow">
            Projekt starten
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
