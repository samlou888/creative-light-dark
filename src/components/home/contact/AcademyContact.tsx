
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';

const AcademyContact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden rounded-2xl border-[#00CFFF]/20 bg-gradient-to-br from-white to-[#D2A8FF]/10">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-start">
              <div>
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#00CFFF] to-[#D2A8FF] bg-clip-text text-transparent">
                    Let's talk AI & Wachstum
                  </h2>
                  <p className="text-lg text-gray-600">
                    Buche dir ein kostenloses Online-Gespräch. Wir zeigen dir, wie du mit künstlicher Intelligenz dein Business effizienter und profitabler machst.
                  </p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      'Praxisnahe Schulungen & Coachings für dein Team',
                      'Skalierbares Wissen, sofort umsetzbar',
                      'Remote, flexibel & 100 % AI-driven'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check className="h-5 w-5 text-[#00CFFF]" />
                        </div>
                        <span className="text-gray-700">{item}</span>
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

export default AcademyContact;
