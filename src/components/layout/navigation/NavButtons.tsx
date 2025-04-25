
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Zap, Palette, GraduationCap } from 'lucide-react';
import NavButton from './NavButton';

const NavButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleModeChange = (path: string) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  return (
    <div className="flex items-center gap-2">
      <NavButton
        onClick={() => handleModeChange('/')}
        isActive={location.pathname === '/'}
        icon={Zap}
      />
      <NavButton
        onClick={() => handleModeChange('/creative-studio')}
        isActive={location.pathname === '/creative-studio'}
        icon={Palette}
      />
      <NavButton
        onClick={() => handleModeChange('/academy')}
        isActive={location.pathname === '/academy'}
        icon={GraduationCap}
      />
    </div>
  );
};

export default NavButtons;
