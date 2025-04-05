import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WHATSAPP_URL = 'https://wa.me/41782143613';

const ContactSection = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-36 px-6 md:px-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            {isCreativeMode ? (
              "Bereit, dein nächstes Projekt zum Erlebnis zu machen?"
            ) : (
              t('contact.title')
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode ? (
              "Lass uns gemeinsam ein Projekt starten, das wirklich beeindruckt und deine Ziele erreicht."
            ) : (
              t('contact.description')
            )}
          </p>
        </div>
        
        <motion.div
          className={`rounded-xl p-8 md:p-10 ${
            isCreativeMode 
            ? 'neo-blur border border-primary/20 neon-glow' 
            : 'bg-card'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`w-full px-4 py-2 rounded-md ${
                    isCreativeMode 
                    ? 'bg-black/30 border border-white/10 text-white' 
                    : 'bg-input'
                  }`}
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full px-4 py-2 rounded-md ${
                    isCreativeMode 
                    ? 'bg-black/30 border border-white/10 text-white' 
                    : 'bg-input'
                  }`}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className={`w-full px-4 py-2 rounded-md ${
                  isCreativeMode 
                  ? 'bg-black/30 border border-white/10 text-white' 
                  : 'bg-input'
                }`}
                placeholder={t('contact.form.subjectPlaceholder')}
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`w-full px-4 py-2 rounded-md ${
                  isCreativeMode 
                  ? 'bg-black/30 border border-white/10 text-white' 
                  : 'bg-input'
                }`}
                placeholder={t('contact.form.messagePlaceholder')}
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                  isCreativeMode 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {isCreativeMode ? "Projektanfrage starten" : t('contact.form.submit')}
              </button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Du möchtest lieber direkt schreiben?</h3>
              <p className="text-muted-foreground mb-6">
                Kontaktiere uns unkompliziert über WhatsApp – wir antworten so schnell wie möglich.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isCreativeMode
                  ? 'bg-[#25D366] text-white hover:bg-[#22c05d] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]'
                  : 'bg-[#25D366] text-white hover:bg-[#22c05d]'
                }`}
              >
                <MessageCircle className="w-5 h-5" />
                <span>👉 Jetzt auf WhatsApp schreiben</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
