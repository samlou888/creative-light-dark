
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHero from '@/components/ui/section-hero';
import CoursesSection from '@/components/academy/CoursesSection';
import SectionGrid from '@/components/ui/section-grid';
import BenefitsSection from '@/components/academy/BenefitsSection';
import SectionCTA from '@/components/ui/section-cta';
import { Button } from '@/components/ui/button';

const formats = [
  { title: "Live", description: "Vor-Ort Workshops mit praktischen Übungen" },
  { title: "Digital", description: "Online-Kurse im eigenen Tempo" },
  { title: "Hybrid", description: "Flexible Kombination aus Live und Digital" }
];

const Academy = () => {
  const { mode, setMode } = useTheme();

  const toggleBlueMode = () => {
    setMode(mode === 'blue' ? 'academy' : 'blue');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="absolute top-24 right-6 z-10">
          <Button 
            variant="outline" 
            onClick={toggleBlueMode}
            className="rounded-full"
          >
            {mode === 'blue' ? 'Normaler Modus' : 'Blue Mode'}
          </Button>
        </div>
        
        <SectionHero
          badgeText="AI Academy"
          title="Lerne, wie du AI zu deinem Vorteil nutzt."
          description="Unsere Academy bietet Workshops, Kurse und 1:1 Coachings – speziell für den praktischen Einsatz in Alltag & Business."
          buttonText="Jetzt Kursübersicht anfordern"
        />
        <CoursesSection />
        <SectionGrid
          title="Flexible Formate"
          subtitle="Wähle das Format, das am besten zu dir und deinen Lernpräferenzen passt."
          items={formats}
        />
        <BenefitsSection />
        <SectionCTA
          title="Starte deine KI-Reise noch heute"
          description="Von Anfänger bis Fortgeschrittene - wir begleiten dich auf jedem Schritt deines Weges."
          buttonText="Jetzt Kursübersicht anfordern"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Academy;

