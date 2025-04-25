
import React, { useEffect } from 'react';
import CreativeStudioLayout from '@/layouts/CreativeStudioLayout';
import SectionHero from '@/components/ui/section-hero';
import { WireframeHead } from '@/components/graphics/WireframeHead';

const CreativeStudio = () => {
  // Force dark mode at component level as well
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.classList.add('creative-mode');
    
    return () => {
      // Only remove classes if we're navigating away from creative studio
      if (!window.location.pathname.includes('creative-studio')) {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('creative-mode');
      }
    };
  }, []);

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
