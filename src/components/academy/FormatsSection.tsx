
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const content = {
  en: {
    title: "Flexible Formats",
    description: "Choose the format that best suits your learning preferences.",
    formats: [
      { name: "Live", description: "On-site workshops with practical exercises" },
      { name: "Digital", description: "Online courses at your own pace" },
      { name: "Hybrid", description: "Flexible combination of Live and Digital" }
    ]
  },
  de: {
    title: "Flexible Formate",
    description: "Wähle das Format, das am besten zu dir und deinen Lernpräferenzen passt.",
    formats: [
      { name: "Live", description: "Vor-Ort Workshops mit praktischen Übungen" },
      { name: "Digital", description: "Online-Kurse im eigenen Tempo" },
      { name: "Hybrid", description: "Flexible Kombination aus Live und Digital" }
    ]
  },
  fr: {
    title: "Formats Flexibles",
    description: "Choisissez le format qui correspond le mieux à vos préférences d'apprentissage.",
    formats: [
      { name: "En direct", description: "Ateliers sur place avec exercices pratiques" },
      { name: "Digital", description: "Cours en ligne à votre rythme" },
      { name: "Hybride", description: "Combinaison flexible du direct et du digital" }
    ]
  }
};

const FormatsSection = () => {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
          <p className="text-muted-foreground">
            {t.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.formats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
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
  );
};

export default FormatsSection;
