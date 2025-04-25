
import React from 'react';
import { Card } from '@/components/ui/card';
import { Check, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';

const CreativeContact = () => {
  return (
    <section id="contact" className="py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <Card className="neo-blur overflow-hidden rounded-2xl border-purple-500/20">
            <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-start">
              <div>
                <div className="mb-6">
                  <h2 className="hero-heading text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
                    Meeting? - Online locker, konkret.
                  </h2>
                  <p className="text-lg text-gray-300">
                    Buche dir direkt einen kostenlosen Videocall. Wir hören zu, stellen Fragen und zeigen dir, was möglich ist.
                  </p>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-3">
                    {[
                      'Alles aus einer Hand: Design, Web & Content',
                      'Schneller & günstiger dank KI',
                      'Persönlich, direkt & ohne Agentur-Gelaber'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1">
                          <Check className="h-5 w-5 text-[#00FF66]" />
                        </div>
                        <span className="text-gray-200">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg"
                    className="w-full md:w-auto bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-medium gap-2 mt-4"
                  >
                    <Video className="w-5 h-5" />
                    Videocall buchen
                  </Button>
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

export default CreativeContact;
