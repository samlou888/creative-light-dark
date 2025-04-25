
import React from 'react';
import { useLocation } from 'react-router-dom';

interface CTAButtonProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  mode: 'creative' | 'automation' | 'academy';
}

const CTAButton = ({ onClick, mode }: CTAButtonProps) => {
  const location = useLocation();
  
  // Determine the button text based on the current page
  const buttonText = location.pathname === '/creative-studio' 
    ? 'Projekt starten' 
    : location.pathname === '/academy' 
      ? 'Kurs buchen' 
      : 'Termin buchen';
  
  // Apply specific styling based on the mode
  const buttonClass = mode === 'creative'
    ? 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]' 
    : 'bg-primary text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(60,214,120,0.6)]';

  return (
    <a 
      href="#contact" 
      onClick={onClick}
      className={`hidden md:block ${buttonClass} px-5 py-2 rounded-full font-medium transition-all`}
    >
      {buttonText}
    </a>
  );
};

export default CTAButton;
