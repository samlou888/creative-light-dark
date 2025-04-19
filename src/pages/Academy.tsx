import React from 'react';
import { motion } from 'framer-motion';
import { Book, Calendar, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Academy = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const courses = [
    {
      title: "Prompt Engineering",
      description: "Lerne die Kunst des effektiven Prompting für bessere AI-Ergebnisse.",
      icon: <Book className="h-6 w-6 text-primary" />,
      features: ["Live-Demos", "Templates", "Best Practices"]
    },
    {
      title: "KI im Business",
      description: "Entdecke praktische Anwendungen für deinen Geschäftsalltag.",
      icon: <Book className="h-6 w-6 text-primary" />,
      features: ["Automatisierung", "Content Erstellung", "Tool-Auswahl"]
    },
    {
      title: "KI für Einsteiger:innen",
      description: "Der perfekte Start in die Welt der künstlichen Intelligenz.",
      icon: <Book className="h-6 w-6 text-primary" />,
      features: ["Grundlagen", "Einstieg", "Setup"]
    }
  ];
  
  const formats = [
    { name: "Live", description: "Vor-Ort Workshops mit praktischen Übungen" },
    { name: "Digital", description: "Online-Kurse im eigenen Tempo" },
    { name: "Hybrid", description: "Flexible Kombination aus Live und Digital" }
  ];
  
  const benefits = [
    { text: "Praxisnah", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Sofort umsetzbar", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Keine Vorkenntnisse nötig", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
                AI Academy
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Lerne, wie du AI zu deinem Vorteil nutzt.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Unsere Academy bietet Workshops, Kurse und 1:1 Coachings – speziell für den praktischen Einsatz in Alltag & Business.
              </p>
              <Button size="lg" className="rounded-full">
                Jetzt Kursübersicht anfordern
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Courses Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Kurse & Inhalte</h2>
              <p className="text-muted-foreground">
                Praxisnahe Kurse für deinen persönlichen und beruflichen Erfolg mit KI.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.div
                    className="h-full border-primary/10 transition-all duration-300 bg-card rounded-xl border shadow-sm"
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(60, 214, 120, 0.15), 0 8px 10px -6px rgba(60, 214, 120, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 1)",
                      borderColor: "rgba(60, 214, 120, 0.3)"
                    }}
                    transition={{ 
                      duration: 0.25, 
                      ease: "easeOut" 
                    }}
                  >
                    <CardHeader>
                      <div className="mb-2">{course.icon}</div>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {course.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="text-primary mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Formats Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Flexible Formate</h2>
              <p className="text-muted-foreground">
                Wähle das Format, das am besten zu dir und deinen Lernpräferenzen passt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {formats.map((format, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-muted/20 rounded-lg p-6 text-center hover:bg-muted/40 transition-colors"
                >
                  <h3 className="text-xl font-medium mb-2">{format.name}</h3>
                  <p className="text-muted-foreground">{format.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Deine Vorteile</h2>
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <div className="mr-4">{benefit.icon}</div>
                        <p className="text-lg">{benefit.text}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-primary/5 rounded-xl p-8"
                >
                  <h3 className="text-2xl font-bold mb-6">Bereit, AI zu meistern?</h3>
                  <p className="text-muted-foreground mb-6">
                    Fordere jetzt die Übersicht aller verfügbaren Kurse an und starte deinen Weg zum AI-Experten.
                  </p>
                  <Button size="lg" className="w-full rounded-full">
                    <Calendar className="mr-2 h-5 w-5" />
                    Jetzt Kursübersicht anfordern
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Starte deine KI-Reise noch heute
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Von Anfänger bis Fortgeschrittene - wir begleiten dich auf jedem Schritt deines Weges.
                </p>
                <Button size="lg" className="rounded-full">
                  Jetzt Kursübersicht anfordern
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

export default Academy;
