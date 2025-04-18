import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useToast } from '@/components/ui/use-toast';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Video } from 'lucide-react';

const ContactSection = () => {
  const { isCreativeMode } = useTheme();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Anfrage erhalten",
      description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      duration: 5000,
    });
  };

  if (isCreativeMode) {
    return (
      <section id="contact" className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Card className="neo-blur overflow-hidden rounded-2xl border-purple-500/20">
              <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
                <div>
                  <div className="mb-8">
                    <h2 className="hero-heading text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white/90 to-white/70">
                      Kennenlernen? - Online locker, konkret.
                    </h2>
                    <p className="text-lg text-gray-300">
                      Buche dir direkt einen kostenlosen Videocall. Wir hören zu, stellen Fragen und zeigen dir, was möglich ist.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <ul className="space-y-4">
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
                      className="w-full md:w-auto bg-[#00FF66] hover:bg-[#00FF66]/90 text-black font-medium gap-2 mt-6"
                    >
                      <Video className="w-5 h-5" />
                      Videocall buchen
                    </Button>
                  </div>
                </div>

                <div className="h-[600px] w-full">
                  <iframe
                    src="https://calendly.com/dein-nutzername/online-videocall"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Calendly Terminbuchung"
                    className="rounded-lg bg-black/30"
                  />
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
            isCreativeMode 
              ? 'dark-card neon-glow' 
              : 'light-card'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-5 md:p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-2">
                  {isCreativeMode 
                    ? "Starten Sie Ihr kreatives Projekt"
                    : "Kontaktieren Sie uns"
                  }
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {isCreativeMode 
                    ? "Bereit, Ihre Vision mit KI-Technologie zum Leben zu erwecken? Wir freuen uns darauf, von Ihnen zu hören."
                    : "Haben Sie Fragen oder möchten Sie eine Beratung buchen? Füllen Sie das Formular aus und wir melden uns bei Ihnen."
                  }
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">E-Mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Nachricht</label>
                    <textarea 
                      id="message" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary min-h-[80px]"
                      required 
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`w-full primary-btn ${isCreativeMode ? 'neon-glow' : ''}`}
                  >
                    {isCreativeMode ? "Projekt starten" : "Nachricht senden"}
                  </button>
                </form>
              </div>
              
              <div className={`${
                isCreativeMode 
                  ? 'bg-primary/20 backdrop-blur-md' 
                  : 'bg-primary/5'
              } p-5 md:p-6 flex flex-col justify-center`}>
                <h3 className="text-base font-bold mb-3">
                  {isCreativeMode 
                    ? "Warum mit unserem Creative Studio arbeiten?"
                    : "Ihre Vorteile im Überblick"
                  }
                </h3>
                
                <ul className="space-y-2">
                  {(isCreativeMode 
                    ? [
                        "KI-gestützte kreative Prozesse",
                        "Einzigartige, disruptive Designs",
                        "Schnellere Iteration und Entwicklung",
                        "Zukunftsorientierte digitale Erlebnisse"
                      ] 
                    : [
                        "Maßgeschneiderte AI-Lösungen",
                        "Höhere Effizienz und Einsparungen",
                        "Benutzerfreundliche Implementierung",
                        "Langfristige Betreuung und Support"
                      ]
                  ).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5 ${
                        isCreativeMode 
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
                  <p className="font-medium mb-1 text-sm">Schneller Kontakt:</p>
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
