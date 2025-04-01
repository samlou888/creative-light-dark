
import React from 'react';

interface BrainWireframeProps {
  isCreativeMode: boolean;
}

const BrainWireframe: React.FC<BrainWireframeProps> = ({ isCreativeMode }) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="max-w-lg mx-auto transition-all duration-500"
      style={{ filter: "drop-shadow(0px 0px 10px rgba(10, 38, 65, 0.3))" }}
    >
      {/* Brain outline */}
      <path
        d="M120 100 L120 300 C120 330, 150 350, 200 350 C250 350, 280 330, 280 300 L280 100 C280 70, 250 50, 200 50 C150 50, 120 70, 120 100 Z"
        stroke={isCreativeMode ? "#954CE9" : "#FFFFFF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Horizontal grid lines */}
      {Array.from({ length: 15 }).map((_, i) => (
        <path
          key={`h-${i}`}
          d={`M120 ${80 + i * 15} L280 ${80 + i * 15}`}
          stroke={isCreativeMode ? "#38B6FF" : "#FFFFFF"}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeOpacity="0.3"
        />
      ))}
      
      {/* Vertical grid lines */}
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={`v-${i}`}
          d={`M${135 + i * 18} 80 L${135 + i * 18} 320`}
          stroke={isCreativeMode ? "#38B6FF" : "#FFFFFF"}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeOpacity="0.3"
        />
      ))}
      
      {/* Face profile */}
      <path
        d="M200 80 C215 80, 225 85, 235 95 C245 105, 250 115, 255 130 C260 145, 263 165, 265 190 
           C265 215, 260 240, 255 265 C250 285, 240 300, 225 310 C210 320, 190 325, 170 320 
           C150 315, 140 305, 135 290 C130 275, 130 260, 135 245 
           C140 230, 145 220, 150 210 C155 200, 158 190, 155 180 
           C152 170, 145 165, 140 155 C135 145, 135 130, 140 120 
           C145 110, 155 95, 170 90 C185 85, 195 80, 200 80 Z"
        stroke={isCreativeMode ? "#954CE9" : "#FFFFFF"}
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Additional contour lines for the face */}
      <path
        d="M170 125 C180 120, 190 120, 200 125 C210 130, 220 140, 225 150"
        stroke={isCreativeMode ? "#38B6FF" : "#FFFFFF"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
        fill="none"
      />
      
      <path
        d="M160 180 C170 175, 180 175, 190 180"
        stroke={isCreativeMode ? "#38B6FF" : "#FFFFFF"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
        fill="none"
      />
      
      <path
        d="M200 200 C210 205, 220 215, 225 230 C230 245, 230 260, 225 270"
        stroke={isCreativeMode ? "#38B6FF" : "#FFFFFF"}
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
        fill="none"
      />
      
      {/* Neural connection points */}
      {[
        [180, 110], [200, 130], [225, 155],
        [190, 180], [210, 210], [230, 240],
        [200, 280], [180, 250], [165, 220]
      ].map((pos, i) => (
        <circle
          key={i}
          cx={pos[0]}
          cy={pos[1]}
          r={isCreativeMode ? (i % 3 === 0 ? 3 : 2) : 2}
          fill={isCreativeMode ? "#954CE9" : "#FFFFFF"}
          fillOpacity={0.8}
        />
      ))}
    </svg>
  );
};

export default BrainWireframe;
