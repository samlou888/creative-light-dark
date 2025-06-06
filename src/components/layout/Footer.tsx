
import React, { memo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import LegalDialog from '@/components/legal/LegalDialog';

const Footer = memo(() => {
  const { mode, setMode } = useTheme();
  const { language } = useLanguage();
  const location = useLocation();
  const isCreative = mode === 'creative';
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"impressum" | "datenschutz" | "agb">("impressum");
  
  const isEnglish = language === 'en';
  const isFrench = language === 'fr';
  
  const handleModeChange = (newMode: 'automation' | 'creative' | 'academy') => {
    setMode(newMode);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLegalClick = (section: "impressum" | "datenschutz" | "agb") => {
    setSelectedTab(section);
    setDialogOpen(true);
  };

  return (
    <>
      <footer className={`py-10 ${isCreative ? 'dark-card mt-16' : 'border-t mt-20'}`}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                <span className="text-primary">AI</span>ventures
              </h3>
              <p className="text-muted-foreground">
                {isFrench ? (
                  <>
                    Nous révolutionnons<br />
                    les entreprises grâce à<br />
                    des solutions d'IA qui fonctionnent.
                  </>
                ) : isEnglish ? (
                  <>
                    We revolutionize<br />
                    businesses through<br />
                    AI solutions that actually work.
                  </>
                ) : (
                  <>
                    Wir revolutionieren<br />
                    Unternehmen durch<br />
                    AI-Lösungen, die wirklich funktionieren.
                  </>
                )}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {isFrench ? 'Services' : isEnglish ? 'Services' : 'Services'}
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleModeChange('automation')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isFrench ? 'Automatisation' : isEnglish ? 'Automation' : 'Automation'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleModeChange('creative')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isFrench ? 'Studio' : isEnglish ? 'Studio' : 'Studio'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleModeChange('academy')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isFrench ? 'Académie' : isEnglish ? 'Academy' : 'Academy'}
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {isFrench ? 'Contact' : isEnglish ? 'Contact' : 'Kontakt'}
              </h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">info@aiventures.ch</li>
                <li className="text-muted-foreground">
                  Biel/Bienne, {isFrench ? 'Suisse' : isEnglish ? 'Switzerland' : 'Schweiz'}
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">
                {isFrench ? 'Mentions légales' : isEnglish ? 'Legal' : 'Rechtliches'}
              </h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleLegalClick('impressum')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isFrench ? 'Mentions légales' : isEnglish ? 'Imprint' : 'Impressum'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLegalClick('datenschutz')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isFrench ? 'Politique de confidentialité' : isEnglish ? 'Privacy Policy' : 'Datenschutz'}
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLegalClick('agb')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {isFrench ? 'Conditions générales' : isEnglish ? 'Terms and Conditions' : 'AGB'}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800">
            <p className="text-center text-muted-foreground text-sm">
              © {new Date().getFullYear()} AIventures. {isFrench ? 'Tous droits réservés.' : isEnglish ? 'All rights reserved.' : 'Alle Rechte vorbehalten.'}
            </p>
          </div>
        </div>
      </footer>

      <LegalDialog 
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        defaultTab={selectedTab}
      />
    </>
  );
});

Footer.displayName = 'Footer';

export default Footer;
