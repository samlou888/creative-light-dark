
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/contexts/ThemeContext';
import LegalDialog from '@/components/legal/LegalDialog';

const Footer = memo(() => {
  const { mode, setMode } = useTheme();
  const navigate = useNavigate();
  const isCreative = mode === 'creative';
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"impressum" | "datenschutz" | "agb">("impressum");

  const handleModeChange = (newMode: 'automation' | 'creative' | 'academy') => {
    setMode(newMode);
    navigate('/', { replace: true });
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
                Wir revolutionieren<br />
                Unternehmen durch<br />
                AI-Lösungen, die wirklich funktionieren.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => handleModeChange('automation')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Automation
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleModeChange('creative')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Studio
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleModeChange('academy')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Academy
                  </button>
                </li>
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
                <li>
                  <button 
                    onClick={() => handleLegalClick('impressum')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLegalClick('datenschutz')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Datenschutz
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleLegalClick('agb')} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    AGB
                  </button>
                </li>
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
