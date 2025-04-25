
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { GraduationCap, MessageSquareText, BookText, Palette, Globe, Video, Workflow, Mail, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

// Define service data for each mode
const academyServices = [
  {
    id: 'academy-1',
    icon: <GraduationCap className="w-6 h-6 text-[#00CFFF]" />,
    title: 'AI Training',
    description: 'Customized workshops and training to qualify your team for AI applications.'
  },
  {
    id: 'academy-2',
    icon: <BookText className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Learning Materials',
    description: 'Comprehensive documentation and practical learning materials for effective self-study.'
  },
  {
    id: 'academy-3',
    icon: <MessageSquareText className="w-6 h-6 text-[#00CFFF]" />,
    title: 'Consulting',
    description: 'Individual consulting on integrating AI into existing processes and strategies.'
  }
];

const creativeServices = [
  {
    id: 'creative-1',
    icon: <Palette className="w-6 h-6 text-primary" />,
    title: 'Design & Conception',
    description: 'Creative concepts and designs for your digital presence using AI-supported tools.'
  },
  {
    id: 'creative-2',
    icon: <Globe className="w-6 h-6 text-primary" />,
    title: 'Web & App Development',
    description: 'Modern websites and apps with integration of advanced AI functionalities.'
  },
  {
    id: 'creative-3',
    icon: <Video className="w-6 h-6 text-primary" />,
    title: 'Content Creation',
    description: 'AI-assisted creation of texts, videos, and other content for your online presence.'
  }
];

const automationServices = [
  {
    id: 'automation-1',
    icon: <Workflow className="w-6 h-6 text-primary" />,
    title: 'Process Automation',
    description: 'Optimization and automation of your business processes through tailored AI solutions.'
  },
  {
    id: 'automation-2',
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: 'AI Development',
    description: 'Development of specialized AI applications for your individual business needs.'
  },
  {
    id: 'automation-3',
    icon: <Mail className="w-6 h-6 text-primary" />,
    title: 'Data Analysis',
    description: 'Comprehensive analysis of your business data to gain valuable insights.'
  }
];

const ServicesSection = () => {
  const { mode } = useTheme();
  const services = mode === 'academy' ? academyServices : mode === 'creative' ? creativeServices : automationServices;

  return (
    <section id="services" className="py-36 px-6 md:px-10 mt-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className={`section-heading mb-4 hover-glow ${
            mode === 'automation' ? 'title-automation' :
            mode === 'creative' ? 'title-creative' :
            mode === 'academy' ? 'title-academy' : ''
          }`} id="services-heading">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            {mode === 'academy' 
              ? "We offer tailored solutions for your company - from training to individual consulting."
              : mode === 'creative'
              ? "We combine creative expertise with advanced technology to create unique and forward-thinking solutions."
              : "We offer comprehensive AI solutions for companies looking to optimize their processes and reach their full potential."
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="offer-card hover-glow"
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-all duration-150 ${
                mode === 'academy'
                  ? 'bg-[#00CFFF]/10'
                  : mode === 'creative'
                  ? 'bg-[#00FB5C]/10 shadow-[0_0_15px_rgba(0,251,92,0.3)]'
                  : 'bg-primary/10'
              }`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
