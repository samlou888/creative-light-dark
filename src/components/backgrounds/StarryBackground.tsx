
import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-[#0a0a0a]">
      <div className="stars-1" />
      <div className="stars-2" />
      <div className="stars-3" />
    </div>
  );
};

export default StarryBackground;
