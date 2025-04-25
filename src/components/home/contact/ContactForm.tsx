
import React from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Anfrage erhalten",
      description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden.",
      duration: 5000,
    });
  };

  return (
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
        className="w-full primary-btn"
      >
        Nachricht senden
      </button>
    </form>
  );
};

export default ContactForm;
