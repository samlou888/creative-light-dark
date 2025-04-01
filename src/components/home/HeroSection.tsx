
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import BrainWireframe from '../graphics/BrainWireframe';

const HeroSection = () => {
  const { isCreativeMode } = useTheme();

  return (
    <section className={`pt-32 pb-20 px-6 md:px-10 min-h-[90vh] flex items-center ${
      isCreativeMode ? 'bg-black' : 'bg-white'
    }`}>
      <div className="container mx-auto">
        <div className={`rounded-3xl overflow-hidden ${
          isCreativeMode ? 'bg-black' : 'bg-white'
        } ${isCreativeMode ? 'border border-primary/30' : 'shadow-lg'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-12 space-y-8 animate-fade-in">
              <h1 className="hero-heading">
                {isCreativeMode ? (
                  <>Design.<br/>Create.<br/><span className="text-primary">Disrupt.</span></>
                ) : (
                  <>Automate.<br/>Optimize.<br/><span className="text-primary">Scale.</span></>
                )}
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                {isCreativeMode 
                  ? "Entfesseln Sie die Kraft künstlicher Intelligenz in Ihrem kreativen Prozess."
                  : "Transform your business with AI solutions tailored to your needs."
                }
              </p>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a 
                  href="#contact" 
                  className={`py-3 px-6 rounded-full font-medium transition-all ${
                    isCreativeMode 
                      ? 'bg-blue-900 text-white hover:bg-blue-800' 
                      : 'bg-[#0a2641] text-white hover:bg-[#0a2641]/90'
                  }`}
                >
                  {isCreativeMode ? "Projekt starten" : "Jetzt Termin buchen"}
                </a>
                
                <a 
                  href="#showcase" 
                  className={`py-3 px-6 rounded-full font-medium transition-all ${
                    isCreativeMode 
                      ? 'border border-white/20 hover:border-white/40 text-white' 
                      : 'border border-[#0a2641] hover:bg-[#0a2641]/10 text-[#0a2641]'
                  }`}
                >
                  {isCreativeMode ? "Web" : "Demo anfordern"}
                </a>
              </div>
            </div>
            
            <div className={`${
              isCreativeMode 
                ? 'bg-gradient-to-br from-blue-900 to-purple-900 p-10 h-full flex items-center justify-center' 
                : 'bg-[#0a2641] p-10 h-full flex items-center justify-center'
            }`}>
              {isCreativeMode ? (
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-white text-lg font-bold mb-1">Branding</h3>
                    <p className="text-white/80 text-sm">Video</p>
                    <p className="text-white/80 text-sm">Web & App</p>
                  </div>
                  <div className="relative h-40 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500 to-blue-500">
                    <div className="absolute inset-0 opacity-70 mix-blend-overlay" 
                         style={{backgroundImage: "url('/lovable-uploads/eaf45186-56ca-4c4e-98c4-37cdac2ebc8c.png')", backgroundSize: "cover"}}></div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                  </div>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="text-white text-lg font-bold mb-1">Web</h3>
                  </div>
                </div>
              ) : (
                <BrainWireframe isCreativeMode={isCreativeMode} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
