import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface LegalDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultTab: "impressum" | "datenschutz" | "agb";
}

const LegalDialog: React.FC<LegalDialogProps> = ({
  open,
  onOpenChange,
  defaultTab,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-2">
            Rechtliche Informationen
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue={defaultTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="impressum">Impressum</TabsTrigger>
            <TabsTrigger value="datenschutz">Datenschutz</TabsTrigger>
            <TabsTrigger value="agb">AGB</TabsTrigger>
          </TabsList>

          <TabsContent value="impressum" className="space-y-4">
            <h2 className="text-xl font-semibold">Impressum</h2>
            <h3 className="text-lg font-medium mt-4">Angaben gemäß § 5 TMG</h3>
            <p>AIventures GmbH<br />
               Musterstraße 123<br />
               2500 Biel/Bienne<br />
               Schweiz</p>
            
            <h3 className="text-lg font-medium mt-4">Kontakt</h3>
            <p>Telefon: +41 123 456 789<br />
               E-Mail: info@aiventures.ch</p>
            
            <h3 className="text-lg font-medium mt-4">Handelsregistereintrag</h3>
            <p>Eingetragen im Handelsregister des Kantons Bern<br />
               Handelsregisternummer: CHE-123.456.789</p>
            
            <h3 className="text-lg font-medium mt-4">Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
               CHE-123.456.789 MWST</p>
          </TabsContent>

          <TabsContent value="datenschutz" className="space-y-4">
            <h2 className="text-xl font-semibold">Datenschutzerklärung</h2>
            <p>Stand: April 2025</p>
            
            <h3 className="text-lg font-medium mt-4">1. Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
            
            <h3 className="text-lg font-medium mt-4">2. Datenerfassung auf unserer Website</h3>
            <h4 className="font-medium">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            
            <h4 className="font-medium mt-3">Wie erfassen wir Ihre Daten?</h4>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
            
            <h4 className="font-medium mt-3">Wofür nutzen wir Ihre Daten?</h4>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
            
            <h3 className="text-lg font-medium mt-4">3. Ihre Rechte</h3>
            <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
          </TabsContent>

          <TabsContent value="agb" className="space-y-4">
            <h2 className="text-xl font-semibold">Allgemeine Geschäftsbedingungen</h2>
            
            <h3 className="text-lg font-medium mt-4">1. Geltungsbereich</h3>
            <p>Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge, die zwischen der AIventures GmbH (nachfolgend "Anbieter") und dem Kunden über die Nutzung der angebotenen Dienstleistungen und Produkte geschlossen werden.</p>
            
            <h3 className="text-lg font-medium mt-4">2. Vertragsgegenstand</h3>
            <p>Gegenstand des Vertrages ist die Nutzung der vom Anbieter angebotenen KI-Lösungen und -Dienstleistungen gemäß der jeweiligen Produktbeschreibung.</p>
            
            <h3 className="text-lg font-medium mt-4">3. Vertragsschluss</h3>
            <p>Der Vertrag kommt durch die Annahme des Angebots des Kunden durch den Anbieter zustande. Die Annahme erfolgt durch eine Auftragsbestätigung per E-Mail oder durch die Freischaltung des Zugangs zu den Dienstleistungen.</p>
            
            <h3 className="text-lg font-medium mt-4">4. Preise und Zahlungsbedingungen</h3>
            <p>Die Preise richten sich nach der zum Zeitpunkt des Vertragsschlusses gültigen Preisliste oder individuellen Vereinbarung. Die Zahlung erfolgt gemäß den vereinbarten Zahlungsbedingungen.</p>
            
            <h3 className="text-lg font-medium mt-4">5. Laufzeit und Kündigung</h3>
            <p>Die Vertragslaufzeit und Kündigungsfristen richten sich nach dem gewählten Tarif oder der individuellen Vereinbarung. Die Kündigung bedarf der Textform (E-Mail, Brief).</p>
            
            <h3 className="text-lg font-medium mt-4">6. Datenschutz</h3>
            <p>Der Anbieter verarbeitet personenbezogene Daten des Kunden gemäß der Datenschutzerklärung, die auf der Website einsehbar ist.</p>
            
            <h3 className="text-lg font-medium mt-4">7. Schlussbestimmungen</h3>
            <p>Es gilt das Recht der Schweiz. Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Biel/Bienne, Schweiz.</p>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default LegalDialog;
