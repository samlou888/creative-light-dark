
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';
import BenefitsList from './BenefitsList';
import ContactForm from './ContactForm';
import QuickContact from './QuickContact';
import { contactTexts } from './translations';

const ContactSection = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const t = contactTexts[language];

  if (mode === 'automation') {
    return (
      <section id="contact" className="py-12 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden rounded-2xl border-primary/20">
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-start">
                <div>
                  <div className="mb-6">
                    <h2 className="animated-title automation-title">
                      {t.automation.title}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      {t.automation.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <BenefitsList benefits={t.automation.benefits} />
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
  }

  if (mode === 'creative') {
    return (
      <section id="contact" className="py-12 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Card className="neo-blur overflow-hidden rounded-2xl border-purple-500/20">
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-start">
                <div>
                  <div className="mb-6">
                    <h2 className="animated-title creative-title">
                      {t.creative.title}
                    </h2>
                    <p className="text-lg text-gray-300">
                      {t.creative.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <BenefitsList 
                      benefits={t.creative.benefits}
                      checkColor="text-[#00FF66]"
                      textColor="text-gray-200"
                    />
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
  }

  if (mode === 'academy') {
    return (
      <section id="contact" className="py-12 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden rounded-2xl border-[#00CFFF]/20 bg-gradient-to-br from-white to-[#D2A8FF]/10">
              <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8 items-start">
                <div>
                  <div className="mb-6">
                    <h2 className="animated-title academy-title">
                      {t.academy.title}
                    </h2>
                    <p className="text-lg text-gray-600">
                      {t.academy.description}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <BenefitsList 
                      benefits={t.academy.benefits}
                      checkColor="text-[#00CFFF]"
                      textColor="text-gray-700"
                    />
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
  }

  return (
    <section id="contact" className="py-10 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className={`rounded-2xl overflow-hidden ${
            mode === 'creative' 
              ? 'dark-card neon-glow' 
              : 'light-card'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  {t.form.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {t.form.subtitle}
                </p>
                <ContactForm />
              </div>
              <QuickContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
