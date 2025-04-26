
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useLanguage } from '@/contexts/LanguageContext';
import LegalDialogContent from './LegalDialogContent';

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab: "impressum" | "datenschutz" | "agb";
}

const LegalDialog: React.FC<LegalDialogProps> = ({ 
  open, 
  onOpenChange,
  defaultTab 
}) => {
  const { language } = useLanguage();
  const isEnglish = language === 'en';
  const isFrench = language === 'fr';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {isFrench ? 'Informations légales' : 
             isEnglish ? 'Legal Information' : 
             'Rechtliche Informationen'}
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="impressum">
              {isFrench ? 'Mentions légales' : 
               isEnglish ? 'Imprint' : 
               'Impressum'}
            </TabsTrigger>
            <TabsTrigger value="datenschutz">
              {isFrench ? 'Politique de confidentialité' : 
               isEnglish ? 'Privacy Policy' : 
               'Datenschutz'}
            </TabsTrigger>
            <TabsTrigger value="agb">
              {isFrench ? 'Conditions générales' : 
               isEnglish ? 'Terms & Conditions' : 
               'AGB'}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="impressum" className="mt-6">
            <LegalDialogContent tab="impressum" />
          </TabsContent>
          <TabsContent value="datenschutz" className="mt-6">
            <LegalDialogContent tab="datenschutz" />
          </TabsContent>
          <TabsContent value="agb" className="mt-6">
            <LegalDialogContent tab="agb" />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
