
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WireframeHead from '@/components/graphics/WireframeHead';
import CoursesSection from '@/components/academy/CoursesSection';
import SectionGrid from '@/components/ui/section-grid';
import BenefitsSection from '@/components/academy/BenefitsSection';
import SectionCTA from '@/components/ui/section-cta';

const formats = [
  { title: "Live", description: "Vor-Ort Workshops mit praktischen Übungen" },
  { title: "Digital", description: "Online-Kurse im eigenen Tempo" },
  { title: "Hybrid", description: "Flexible Kombination aus Live und Digital" }
];

const Academy = () => {
  const { mode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <section className="pt-24 pb-16">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-center lg:text-left">
                <div className="inline-block bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1 rounded-full mb-4">
                  AI Academy
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Lerne, wie du AI zu deinem Vorteil nutzt.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Unsere Academy bietet Workshops, Kurse und 1:1 Coachings – speziell für den praktischen Einsatz in Alltag & Business.
                </p>
                <button className="primary-btn">
                  Jetzt Kursübersicht anfordern
                </button>
              </div>
              <div className="relative">
                <WireframeHead className="w-full" />
              </div>
            </div>
          </div>
        </section>

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
