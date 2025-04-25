
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ShowcaseSection = () => {
  const { mode } = useTheme();
  
  return (
    <section id="showcase" className="py-24 px-6 md:px-10">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-16">Nos Réalisations</h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          Cette section présentera nos projets et études de cas.
        </p>
      </div>
    </section>
  );
};

export default ShowcaseSection;
