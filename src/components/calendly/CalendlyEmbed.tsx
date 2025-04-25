
import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface CalendlyEmbedProps {
  className?: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-[680px] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      <iframe
        src="https://calendly.com/samlou888/30min"
        width="100%"
        height="100%"
        frameBorder="0"
        title="Calendly Terminbuchung"
        className="rounded-lg shadow-lg bg-background absolute inset-0"
        data-auto-load="true"
        data-resize="true"
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default CalendlyEmbed;

