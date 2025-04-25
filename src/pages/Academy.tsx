
import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AcademyWireframeHead from '@/components/academy/AcademyWireframeHead';
import CoursesSection from '@/components/academy/CoursesSection';
import FormatsSection from '@/components/academy/FormatsSection';
import BenefitsSection from '@/components/academy/BenefitsSection';
import CTASection from '@/components/academy/CTASection';
import { useLocation } from 'react-router-dom';

const Academy = () => {
  const { mode } = useTheme();
  const location = useLocation();
  
  useEffect(() => {
    console.log("Academy page - Current path:", location.pathname);
  }, [location.pathname]);

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
                <AcademyWireframeHead className="w-full" />
              </div>
            </div>
          </div>
        </section>

        <CoursesSection />
        <FormatsSection />
        <BenefitsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Academy;
