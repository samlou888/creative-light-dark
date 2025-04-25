
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const ContactSection = () => {
  const { mode } = useTheme();
  
  return (
    <section id="contact" className="py-24 px-6 md:px-10 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-8">Contact Us</h2>
        <p className="text-center text-lg text-muted-foreground mb-12">
          This section will include the contact form and information.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
