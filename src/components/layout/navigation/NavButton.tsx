
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface NavButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: LucideIcon;
}

const NavButton = ({ onClick, isActive, icon: Icon }: NavButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`p-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-primary/10 text-primary dark:text-[#00FF66]' 
          : 'hover:bg-primary/5'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-5 h-5" />
    </motion.button>
  );
};

export default NavButton;
