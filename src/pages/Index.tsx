
import React, { useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  const { setMode } = useTheme();
  
  // Reset to default mode when on home page
  useEffect(() => {
    setMode('automation');
    
    // Optional: Add scroll listener to change theme based on section
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const servicesSection = document.getElementById('services');
      const showcaseSection = document.getElementById('showcase');
      const contactSection = document.getElementById('contact');
      
      if (servicesSection && showcaseSection && contactSection) {
        const servicesSectionTop = servicesSection.offsetTop - 300;
        const showcaseSectionTop = showcaseSection.offsetTop - 300;
        const contactSectionTop = contactSection.offsetTop - 300;
        
        if (scrollPosition >= contactSectionTop) {
          setMode('academy');
        } else if (scrollPosition >= showcaseSectionTop) {
          setMode('creative');
        } else if (scrollPosition >= servicesSectionTop) {
          setMode('automation');
        } else {
          setMode('automation');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setMode]);

  return (
    <div className="min-h-screen flex flex-col">
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
