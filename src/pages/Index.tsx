
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import ShowcaseSection from '@/components/home/ShowcaseSection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
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
