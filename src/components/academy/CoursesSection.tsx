import React from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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

const CoursesSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 hover-glow">Unsere Angebote</h2>
          <p className="text-muted-foreground">
            Praxisnahe Kurse für deinen persönlichen und beruflichen Erfolg mit KI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div className="offer-card h-full">
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
  );
};

export default CoursesSection;
