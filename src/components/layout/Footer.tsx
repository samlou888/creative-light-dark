
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { isCreativeMode } = useTheme();
  const { t } = useLanguage();

  return (
    <footer className={`py-10 ${isCreativeMode ? 'dark-card mt-16' : 'border-t mt-20'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">AI</span>ventures
            </h3>
            <p className="text-muted-foreground">
              {t('footer.description')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li><Link to="/creative-studio" className="text-muted-foreground hover:text-primary transition-colors">Studio</Link></li>
              <li><Link to="/automation-services" className="text-muted-foreground hover:text-primary transition-colors">Automation</Link></li>
              <li><Link to="/academy" className="text-muted-foreground hover:text-primary transition-colors">Academy</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">{t('contact.quickContact.email')}</li>
              <li className="text-muted-foreground">Biel/Bienne, Schweiz</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to="/agb" className="text-muted-foreground hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-muted-foreground text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
