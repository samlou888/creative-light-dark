
import React from 'react';
import { Check } from 'lucide-react';

interface BenefitsListProps {
  benefits: string[];
  checkColor?: string;
  textColor?: string;
}

const BenefitsList = ({ benefits, checkColor = "text-primary", textColor = "text-muted-foreground" }: BenefitsListProps) => {
  return (
    <ul className="space-y-3">
      {benefits.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <div className="mt-1">
            <Check className={`h-5 w-5 ${checkColor}`} />
          </div>
          <span className={textColor}>{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BenefitsList;
