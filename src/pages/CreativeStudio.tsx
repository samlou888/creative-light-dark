import React from 'react';
import CreativeStudioLayout from '@/layouts/CreativeStudioLayout';
import SectionHero from '@/components/ui/section-hero';
import { WireframeHead } from '@/components/graphics/WireframeHead';

const CreativeStudio = () => {
  return (
    <CreativeStudioLayout>
      <SectionHero
        badgeText="Creative Studio"
        title="Kreative KI-Lösungen für dein Business"
        description="Wir helfen dir dabei, deine kreativen Prozesse mit KI zu optimieren und zu automatisieren."
        buttonText="Jetzt Beratungsgespräch vereinbaren"
      />
      <div className="relative w-full max-w-5xl mx-auto">
        <WireframeHead className="w-full h-auto" />
      </div>
      
    </CreativeStudioLayout>
  );
};

export default CreativeStudio;
