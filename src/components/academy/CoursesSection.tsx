import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const content = {
  en: {
    title: "Our Courses",
    description: "Practical courses for your personal and professional success with AI.",
    courses: [
      {
        title: "Prompt Engineering",
        description: "Learn the art of effective prompting for better AI results.",
        features: ["Live Demos", "Templates", "Best Practices"]
      },
      {
        title: "AI in Business",
        description: "Discover practical applications for your daily business.",
        features: ["Automation", "Content Creation", "Tool Selection"]
      },
      {
        title: "AI for Beginners",
        description: "The perfect start into the world of artificial intelligence.",
        features: ["Basics", "Getting Started", "Setup"]
      }
    ]
  },
  de: {
    title: "Unsere Angebote",
    description: "Praxisnahe Kurse für deinen persönlichen und beruflichen Erfolg mit KI.",
    courses: [
      {
        title: "Prompt Engineering",
        description: "Lerne die Kunst des effektiven Prompting für bessere AI-Ergebnisse.",
        features: ["Live-Demos", "Templates", "Best Practices"]
      },
      {
        title: "KI im Business",
        description: "Entdecke praktische Anwendungen für deinen Geschäftsalltag.",
        features: ["Automatisierung", "Content Erstellung", "Tool-Auswahl"]
      },
      {
        title: "KI für Einsteiger:innen",
        description: "Der perfekte Start in die Welt der künstlichen Intelligenz.",
        features: ["Grundlagen", "Einstieg", "Setup"]
      }
    ]
  },
  fr: {
    title: "Nos Cours",
    description: "Des cours pratiques pour votre succès personnel et professionnel avec l'IA.",
    courses: [
      {
        title: "Prompt Engineering",
        description: "Apprenez l'art du prompt efficace pour de meilleurs résultats avec l'IA.",
        features: ["Démos en direct", "Modèles", "Meilleures pratiques"]
      },
      {
        title: "IA en entreprise",
        description: "Découvrez des applications pratiques pour votre quotidien professionnel.",
        features: ["Automatisation", "Création de contenu", "Sélection d'outils"]
      },
      {
        title: "IA pour débutants",
        description: "Le départ parfait dans le monde de l'intelligence artificielle.",
        features: ["Fondamentaux", "Premiers pas", "Configuration"]
      }
    ]
  }
};

const CoursesSection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-12 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="p-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 hover-glow">{t.title}</h2>
                <p className="text-muted-foreground">
                  {t.description}
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {t.courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="h-full offer-card">
                      <CardHeader>
                        <div className="mb-2">
                          <Book className="h-6 w-6 text-primary" />
                        </div>
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
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
