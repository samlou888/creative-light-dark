
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
          src="/lovable-uploads/c73818c0-3800-4004-8494-bb090c2a26eb.png"
          alt="Historical illustration" 
          className="w-full h-auto object-contain rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default WireframeHead;
