
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const WHATSAPP_URL = 'https://wa.me/41782143613';

// Formular Schema mit Zod für Validierung
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name muss mindestens 2 Zeichen lang sein' }),
  email: z.string().email({ message: 'Ungültige E-Mail-Adresse' }),
  subject: z.string().min(3, { message: 'Betreff muss mindestens 3 Zeichen lang sein' }),
  message: z.string().min(10, { message: 'Nachricht muss mindestens 10 Zeichen lang sein' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simuliere API-Anfrage
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form data:', data);
      
      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns in Kürze bei Ihnen melden.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Fehler beim Senden",
        description: "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-36 px-6 md:px-10">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="section-heading mb-4">
            {isCreativeMode ? (
              "Bereit, dein nächstes Projekt zum Erlebnis zu machen?"
            ) : (
              "Kontaktieren Sie uns"
            )}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isCreativeMode ? (
              "Lass uns gemeinsam ein Projekt starten, das wirklich beeindruckt und deine Ziele erreicht."
            ) : (
              "Schreiben Sie uns eine Nachricht – wir antworten in der Regel innerhalb von 24 h."
            )}
          </p>
        </div>
        
        <motion.div
          className={`rounded-xl p-8 md:p-12 ${
            isCreativeMode 
            ? 'neo-blur border border-primary/20 neon-glow' 
            : 'bg-card shadow-lg border border-border/40'
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Ihr Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Max Mustermann" 
                        className={`p-6 rounded-lg border-2 transition-all duration-200 focus-visible:ring-primary ${
                          isCreativeMode 
                          ? 'bg-black/30 border-white/10 text-white' 
                          : 'shadow-sm hover:border-primary/50'
                        }`} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Ihre E-Mail-Adresse</FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder="max.mustermann@beispiel.de" 
                        className={`p-6 rounded-lg border-2 transition-all duration-200 focus-visible:ring-primary ${
                          isCreativeMode 
                          ? 'bg-black/30 border-white/10 text-white' 
                          : 'shadow-sm hover:border-primary/50'
                        }`} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Betreff</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Projektanfrage" 
                        className={`p-6 rounded-lg border-2 transition-all duration-200 focus-visible:ring-primary ${
                          isCreativeMode 
                          ? 'bg-black/30 border-white/10 text-white' 
                          : 'shadow-sm hover:border-primary/50'
                        }`} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-medium">Ihre Nachricht</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Beschreiben Sie Ihr Anliegen..." 
                        className={`p-6 rounded-lg border-2 transition-all duration-200 focus-visible:ring-primary min-h-[150px] ${
                          isCreativeMode 
                          ? 'bg-black/30 border-white/10 text-white' 
                          : 'shadow-sm hover:border-primary/50'
                        }`} 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className={`px-8 py-6 rounded-full font-medium text-base transition-all duration-300 ${
                    isCreativeMode 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:shadow-[0_0_15px_rgba(139,92,246,0.5)]' 
                    : 'bg-[#25D366] text-white hover:bg-[#22c05d]'
                  }`}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </div>
            </form>
          </Form>
          
          <div className="mt-16 pt-10 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-3">Du möchtest lieber direkt schreiben?</h3>
              <p className="text-muted-foreground mb-6">
                Kontaktiere uns unkompliziert über WhatsApp – wir antworten so schnell wie möglich.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  isCreativeMode
                  ? 'bg-[#25D366] text-white hover:bg-[#22c05d] hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]'
                  : 'bg-[#25D366] text-white hover:bg-[#22c05d]'
                }`}
              >
                <div className="w-7 h-7 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/2e548e9c-b027-4f5d-b3cc-db66ee567225.png" 
                    alt="WhatsApp" 
                    className="w-full h-full object-contain"
                  />
                </div>
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
