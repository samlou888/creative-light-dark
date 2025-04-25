
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
    // Set creative mode when component mounts
    setMode('creative');
    // Add dark class to html element
    document.documentElement.classList.add('dark');

    return () => {
      document.documentElement.classList.remove('dark');
    };
  }, [setMode]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 w-full h-full -z-10">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-[#1A1F2C] via-[#0D1117] to-black" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 creative-gradient opacity-30" />
        
        {/* Stars background */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        <div className="stars-pulse-1" />
        <div className="stars-pulse-2" />
      </div>

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
