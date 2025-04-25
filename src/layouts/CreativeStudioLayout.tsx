
import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StarryBackground from '@/components/backgrounds/StarryBackground';
import { useTheme } from '@/contexts/ThemeContext';

interface CreativeStudioLayoutProps {
  children: React.ReactNode;
}

const CreativeStudioLayout = ({ children }: CreativeStudioLayoutProps) => {
  const { setMode } = useTheme();

  useEffect(() => {
    setMode('creative');
  }, [setMode]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <StarryBackground />
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default CreativeStudioLayout;
