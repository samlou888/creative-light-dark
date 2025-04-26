import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, BarChart, Workflow, Zap, Mail, Calendar, FileText, Users } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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

const AutomationServicesFr = () => {
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
                Automatiser. Optimiser. Développer.
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                Transformez votre entreprise avec des solutions d'IA sur mesure. 
                Nous vous aidons à travailler plus efficacement, à optimiser vos processus et à accélérer votre croissance.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Button size="lg" className="primary-btn">
                  Prendre rendez-vous maintenant <ArrowRight className="ml-2" />
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
                  <h2 className="section-heading mb-4">Nos services d'automatisation</h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Nos solutions d'automatisation couvrent divers domaines d'activité pour gagner du temps et réduire les erreurs.
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
                    title="Flux CRM"
                    description="Automatisez la gestion de la relation client pour des interactions personnalisées sans effort manuel."
                  />
                  
                  <AutomationCard 
                    icon={<Mail />}
                    title="E-mail Marketing"
                    description="Configurez des campagnes e-mail automatisées qui répondent au comportement et aux préférences des utilisateurs."
                  />
                  
                  <AutomationCard 
                    icon={<Calendar />}
                    title="Réservation de calendrier"
                    description="Simplifiez la planification des rendez-vous avec des confirmations et des rappels automatiques."
                  />
                  
                  <AutomationCard 
                    icon={<Workflow />}
                    title="Flux de travail internes"
                    description="Optimisez les processus internes grâce à la gestion automatisée des tâches et aux notifications."
                  />
                  
                  <AutomationCard 
                    icon={<FileText />}
                    title="Facturation"
                    description="Automatisez la création, l'envoi et le suivi des factures."
                  />
                  
                  <AutomationCard 
                    icon={<Users />}
                    title="Intégration des clients"
                    description="Offrez aux nouveaux clients une expérience d'intégration fluide grâce à des processus automatisés."
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
              <h2 className="section-heading mb-4">Nos technologies</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Nous utilisons des outils et des plateformes leaders du secteur pour créer les solutions d'automatisation les plus efficaces.
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
              <h2 className="section-heading mb-4">Notre processus</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                De l'analyse initiale à la livraison finale – un processus transparent et efficace.
              </p>
            </motion.div>
            
            <div className="max-w-4xl mx-auto">
              <ProcessStep 
                number="01"
                title="Analyse des processus"
                description="Nous analysons vos flux de travail actuels, identifions les goulots d'étranglement et trouvons des opportunités d'automatisation."
              />
              
              <ProcessStep 
                number="02"
                title="Proposition d'automatisation"
                description="Sur la base de notre analyse, nous développons des solutions d'automatisation sur mesure pour vos besoins."
              />
              
              <ProcessStep 
                number="03"
                title="Mise en œuvre et intégration"
                description="Nous mettons en œuvre les automatisations et les intégrons parfaitement dans vos systèmes existants."
              />
              
              <ProcessStep 
                number="04"
                title="Transfert et formation"
                description="Après une mise en œuvre réussie, nous formons votre équipe aux nouveaux processus."
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
                Prêt pour la prochaine étape ?
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                Réservez un audit gratuit de vos processus et découvrez comment l'automatisation peut transformer votre entreprise.
              </motion.p>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <Button size="lg" className="primary-btn">
                  Réserver votre audit maintenant <ArrowRight className="ml-2" />
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

export default AutomationServicesFr;
