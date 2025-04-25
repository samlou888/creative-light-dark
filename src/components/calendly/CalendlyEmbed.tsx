
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface CalendlyEmbedProps {
  className?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Add Calendly script to enable proper widget functionality
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className={`w-full h-full ${className}`}>
      {isLoading && (
        <div className="w-full h-[600px] flex items-center justify-center">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>
      )}
      <div 
        className="calendly-inline-widget w-full rounded-lg shadow-lg bg-background"
        data-url="https://calendly.com/samlou888/30min"
        style={{ minHeight: '650px' }}
      />
    </div>
  );
};

export default CalendlyEmbed;
