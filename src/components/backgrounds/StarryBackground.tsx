
import React from 'react';

const StarryBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-black">
      <div className="galaxy-background">
        {/* Statische Sternenschichten */}
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
        
        {/* Pulsierende Sterne */}
        <div className="stars-pulse-1" />
        <div className="stars-pulse-2" />
        
        {/* Einzelne animierte Sterne für zusätzlichen Effekt */}
        <div className="star" style={{ top: '10%', left: '20%' }}></div>
        <div className="star" style={{ top: '30%', left: '70%' }}></div>
        <div className="star" style={{ top: '60%', left: '40%' }}></div>
        <div className="star" style={{ top: '80%', left: '90%' }}></div>
        <div className="star" style={{ top: '25%', left: '50%' }}></div>
        <div className="star" style={{ top: '15%', left: '85%' }}></div>
        <div className="star" style={{ top: '45%', left: '15%' }}></div>
        <div className="star" style={{ top: '75%', left: '65%' }}></div>
      </div>
    </div>
  );
};

export default StarryBackground;
