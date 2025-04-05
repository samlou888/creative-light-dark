
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ContactSection from '@/components/home/ContactSection';
import { useTheme } from '@/contexts/ThemeContext';
import CreativeStudioSection from '@/components/home/CreativeStudioSection';
import ShowreelSection from '@/components/home/ShowreelSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhatsAppButton from '@/components/shared/WhatsAppButton';

const Index = () => {
  const { isCreativeMode } = useTheme();

  // Add the section ids in useEffect to ensure they're available for navigation
  useEffect(() => {
    // Ensure all section elements have their proper ids set
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (section.id === '') {
        // Set default ids based on content if missing
        const headingText = section.querySelector('h2')?.textContent?.toLowerCase() || '';
        if (headingText.includes('kontakt')) section.id = 'contact';
        else if (headingText.includes('automation')) section.id = 'automation';
        else if (headingText.includes('academy')) section.id = 'academy';
        else if (headingText.includes('creative')) section.id = 'creative-studio';
      }
    });
  }, []);

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
      <WhatsAppButton />
    </div>
  );
};

export default Index;
