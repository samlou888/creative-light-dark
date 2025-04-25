
import React from 'react';
import { motion } from 'framer-motion';

const formats = [
  { name: "Live", description: "Vor-Ort Workshops mit praktischen Übungen" },
  { name: "Digital", description: "Online-Kurse im eigenen Tempo" },
  { name: "Hybrid", description: "Flexible Kombination aus Live und Digital" }
];

const FormatsSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
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
  );
};

export default FormatsSection;
