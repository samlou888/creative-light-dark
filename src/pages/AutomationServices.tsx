import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart, Workflow, Zap, Mail, Calendar, FileText, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-7xl px-6 py-12">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 md:px-10">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h1 
                className="section-heading mb-6"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                Automatisiere. Optimiere. Skaliere.
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                Reduziere manuelle Arbeit, spare Zeit und fokussiere dich aufs Wesentliche – mit intelligenten Automationen, 
                die sich perfekt in deine Prozesse integrieren.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Button size="lg" className="primary-btn">
                  Jetzt Prozess-Check buchen <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <Card className="overflow-hidden rounded-2xl border-primary/20">
              <div className="p-8">
                <motion.div 
                  className="text-center mb-16"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                >
                  <h2 className="section-heading mb-4">Was wir automatisieren</h2>
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
            </Card>
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="section-heading mb-4">Unsere Technologien</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Wir nutzen branchenführende Tools und Plattformen, um die effektivsten Automationslösungen zu schaffen.
              </p>
            </motion.div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <TechBadge name="Make" />
              <TechBadge name="Zapier" />
              <TechBadge name="Notion" />
              <TechBadge name="Airtable" />
              <TechBadge name="GPT" />
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900/30">
          <div className="container mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="section-heading mb-4">Unser Vorgehen</h2>
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
        <section className="py-20">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto light-card dark:dark-card p-8 rounded-2xl border border-primary/20">
              <motion.h2 
                className="section-heading mb-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                Bereit für den nächsten Schritt?
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                Buche einen kostenlosen Prozess-Check und entdecke, wie Automatisierung dein Unternehmen transformieren kann.
              </motion.p>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Button size="lg" className="primary-btn">
                  Jetzt Prozess-Check buchen <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

const AutomationCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div 
    className="light-card dark-card h-full"
    variants={fadeIn}
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const TechBadge = ({ name }: { name: string }) => (
  <motion.div 
    className="px-6 py-3 bg-white dark:bg-black/40 rounded-full shadow-sm dark:shadow-none dark:border dark:border-primary/20"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <span className="font-medium">{name}</span>
  </motion.div>
);

const ProcessStep = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <motion.div 
    className="flex gap-6 mb-12"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <div className="flex-shrink-0">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-white font-bold">
        {number}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

export default AutomationServices;
