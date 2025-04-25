
import React, { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { useTheme } from '@/contexts/ThemeContext';
import { usePageTheme } from '@/contexts/PageThemeContext';

// Lazy load components
const HeroSection = React.lazy(() => import('@/components/home/HeroSection'));
const ServicesSection = React.lazy(() => import('@/components/home/ServicesSection'));
const ShowcaseSection = React.lazy(() => import('@/components/home/ShowcaseSection'));
const ContactSection = React.lazy(() => import('@/components/home/ContactSection'));

// Loading fallback component
const SectionLoader = () => (
  <div className="w-full h-[400px] flex items-center justify-center">
    <Skeleton className="w-full h-full" />
  </div>
);

const Index = () => {
  const { mode } = useTheme();
  const { pageTheme } = usePageTheme();
  
  return (
    <>
      <Suspense fallback={<SectionLoader />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ServicesSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ShowcaseSection />
      </Suspense>
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Index;
