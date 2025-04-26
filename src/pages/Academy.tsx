import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionHero from '@/components/ui/section-hero';
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
      
      <main className="flex-grow container mx-auto max-w-7xl px-6 py-12">
        <section className="pt-24">
          <div className="light-card dark:dark-card rounded-2xl p-8 border border-primary/20">
            <SectionHero
              badgeText="AI Academy"
              title={<span className="academy-animated-text">Lerne, wie du AI zu deinem Vorteil nutzt.</span>}
              description="Unsere Academy bietet Workshops, Kurse und 1:1 Coachings – speziell für den praktischen Einsatz in Alltag & Business."
              buttonText="Jetzt Kursübersicht anfordern"
              image="/lovable-uploads/d403c458-c12d-461a-9dc9-05e0eff7711f.png"
            />
          </div>
        </section>

        <section className="py-20">
          <div className="light-card dark:dark-card rounded-2xl p-8 border border-primary/20">
            <CoursesSection />
          </div>
        </section>

        <section className="py-20">
          <div className="light-card dark:dark-card rounded-2xl p-8 border border-primary/20">
            <SectionGrid
              title="Flexible Formate"
              subtitle="Wähle das Format, das am besten zu dir und deinen Lernpräferenzen passt."
              items={formats}
            />
          </div>
        </section>

        <section className="py-20">
          <div className="light-card dark:dark-card rounded-2xl p-8 border border-primary/20">
            <BenefitsSection />
          </div>
        </section>

        <section className="py-20">
          <div className="light-card dark:dark-card rounded-2xl p-8 border border-primary/20">
            <SectionCTA
              title="Starte deine KI-Reise noch heute"
              description="Von Anfänger bis Fortgeschrittene - wir begleiten dich auf jedem Schritt deines Weges."
              buttonText="Jetzt Kursübersicht anfordern"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Academy;
