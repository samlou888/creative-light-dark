
import React from 'react';
import { useLocation } from 'react-router-dom';

interface CTAButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  mode: 'creative' | 'automation' | 'academy';
}

const CTAButton = ({ onClick, mode }: CTAButtonProps) => {
  const location = useLocation();
  
  // Bestimme den Button-Text basierend auf der aktuellen Seite
  const buttonText = location.pathname === '/creative-studio' 
    ? 'Projekt starten' 
    : location.pathname === '/academy' 
      ? 'Kurs buchen' 
      : 'Termin buchen';
  
  // Wende spezifisches Styling basierend auf dem Modus an
  const getButtonClass = () => {
    if (mode === 'creative') {
      return 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]';
    } else if (mode === 'academy') {
      return 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]';
    } else {
      return 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]';
    }
  };

  return (
    <a 
      href="#contact" 
      onClick={onClick}
      className={`hidden md:block ${getButtonClass()} px-5 py-2 rounded-full font-medium transition-all`}
    >
      {buttonText}
    </a>
  );
};

export default CTAButton;
