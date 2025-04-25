
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mail, Calendar, Workflow, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BaseLayout from '@/layouts/BaseLayout';
import AutomationHero from '@/components/automation/AutomationHero';
import AutomationCard from '@/components/automation/AutomationCard';
import ProcessStep from '@/components/automation/ProcessStep';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const AutomationServices = () => {
  return (
    <BaseLayout className="bg-gradient-to-b from-green-50/50 to-white dark:from-green-950/20 dark:to-black/50">
      <AutomationHero />
      
      {/* What We Automate Section */}
      <section className="py-20 bg-green-50/50 dark:bg-green-950/20 px-6 md:px-10">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h2 className="text-3xl font-bold mb-4">Was wir automatisieren</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unsere Automationslösungen decken verschiedene Geschäftsbereiche ab, um Zeit zu sparen und Fehler zu reduzieren.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <AutomationCard 
              icon={<Users />}
              title="CRM-Flows"
              description="Automatisiere Kundenbeziehungsmanagement für personalisierte Interaktionen ohne manuellen Aufwand."
            />
            <AutomationCard 
              icon={<Mail />}
              title="E-Mail-Marketing"
              description="Setze automatisierte E-Mail-Kampagnen auf, die auf Nutzerverhalten und -präferenzen reagieren."
            />
            <AutomationCard 
              icon={<Calendar />}
              title="Kalenderbuchungen"
              description="Vereinfache Terminvereinbarungen mit automatischen Bestätigungen und Erinnerungen."
            />
            <AutomationCard 
              icon={<Workflow />}
              title="Interne Workflows"
              description="Optimiere interne Prozesse durch automatisierte Aufgabenverwaltung und Benachrichtigungen."
            />
            <AutomationCard 
              icon={<FileText />}
              title="Rechnungen"
              description="Automatisiere die Erstellung, Versendung und Verfolgung von Rechnungen."
            />
            <AutomationCard 
              icon={<Users />}
              title="Kunden-Onboarding"
              description="Biete neuen Kunden ein nahtloses Onboarding-Erlebnis durch automatisierte Prozesse."
            />
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Unser Vorgehen</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Von der ersten Analyse bis zur finalen Übergabe – ein transparenter und effektiver Prozess.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <ProcessStep 
              number="01"
              title="Analyse deiner Prozesse"
              description="Wir analysieren deine aktuellen Workflows, identifizieren Engpässe und finden Automatisierungspotentiale."
            />
            <ProcessStep 
              number="02"
              title="Vorschlag der Automationen"
              description="Basierend auf unserer Analyse entwickeln wir maßgeschneiderte Automatisierungslösungen für deine Anforderungen."
            />
            <ProcessStep 
              number="03"
              title="Umsetzung & Integration"
              description="Wir implementieren die Automationen und integrieren sie nahtlos in deine bestehenden Systeme."
            />
            <ProcessStep 
              number="04"
              title="Übergabe & Schulung"
              description="Nach erfolgreicher Umsetzung führen wir dein Team durch Schulungen an die neuen Prozesse heran."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-10 bg-green-50/80 dark:bg-green-950/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Bereit für den nächsten Schritt?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Buche einen kostenlosen Prozess-Check und entdecke, wie Automatisierung dein Unternehmen transformieren kann.
            </motion.p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Button size="lg" className="primary-btn">
                Jetzt Prozess-Check buchen
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default AutomationServices;
