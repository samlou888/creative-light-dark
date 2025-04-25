
import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#0a0a0a]">
      <div className="galaxy-background">
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        <div className="stars-twinkle" />
      </div>
    </div>
  );
};

export default StarryBackground;
