
import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black">
      <div className="galaxy-background">
        {/* Static star layers */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        
        {/* Pulsing stars */}
        <div className="stars-pulse-1" />
        <div className="stars-pulse-2" />
        
        {/* Large visible individual stars */}
        {Array.from({ length: 30 }).map((_, i) => {
          // Generate random positions
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          // Random size between 2-5px
          const size = 2 + Math.random() * 3;
          // Random delay for animation
          const delay = Math.random() * 5;
          
          return (
            <div 
              key={i} 
              className="star-large" 
              style={{ 
                top: `${top}%`, 
                left: `${left}%`, 
                width: `${size}px`, 
                height: `${size}px`,
                animationDelay: `${delay}s`
              }}
            ></div>
          );
        })}
        
        {/* Few larger bright stars */}
        {Array.from({ length: 10 }).map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const size = 4 + Math.random() * 4;
          const delay = Math.random() * 5;
          
          return (
            <div 
              key={`bright-${i}`} 
              className="star-bright" 
              style={{ 
                top: `${top}%`, 
                left: `${left}%`, 
                width: `${size}px`, 
                height: `${size}px`,
                animationDelay: `${delay}s`
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default StarryBackground;
