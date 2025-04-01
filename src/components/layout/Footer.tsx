
import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { isCreativeMode } = useTheme();

  return (
    <footer className={`py-10 ${isCreativeMode ? 'dark-card mt-16' : 'border-t mt-20'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">AI</span>ventures
            </h3>
            <p className="text-muted-foreground">
              Wir revolutionieren Unternehmen durch AI-Lösungen, die wirklich funktionieren.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#studio" className="text-muted-foreground hover:text-primary transition-colors">Studio</a></li>
              <li><a href="#automation" className="text-muted-foreground hover:text-primary transition-colors">Automation</a></li>
              <li><a href="#academy" className="text-muted-foreground hover:text-primary transition-colors">Academy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@aiventures.de</li>
              <li className="text-muted-foreground">+49 123 4567890</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Impressum</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} AIventures. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
