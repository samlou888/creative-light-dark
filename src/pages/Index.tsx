
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ContactSection from '@/components/home/ContactSection';
import { useTheme } from '@/contexts/ThemeContext';
import CreativeStudioSection from '@/components/home/CreativeStudioSection';
import ShowreelSection from '@/components/home/ShowreelSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ServicesSection from '@/components/home/ServicesSection';

const Index = () => {
  const { isCreativeMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        
        {isCreativeMode ? (
          // Creative Studio Mode Sections
          <>
            <CreativeStudioSection />
            <ShowreelSection />
            <ProjectsSection />
          </>
        ) : (
          // Business Mode Sections
          <ServicesSection />
        )}
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
