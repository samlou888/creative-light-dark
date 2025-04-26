
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// German content
const germanContent = {
  impressum: (
    <>
      <h2 className="text-xl font-semibold mb-4">Angaben gemäss Schweizer Recht</h2>
      <p className="mb-4">
        Diese Website wird betrieben von:
      </p>
      <address className="not-italic mb-6">
        <strong>AIventures</strong><br />
        Sam Lou<br />
        Bahnhofstrasse 10<br />
        2502 Biel/Bienne<br />
        Schweiz<br /><br />
        E-Mail: <a href="mailto:info@aiventures.ch" className="text-primary hover:underline">info@aiventures.ch</a><br />
        Website: <a href="https://aiventures.ch" className="text-primary hover:underline">www.aiventures.ch</a>
      </address>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Vertretungsberechtigte Person</h2>
        <p>
          Sam Lou, Geschäftsführer
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Handelsregistereintrag</h2>
        <p>
          Eingetragen im Handelsregister des Kantons Bern<br />
          Firmennummer: CHE-123.456.789
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Mehrwertsteuernummer</h2>
        <p>
          CHE-123.456.789 MWST
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Haftungsausschluss</h2>
        <p className="mb-4">
          Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
        </p>
        <p>
          Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Urheberrechte</h2>
        <p>
          Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website gehören ausschliesslich AIventures oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.
        </p>
      </section>
    </>
  ),

  datenschutz: (
    <>
      <h2 className="text-xl font-semibold mb-4">1. Einleitung</h2>
      <p className="mb-4">
        Der Schutz Ihrer Privatsphäre ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie über die Bearbeitung von Personendaten im Zusammenhang mit unserer Website und unseren Dienstleistungen.
      </p>
      <p>
        Diese Datenschutzerklärung ist auf das Schweizerische Datenschutzgesetz (DSG) ausgerichtet und berücksichtigt die Grundsätze der Europäischen Datenschutz-Grundverordnung (DSGVO).
      </p>
      
      {/* Additional sections would go here */}
    </>
  ),

  agb: (
    <>
      <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
      <p className="mb-4">
        Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln die Geschäftsbeziehung zwischen AIventures (nachfolgend "wir" oder "uns") und unseren Kunden (nachfolgend "Sie" oder "Kunde").
      </p>
      <p>
        Mit der Beauftragung unserer Dienstleistungen oder der Nutzung unserer Website erklären Sie sich mit diesen AGB einverstanden. Abweichende Bedingungen des Kunden gelten nur, wenn wir diesen ausdrücklich schriftlich zugestimmt haben.
      </p>
      
      {/* Additional sections would go here */}
    </>
  )
};

// English content
const englishContent = {
  impressum: (
    <>
      <h2 className="text-xl font-semibold mb-4">Information according to Swiss law</h2>
      <p className="mb-4">
        This website is operated by:
      </p>
      <address className="not-italic mb-6">
        <strong>AIventures</strong><br />
        Sam Lou<br />
        Bahnhofstrasse 10<br />
        2502 Biel/Bienne<br />
        Switzerland<br /><br />
        Email: <a href="mailto:info@aiventures.ch" className="text-primary hover:underline">info@aiventures.ch</a><br />
        Website: <a href="https://aiventures.ch" className="text-primary hover:underline">www.aiventures.ch</a>
      </address>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Authorized Representative</h2>
        <p>
          Sam Lou, CEO
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Commercial Register Entry</h2>
        <p>
          Registered in the Commercial Register of the Canton of Bern<br />
          Company number: CHE-123.456.789
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">VAT Number</h2>
        <p>
          CHE-123.456.789 VAT
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The author assumes no responsibility for the correctness, accuracy, timeliness, reliability, and completeness of the information.
        </p>
        <p>
          Liability claims against the author for material or immaterial damage resulting from access to or use or non-use of the published information are excluded.
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Copyright</h2>
        <p>
          The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to AIventures or the specifically named rights holders. For the reproduction of any elements, the written consent of the copyright holders must be obtained in advance.
        </p>
      </section>
    </>
  ),

  datenschutz: (
    <>
      <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-4">
        The protection of your privacy is important to us. With this privacy policy, we inform you about the processing of personal data in connection with our website and our services.
      </p>
      <p>
        This privacy policy is aligned with the Swiss Data Protection Act (DPA) and takes into account the principles of the European General Data Protection Regulation (GDPR).
      </p>
      
      {/* Additional sections would go here */}
    </>
  ),

  agb: (
    <>
      <h2 className="text-xl font-semibold mb-4">1. Scope of Application</h2>
      <p className="mb-4">
        These Terms and Conditions (hereinafter referred to as "T&C") apply to all contracts concluded between AIventures GmbH (hereinafter referred to as "Provider") and the customer regarding the use of the offered services and products.
      </p>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Subject Matter of the Contract</h2>
        <p>
          The subject of the contract is the use of the AI solutions and services offered by the Provider, as described in the respective product descriptions.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Conclusion of Contract</h2>
        <p>
          The contract is concluded when the Provider accepts the customer's offer.<br />
          Acceptance is given through an order confirmation via email or by granting access to the services.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Prices and Payment Terms</h2>
        <p>
          Prices are based on the price list valid at the time of contract conclusion or according to an individual agreement.<br />
          Payment is made in accordance with the agreed payment terms.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Duration and Termination</h2>
        <p>
          The contract duration and termination periods depend on the selected plan or the individual agreement.<br />
          Termination must be submitted in written form (email or letter).
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Data Protection</h2>
        <p>
          The Provider processes the customer's personal data in accordance with the Privacy Policy available on the website.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Final Provisions</h2>
        <p>
          Swiss law applies.<br />
          The exclusive place of jurisdiction for all disputes arising from or in connection with this contract is Biel/Bienne, Switzerland.
        </p>
      </section>
    </>
  )
};

interface LegalDialogContentProps {
  tab: "impressum" | "datenschutz" | "agb";
}

const LegalDialogContent: React.FC<LegalDialogContentProps> = ({ tab }) => {
  const { language } = useLanguage();
  const content = language === 'en' ? englishContent : germanContent;

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {content[tab]}
    </div>
  );
};

export default LegalDialogContent;
