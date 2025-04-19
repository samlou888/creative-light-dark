
import React from 'react';
import { motion } from 'framer-motion';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  return (
    <div className={`${className} relative`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        <img 
          src="/lovable-uploads/895ef6ac-4dc2-4b90-9c89-71dca2ee5161.png"
          alt="Wireframe head illustration" 
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
