
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/academy/HeroSection';
import CoursesSection from '@/components/academy/CoursesSection';
import FormatsSection from '@/components/academy/FormatsSection';
import BenefitsSection from '@/components/academy/BenefitsSection';
import CTASection from '@/components/academy/CTASection';

const Academy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24">
        <HeroSection />
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
