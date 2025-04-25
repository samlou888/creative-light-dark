import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section className="py-16 bg-secondary text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">
          Schulungen & Workshops für Unternehmen.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Steigern Sie die Effizienz und Innovationskraft Ihres Teams.
        </p>
        <Button size="lg" className="rounded-full">
          Kontakt aufnehmen
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
