
import React from 'react';
import { Card } from "@/components/ui/card";
import * as LucideIcons from 'lucide-react';

interface TechnologyIcon {
  icon: string;
  label: string;
}

interface CaseStudyCardProps {
  company: string;
  image: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  icons: TechnologyIcon[];
}

const CaseStudyCard = ({
  company,
  image,
  title,
  problem,
  solution,
  result,
  icons
}: CaseStudyCardProps) => {
  // Function to render the correct Lucide icon based on string name
  const renderIcon = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="w-5 h-5" /> : null;
  };
  
  return (
    <Card className="overflow-hidden bg-card hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={`${company} case study`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Problem:</p>
            <p className="text-sm">{problem}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Lösung:</p>
            <p className="text-sm">{solution}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Ergebnis:</p>
            <p className="text-sm">{result}</p>
          </div>
        </div>
        <div className="mt-6 flex gap-4">
          {icons.map((tech, index) => (
            <div key={index} className="flex items-center gap-1" title={tech.label}>
              {renderIcon(tech.icon)}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CaseStudyCard;
