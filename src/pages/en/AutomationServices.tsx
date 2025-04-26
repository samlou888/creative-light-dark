import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Mail, Calendar, Workflow, FileText } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

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

const AutomationServicesEn = () => {
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
                Automate. Optimize. Scale.
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-10"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                Transform your business with tailor-made AI solutions. We help you work more efficiently, 
                optimize processes, and scale effectively.
              </motion.p>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <Button size="lg" className="primary-btn">
                  Book Your Appointment Now <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <Card className="border-2 border-primary/30 rounded-2xl shadow-md bg-card">
            <div className="offers-container">
              <motion.div 
                className="offers-title"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="section-heading mb-4">What We Automate</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our automation solutions cover various business areas to save time and reduce errors.
                </p>
              </motion.div>
              
              <motion.div 
                className="offers-cards"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <AutomationCard 
                  icon={<Users />}
                  title="CRM Flows"
                  description="Automate customer relationship management for personalized interactions without manual effort."
                />
                
                <AutomationCard 
                  icon={<Mail />}
                  title="Email Marketing"
                  description="Set up automated email campaigns that respond to user behavior and preferences."
                />
                
                <AutomationCard 
                  icon={<Calendar />}
                  title="Calendar Bookings"
                  description="Simplify appointment scheduling with automatic confirmations and reminders."
                />
                
                <AutomationCard 
                  icon={<Workflow />}
                  title="Internal Workflows"
                  description="Optimize internal processes through automated task management and notifications."
                />
                
                <AutomationCard 
                  icon={<FileText />}
                  title="Invoicing"
                  description="Automate the creation, sending, and tracking of invoices."
                />
                
                <AutomationCard 
                  icon={<Users />}
                  title="Customer Onboarding"
                  description="Provide new customers with a seamless onboarding experience through automated processes."
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
            <h2 className="section-heading mb-4">Our Technologies</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We use industry-leading tools and platforms to create the most effective automation solutions.
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
            <h2 className="section-heading mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From initial analysis to final handover – a transparent and effective process.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <ProcessStep 
              number="01"
              title="Process Analysis"
              description="We analyze your current workflows, identify bottlenecks, and find automation opportunities."
            />
            
            <ProcessStep 
              number="02"
              title="Automation Proposal"
              description="Based on our analysis, we develop tailored automation solutions for your requirements."
            />
            
            <ProcessStep 
              number="03"
              title="Implementation & Integration"
              description="We implement the automations and seamlessly integrate them into your existing systems."
            />
            
            <ProcessStep 
              number="04"
              title="Handover & Training"
              description="After successful implementation, we train your team on the new processes."
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
              Ready for the Next Step?
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              Book a free process check and discover how automation can transform your business.
            </motion.p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Button size="lg" className="primary-btn">
                Book Process Check Now <ArrowRight className="ml-2" />
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

export default AutomationServicesEn;
