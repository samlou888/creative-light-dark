
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
import SuccessSection from '@/components/home/SuccessSection';
// AboutSection import removed

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
        if (headingText.includes('kontakt')) section.id = 'kontakt';
        else if (headingText.includes('automation')) section.id = 'automation';
        else if (headingText.includes('academy')) section.id = 'academy';
        else if (headingText.includes('creative')) section.id = 'studio';
        else if (headingText.includes('projekt')) section.id = 'projekte';
        else if (headingText.includes('showreel')) section.id = 'showreel';
        else if (headingText.includes('über uns')) section.id = 'about';
        else if (headingText.includes('erfolge')) section.id = 'success';
      }
    });
    
    // Add ID to the first section (hero) if not already set
    const heroSection = document.querySelector('main > section:first-child');
    if (heroSection && !heroSection.id) {
      heroSection.id = 'start';
    }
    
    // Add ID to the footer if not already set
    const footerElement = document.querySelector('footer');
    if (footerElement && !footerElement.id) {
      footerElement.id = 'footer';
    }
  }, [isCreativeMode]); // Add isCreativeMode as dependency so IDs update when mode changes

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
          <>
            <ServicesSection />
            {/* AboutSection removed */}
            <SuccessSection />
          </>
        )}
        
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
