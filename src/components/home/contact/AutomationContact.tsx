
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';

const AutomationContact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-start">
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                    Lass uns deinen Workflow automatisieren
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Ob kleines Team oder skalierendes Unternehmen – wir finden gemeinsam heraus, 
                    wo Automatisierung für dich den größten Hebel bringt.
                  </p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      'Beratung & Umsetzung aus einer Hand',
                      'Individuelle Automationen für dein Business',
                      'Transparente Prozesse & schnelle Ergebnisse'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-[400px]">
                <CalendlyEmbed />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AutomationContact;
