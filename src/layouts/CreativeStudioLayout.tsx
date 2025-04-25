
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarryBackground from '@/components/backgrounds/StarryBackground';

interface CreativeStudioLayoutProps {
  children: React.ReactNode;
}

const CreativeStudioLayout = ({ children }: CreativeStudioLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <StarryBackground />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CreativeStudioLayout;
