
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: t('contact.toast.title'),
      description: t('contact.toast.description'),
      duration: 5000,
    });
  };

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
                    ? t('contact.heading.creative')
                    : t('contact.heading.standard')
                  }
                </h2>
                <p className="text-muted-foreground text-sm mb-4">
                  {isCreativeMode 
                    ? t('contact.description.creative')
                    : t('contact.description.standard')
                  }
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">{t('contact.form.name')}</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">{t('contact.form.email')}</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full p-2 rounded-lg border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">{t('contact.form.message')}</label>
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
                    {isCreativeMode 
                      ? t('contact.form.submit.creative') 
                      : t('contact.form.submit.standard')
                    }
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
                    ? t('contact.benefits.heading.creative')
                    : t('contact.benefits.heading.standard')
                  }
                </h3>
                
                <ul className="space-y-2">
                  {(isCreativeMode 
                    ? t('contact.benefits.creative')
                    : t('contact.benefits.standard')
                  ).map((item: string, index: number) => (
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
                  <p className="font-medium mb-1 text-sm">{t('contact.quickContact')}</p>
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
