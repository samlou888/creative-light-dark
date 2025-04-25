
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import AutomationContact from './contact/AutomationContact';
import AcademyContact from './contact/AcademyContact';
import CreativeContact from './contact/CreativeContact';
import ContactForm from './contact/ContactForm';
import { Check } from 'lucide-react';

const ContactSection = () => {
  const { mode } = useTheme();

  if (mode === 'automation') {
    return <AutomationContact />;
  }

  if (mode === 'academy') {
    return <AcademyContact />;
  }

  if (mode === 'creative') {
    return <CreativeContact />;
  }

  if (mode === 'blue') {
    return (
      <section id="contact" className="py-12 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="dark-card accent-glow rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-5 md:p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">Blue Mode Consultation</h2>
                  <p className="text-muted-foreground text-sm mb-4">
                    Experience our services in blue mode. Book a call to discuss how we can transform your business with AI solutions.
                  </p>
                  <ContactForm />
                </div>
                
                <div className="bg-[#00CFFF]/20 backdrop-blur-md p-5 md:p-6 flex flex-col justify-center">
                  <h3 className="text-base font-bold mb-3">Why choose Blue Mode?</h3>
                  <ul className="space-y-2">
                    {[
                      "Advanced Blue-Mode Technology",
                      "Innovative User Interfaces",
                      "Modern Design Approaches",
                      "Enhanced User Interaction"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-[#00CFFF]/20 text-[#00CFFF]">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="light-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">Kontaktieren Sie uns</h2>
                <p className="text-muted-foreground text-sm mb-4">
                  Haben Sie Fragen oder möchten Sie eine Beratung buchen? Füllen Sie das Formular aus und wir melden uns bei Ihnen.
                </p>
                <ContactForm />
              </div>
              
              <div className="bg-primary/5 p-5 md:p-6 flex flex-col justify-center">
                <h3 className="text-base font-bold mb-3">Ihre Vorteile im Überblick</h3>
                <ul className="space-y-2">
                  {[
                    "Maßgeschneiderte AI-Lösungen",
                    "Höhere Effizienz und Einsparungen",
                    "Benutzerfreundliche Implementierung",
                    "Langfristige Betreuung und Support"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 bg-primary/20 text-primary">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
