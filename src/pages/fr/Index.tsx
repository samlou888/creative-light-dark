
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '@/contexts/ThemeContext';

// Lazy load components
const HeroSection = React.lazy(() => import('@/components/home/fr/HeroSection'));
const ServicesSection = React.lazy(() => import('@/components/home/fr/ServicesSection'));
const ShowcaseSection = React.lazy(() => import('@/components/home/fr/ShowcaseSection'));
const ContactSection = React.lazy(() => import('@/components/home/fr/ContactSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center">
    <Skeleton className="w-full h-full" />
  </div>
);

const IndexFr = () => {
  const { mode } = useTheme();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <React.Suspense fallback={<SectionLoader />}>
          <HeroSection />
        </React.Suspense>
        <React.Suspense fallback={<SectionLoader />}>
          <ServicesSection />
        </React.Suspense>
        <React.Suspense fallback={<SectionLoader />}>
          <ShowcaseSection />
        </React.Suspense>
        <React.Suspense fallback={<SectionLoader />}>
          <ContactSection />
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default IndexFr;
