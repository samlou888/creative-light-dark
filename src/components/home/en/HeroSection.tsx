
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import WireframeHead from '../../graphics/WireframeHead';
import { Calendar } from 'lucide-react';

const HeroSection = () => {
  const { mode } = useTheme();

  return (
    <section className="pt-32 pb-20 px-6 md:px-10 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1 className="hero-heading opacity-0 animate-slide-up-fade">
              {mode === 'academy' ? (
                <>
                  Learn AI. <span className="text-primary">Scale Business.</span>
                </>
              ) : mode === 'creative' ? (
                <>
                  Graphic Designer, Web Designer & <span className="text-[#00FF66]">Content Creator</span>.
                </>
              ) : (
                <>Automate. Optimize. <span className="text-primary">Scale.</span></>
              )}
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.3s" }}>
              {mode === 'academy' 
                ? "Online workshops, training & coaching – for companies that want to develop their employees to work more efficiently, faster, and smarter with AI."
                : mode === 'creative'
                ? "Creativity with artificial intelligence – for brands that want to stand out, perform, and grow."
                : "Transform your business with tailored AI solutions. We help you work more efficiently, optimize processes, and scale."
              }
            </p>
            
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up-fade" style={{ animationDelay: "0.4s" }}>
              {mode === 'academy' ? (
                <a href="#contact" className="primary-btn flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Training
                </a>
              ) : mode === 'creative' ? (
                <a href="#contact" className="primary-btn">Start Project</a>
              ) : (
                <a href="#contact" className="primary-btn">Book Appointment Now</a>
              )}
            </div>
          </div>
          
          <WireframeHead />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
