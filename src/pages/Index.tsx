
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  const { isCreativeMode } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${
      isCreativeMode ? 'bg-black text-white' : 'bg-white text-black'
    }`}>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <ShowcaseSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
