
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = memo(() => {
  const { mode } = useTheme();
  const { language, t } = useLanguage();
  const isCreative = mode === 'creative';
  
  // Get the current year for copyright
  const currentYear = new Date().getFullYear();
  
  // Determine the correct paths based on language
  const getPath = (page: string) => {
    switch (language) {
      case 'en':
        switch (page) {
          case 'impressum': return '/en/imprint';
          case 'datenschutz': return '/en/privacy-policy';
          case 'agb': return '/en/terms';
          case 'studio': return '/en/creative-studio';
          case 'automation': return '/en/automation-services';
          case 'academy': return '/en/academy';
          default: return `/en/${page}`;
        }
      case 'fr':
        switch (page) {
          case 'impressum': return '/fr/mentions-legales';
          case 'datenschutz': return '/fr/confidentialite';
          case 'agb': return '/fr/conditions';
          case 'studio': return '/fr/creative-studio';
          case 'automation': return '/fr/automation-services';
          case 'academy': return '/fr/academy';
          default: return `/fr/${page}`;
        }
      default: // German
        return `/de/${page}`;
    }
  };

  return (
    <footer className={`py-10 ${isCreative ? 'dark-card mt-16' : 'border-t mt-20'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">AI</span>ventures
            </h3>
            <p className="text-muted-foreground">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={getPath('creative-studio')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.studio')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('automation-services')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.automation')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('academy')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.academy')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">info@aiventures.ch</li>
              <li className="text-muted-foreground">Biel/Bienne, Schweiz</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to={getPath('impressum')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.imprint')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('datenschutz')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to={getPath('agb')} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-muted-foreground text-sm">
            {t('footer.copyright').replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
