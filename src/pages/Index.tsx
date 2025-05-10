
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NeutralHeroSection from '@/components/home/NeutralHeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ContactSection from '@/components/home/ContactSection';
import { useTheme } from '@/contexts/ThemeContext';

// Function to open Calendly modal
const openCalendlyModal = ({ requireEmailConfirmation = false }) => {
  // This is a placeholder function - in a real implementation,
  // you would integrate with Calendly's API or embed component
  console.log('Opening Calendly modal with email confirmation:', requireEmailConfirmation);
  // Here you would trigger your actual Calendly implementation
};

const Index = () => {
  const { setMode } = useTheme();
  
  // Set neutral theme
  React.useEffect(() => {
    document.documentElement.classList.remove('mode-automation', 'mode-creative', 'mode-academy');
    document.documentElement.classList.remove('dark');
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col font-mono">
      <Header />
      <main className="flex-grow">
        <NeutralHeroSection
          titleAnimationWords={["Lösungen.", "Automationen.", "Design.", "Academy."]}
          subtitle="Wir entwickeln Designs, automatisieren Prozesse und schulen Teams – damit Sie Zeit, Geld und Ressourcen sparen."
          cta={{
            label: "Jetzt kostenloses Erstgespräch buchen",
            action: () => openCalendlyModal({ requireEmailConfirmation: true }),
          }}
          wireframeImage="/assets/wireframe_head_black.png"
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
