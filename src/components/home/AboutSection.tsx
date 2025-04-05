
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Star, Award } from 'lucide-react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 px-6 md:px-10 bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Vision */}
          <div className="light-card flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Star size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Unsere Vision</h3>
            <p className="text-muted-foreground">
              Wir möchten die digitale Transformation für jedes Unternehmen zugänglich und nutzbar machen.
            </p>
          </div>

          {/* Team */}
          <div className="light-card flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Users size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Unser Team</h3>
            <p className="text-muted-foreground">
              Unser interdisziplinäres Expertenteam vereint Wissen aus KI, Softwareentwicklung, Design und Prozessoptimierung.
            </p>
          </div>

          {/* Values */}
          <div className="light-card flex flex-col items-center text-center p-8">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Award size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Unsere Werte</h3>
            <p className="text-muted-foreground">
              Innovation, Qualität, Zuverlässigkeit und kontinuierliches Lernen stehen im Zentrum unseres Handelns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
