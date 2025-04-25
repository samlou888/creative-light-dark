
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
    // Add creative-mode class to body
    document.body.classList.add('creative-mode');

    return () => {
      // Clean up when component unmounts
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('creative-mode');
    };
  }, [setMode]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white relative overflow-hidden">
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
