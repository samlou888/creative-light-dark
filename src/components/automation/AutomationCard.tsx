
import React from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

interface AutomationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AutomationCard = ({ icon, title, description }: AutomationCardProps) => (
  <motion.div 
    className="light-card dark-card h-full"
    variants={fadeIn}
  >
    <div className="text-primary mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

export default AutomationCard;
