
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { isCreativeMode } = useTheme();
  const { t, language } = useLanguage();

  // Create language-specific paths
  const getLocalizedPath = (path: string) => {
    return language === 'de' ? path : `/${language}${path}`;
  };

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
              <li><Link to={getLocalizedPath("/creative-studio")} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.studio')}</Link></li>
              <li><Link to={getLocalizedPath("/automation-services")} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.automation')}</Link></li>
              <li><Link to={getLocalizedPath("/academy")} className="text-muted-foreground hover:text-primary transition-colors">{t('nav.academy')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@aiventures.ch</li>
              <li className="text-muted-foreground">Biel/Bienne, Schweiz</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><Link to={getLocalizedPath("/impressum")} className="text-muted-foreground hover:text-primary transition-colors">Impressum</Link></li>
              <li><Link to={getLocalizedPath("/datenschutz")} className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</Link></li>
              <li><Link to={getLocalizedPath("/agb")} className="text-muted-foreground hover:text-primary transition-colors">AGB</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} AIventures. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
