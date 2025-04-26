
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { contactTexts } from './translations';

const ContactForm = () => {
  const { mode } = useTheme();
  const { language } = useLanguage();
  const { toast } = useToast();
  const t = contactTexts[language].form;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: language === 'en' ? "Request received" 
        : language === 'fr' ? "Demande reçue"
        : "Anfrage erhalten",
      description: language === 'en' 
        ? "Thank you for your message. We will get back to you shortly."
        : language === 'fr'
        ? "Merci pour votre message. Nous vous répondrons dans les plus brefs délais."
        : "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      duration: 5000,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">{t.name}</label>
        <input 
          type="text" 
          id="name" 
          className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
          required 
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">{t.email}</label>
        <input 
          type="email" 
          id="email" 
          className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
          required 
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">{t.message}</label>
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
        {t.submit}
      </button>
    </form>
  );
};

export default ContactForm;
