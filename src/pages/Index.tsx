
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NeutralHeroSection from '@/components/home/NeutralHeroSection';
import { useTheme } from '@/contexts/ThemeContext';
import ServicesSection from '@/components/home/ServicesSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  const { setMode } = useTheme();
  
  // Set neutral mode on component mount
  useEffect(() => {
    setMode('neutral');
  }, [setMode]);
  
  return (
    <div className="min-h-screen flex flex-col font-mono">
      <Header />
      <main className="flex-grow">
        <NeutralHeroSection
          titleAnimationWords={["Lösungen.", "Automationen.", "Design.", "Academy."]}
          subtitle="Wir entwickeln Designs, automatisieren Prozesse und schulen Teams – damit Sie Zeit, Geld und Ressourcen sparen."
          cta={{
            label: "Jetzt kostenloses Erstgespräch buchen",
            action: () => {},
          }}
          wireframeImage="/lovable-uploads/379e5afe-ba21-4c63-b2f7-5361bd17e940.png"
          textColor="black"
          backgroundColor="white"
        />
        <ServicesSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
