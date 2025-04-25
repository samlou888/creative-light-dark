
import React, { Suspense } from 'react';
import BaseLayout from '@/layouts/BaseLayout';
import { Skeleton } from '@/components/ui/skeleton';
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
  const { pageTheme } = usePageTheme();
  
  return (
    <BaseLayout className={pageTheme === 'creative' ? 'bg-black text-white' : 'bg-white text-black'}>
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
    </BaseLayout>
  );
};

export default Index;
