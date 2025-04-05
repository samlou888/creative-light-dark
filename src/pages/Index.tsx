
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';
import { useTheme } from '@/contexts/ThemeContext';
import ShowcaseSection from '@/components/home/ShowcaseSection';

const Index = () => {
  const { isCreativeMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        {/* Only show showcase in creative mode */}
        {isCreativeMode && <ShowcaseSection />}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
