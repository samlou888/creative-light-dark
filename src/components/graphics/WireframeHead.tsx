
import React from 'react';

interface WireframeHeadProps {
  className?: string;
}

const WireframeHead: React.FC<WireframeHeadProps> = ({ className = '' }) => {
  return <div className={`${className}`}></div>;
};

export default WireframeHead;
