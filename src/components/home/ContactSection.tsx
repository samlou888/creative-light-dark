import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Calendar } from 'lucide-react';
import CalendlyEmbed from '@/components/calendly/CalendlyEmbed';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const texts = {
  en: {
    automation: {
      title: "Let's automate your processes with AI",
      description: "Whether small team or scaling company - together in a discovery call, we'll find out where automation creates the most value for you.",
      benefits: [
        'Consulting & implementation from a single source',
        'Custom automations for your business',
        'Transparent processes & quick results'
      ],
      button: "Book Call"
    },
    creative: {
      title: "Meeting? Online, casual, concrete.",
      description: "Book a free video call directly. We listen, ask questions and show you what's possible.",
      benefits: [
        'Everything from one source: Design, Web & Content',
        'Faster & cheaper thanks to AI',
        'Personal, direct & without agency jargon'
      ],
      button: "Start Project"
    },
    academy: {
      title: "Training & Workshops for Companies.",
      description: "Book a free online meeting. We'll show you how to make your business more efficient and profitable with artificial intelligence.",
      benefits: [
        'Practical training & coaching for your team',
        'Scalable knowledge, immediately applicable',
        'Remote, flexible & 100% AI-driven'
      ],
      button: "Book Course"
    },
    form: {
      title: "Contact Us",
      subtitle: "Have questions or want to book a consultation? Fill out the form and we'll get back to you.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      contactTitle: "Your Benefits at a Glance",
      benefits: [
        "Customized AI Solutions",
        "Higher Efficiency and Savings",
        "User-friendly Implementation",
        "Long-term Support"
      ],
      quickContact: "Quick Contact:"
    }
  },
  de: {
    automation: {
      title: "Lass uns deine Prozesse mit AI automatisieren",
      description: "Ob kleines Team oder skalierendes Unternehmen – wir finden gemeinsam in einem Kennenlerngespräch heraus, wo Automatisierung für dich den größten Mehrwert schafft.",
      benefits: [
        'Beratung & Umsetzung aus einer Hand',
        'Individuelle Automationen für dein Business',
        'Transparente Prozesse & schnelle Ergebnisse'
      ],
      button: "Termin buchen"
    },
    creative: {
      title: "Meeting? Online, locker, konkret.",
      description: "Buche dir direkt einen kostenlosen Videocall. Wir hören zu, stellen Fragen und zeigen dir, was möglich ist.",
      benefits: [
        'Alles aus einer Hand: Design, Web & Content',
        'Schneller & günstiger dank KI',
        'Persönlich, direkt & ohne Agentur-Gelaber'
      ],
      button: "Projekt starten"
    },
    academy: {
      title: "Schulungen & Workshops für Unternehmen.",
      description: "Buche dir ein kostenloses Online-Gespräch. Wir zeigen dir, wie du mit künstlicher Intelligenz dein Business effizienter und profitabler machst.",
      benefits: [
        'Praxisnahe Schulungen & Coachings für dein Team',
        'Skalierbares Wissen, sofort umsetzbar',
        'Remote, flexibel & 100 % AI-driven'
      ],
      button: "Kurs buchen"
    },
    form: {
      title: "Kontaktieren Sie uns",
      subtitle: "Haben Sie Fragen oder möchten Sie eine Beratung buchen? Füllen Sie das Formular aus und wir melden uns bei Ihnen.",
      name: "Name",
      email: "E-Mail",
      message: "Nachricht",
      submit: "Nachricht senden",
      contactTitle: "Ihre Vorteile im Überblick",
      benefits: [
        "Maßgeschneiderte AI-Lösungen",
        "Höhere Effizienz und Einsparungen",
        "Benutzerfreundliche Implementierung",
        "Langfristige Betreuung und Support"
      ],
      quickContact: "Schneller Kontakt:"
    }
  }
};

const ContactSection = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = language === 'en' ? texts.en : texts.de;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? "Request received" : "Anfrage erhalten",
      description: language === 'en' 
        ? "Thank you for your message. We will get back to you shortly." 
        : "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      duration: 5000,
    });
  };

  const BookingButton = ({ className = "" }) => (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className={`gap-2 ${className}`}
        >
          <Calendar className="w-5 h-5" />
          {language === 'en' ? "Book Appointment" : "Termin buchen"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <CalendlyEmbed />
      </DialogContent>
    </Dialog>
  );

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
                    <ul className="space-y-3">
                      {t.automation.benefits.map((item, index) => (
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
                    <ul className="space-y-3">
                      {t.creative.benefits.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1">
                            <Check className="h-5 w-5 text-[#00FF66]" />
                          </div>
                          <span className="text-gray-200">{item}</span>
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
                    <ul className="space-y-3">
                      {t.academy.benefits.map((item, index) => (
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
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">{t.form.name}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">{t.form.email}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">{t.form.message}</label>
                    <textarea 
                      id="message" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`w-full primary-btn ${mode === 'creative' ? 'neon-glow' : ''}`}
                  >
                    {t.form.submit}
                  </button>
                </form>
              </div>
              
              <div className={`${
                mode === 'creative' 
                  ? 'bg-primary/20 backdrop-blur-md' 
                  : 'bg-primary/5'
              } p-5 md:p-6 flex flex-col justify-center`}>
                <h3 className="text-base font-bold mb-3">
                  {t.form.contactTitle}
                </h3>
                
                <ul className="space-y-2">
                  {t.form.benefits.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                        mode === 'creative' 
                          ? 'bg-primary text-white' 
                          : 'bg-primary/20 text-primary'
                      }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-4 border-t border-primary/20">
                  <p className="font-medium mb-1 text-sm">{t.form.quickContact}</p>
                  <p className="text-muted-foreground text-sm">info@aiventures.de</p>
                  <p className="text-muted-foreground text-sm">+49 123 4567890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
