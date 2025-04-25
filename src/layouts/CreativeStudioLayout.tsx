
import React, { useEffect } from 'react';

interface CreativeStudioLayoutProps {
  children: React.ReactNode;
}

const CreativeStudioLayout: React.FC<CreativeStudioLayoutProps> = ({ children }) => {
  // Add dark mode class when this component mounts and remove it when unmounted
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = '#000';
    
    return () => {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '';
    };
  }, []);
  
  return (
    <div className="bg-black text-white min-h-screen">
      {children}
    </div>
  );
};

export default CreativeStudioLayout;
