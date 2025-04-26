
import React from 'react';

interface BrainWireframeProps {
  isCreativeMode?: boolean;
  className?: string;
}

const BrainWireframe: React.FC<BrainWireframeProps> = ({ isCreativeMode = false, className }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`max-w-lg mx-auto transition-all duration-500 ${className || ''}`}
    >
      {/* Brain outline */}
      <path
        d="M200 50C120 50 70 120 70 200C70 280 120 350 200 350C280 350 330 280 330 200C330 120 280 50 200 50Z"
        stroke={isCreativeMode ? "#954CE9" : "#0A3887"}
        strokeWidth="2"
        strokeLinecap="round"
        className={isCreativeMode ? "animate-pulse-glow" : ""}
      />
      
      {/* Horizontal connections */}
      <path
        d="M90 150H310"
        stroke={isCreativeMode ? "#38B6FF" : "#0A3887"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={isCreativeMode ? "1 8" : "1 4"}
      />
      <path
        d="M90 200H310"
        stroke={isCreativeMode ? "#38B6FF" : "#0A3887"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={isCreativeMode ? "1 8" : "1 4"}
      />
      <path
        d="M90 250H310"
        stroke={isCreativeMode ? "#38B6FF" : "#0A3887"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={isCreativeMode ? "1 8" : "1 4"}
      />
      
      {/* Vertical connections */}
      <path
        d="M150 90V310"
        stroke={isCreativeMode ? "#38B6FF" : "#0A3887"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={isCreativeMode ? "1 8" : "1 4"}
      />
      <path
        d="M200 90V310"
        stroke={isCreativeMode ? "#38B6FF" : "#0A3887"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={isCreativeMode ? "1 8" : "1 4"}
      />
      <path
        d="M250 90V310"
        stroke={isCreativeMode ? "#38B6FF" : "#0A3887"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray={isCreativeMode ? "1 8" : "1 4"}
      />
      
      {/* Nodes */}
      {[
        [150, 150], [200, 150], [250, 150],
        [150, 200], [200, 200], [250, 200],
        [150, 250], [200, 250], [250, 250]
      ].map((pos, i) => (
        <circle
          key={i}
          cx={pos[0]}
          cy={pos[1]}
          r={isCreativeMode ? (i === 4 ? 8 : 4) : 4}
          fill={isCreativeMode ? "#954CE9" : "#0A3887"}
          className={isCreativeMode ? "animate-pulse-glow" : ""}
        />
      ))}
      
      {/* Additional neural connections for creative mode */}
      {isCreativeMode && [
        "M150 150 L200 200", "M200 150 L250 200", 
        "M150 200 L200 250", "M200 200 L250 250",
        "M250 150 L200 250", "M150 250 L200 150"
      ].map((path, i) => (
        <path
          key={`neural-${i}`}
          d={path}
          stroke="#38B6FF"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="1 3"
          className="animate-pulse-glow"
        />
      ))}
    </svg>
  );
};

export default BrainWireframe;
