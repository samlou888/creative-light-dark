
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

// French content
const frenchContent = {
  impressum: (
    <>
      <h2 className="text-xl font-semibold mb-4">Informations conformément au droit suisse</h2>
      <p className="mb-4">
        Ce site web est exploité par:
      </p>
      <address className="not-italic mb-6">
        <strong>AIventures</strong><br />
        Sam Lou<br />
        Bahnhofstrasse 10<br />
        2502 Biel/Bienne<br />
        Suisse<br /><br />
        E-mail: <a href="mailto:info@aiventures.ch" className="text-primary hover:underline">info@aiventures.ch</a><br />
        Site web: <a href="https://aiventures.ch" className="text-primary hover:underline">www.aiventures.ch</a>
      </address>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Représentant autorisé</h2>
        <p>
          Sam Lou, CEO
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Inscription au registre du commerce</h2>
        <p>
          Inscrit au registre du commerce du canton de Berne<br />
          Numéro d'entreprise: CHE-123.456.789
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Numéro TVA</h2>
        <p>
          CHE-123.456.789 TVA
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Clause de non-responsabilité</h2>
        <p className="mb-4">
          L'auteur n'assume aucune responsabilité quant à l'exactitude, la précision, l'actualité, la fiabilité et l'exhaustivité des informations.
        </p>
        <p>
          Les prétentions en responsabilité contre l'auteur pour des dommages matériels ou immatériels résultant de l'accès ou de l'utilisation ou de la non-utilisation des informations publiées sont exclues.
        </p>
      </section>
    
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Droits d'auteur</h2>
        <p>
          Les droits d'auteur et tous les autres droits sur le contenu, les images, les photos ou d'autres fichiers sur ce site web appartiennent exclusivement à AIventures ou aux détenteurs de droits spécifiquement nommés. Pour la reproduction de tout élément, le consentement écrit des détenteurs des droits d'auteur doit être obtenu au préalable.
        </p>
      </section>
    </>
  ),

  datenschutz: (
    <>
      <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
      <p className="mb-4">
        La protection de votre vie privée est importante pour nous. Avec cette politique de confidentialité, nous vous informons sur le traitement des données personnelles en lien avec notre site web et nos services.
      </p>
      <p>
        Cette politique de confidentialité est alignée sur la loi suisse sur la protection des données (LPD) et prend en compte les principes du Règlement général sur la protection des données (RGPD) européen.
      </p>
      
      {/* Additional sections would go here */}
    </>
  ),

  agb: (
    <>
      <h2 className="text-xl font-semibold mb-4">1. Champ d'application</h2>
      <p className="mb-4">
        Les présentes Conditions générales (ci-après « CG ») s'appliquent à tous les contrats conclus entre AIventures GmbH (ci-après « Fournisseur ») et le client concernant l'utilisation des services et produits proposés.
      </p>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Objet du contrat</h2>
        <p>
          L'objet du contrat est l'utilisation des solutions et services d'IA proposés par le Fournisseur, conformément aux descriptions des produits respectifs.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Conclusion du contrat</h2>
        <p>
          Le contrat est conclu lorsque le Fournisseur accepte l'offre du client.<br />
          L'acceptation a lieu par une confirmation de commande par e-mail ou par l'activation de l'accès aux services.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Prix et conditions de paiement</h2>
        <p>
          Les prix sont basés sur la liste de prix en vigueur au moment de la conclusion du contrat ou selon un accord individuel.<br />
          Le paiement s'effectue conformément aux conditions de paiement convenues.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Durée et résiliation</h2>
        <p>
          La durée du contrat et les délais de résiliation dépendent du tarif choisi ou d'un accord individuel.<br />
          La résiliation doit être faite par écrit (e-mail ou lettre).
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Protection des données</h2>
        <p>
          Le Fournisseur traite les données personnelles du client conformément à la Politique de confidentialité disponible sur le site web.
        </p>
      </section>
      
      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Dispositions finales</h2>
        <p>
          Le droit suisse s'applique.<br />
          Le for exclusif pour tous les litiges découlant de ou liés au présent contrat est Biel/Bienne, Suisse.
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
  
  let content = germanContent;
  if (language === 'en') {
    content = englishContent;
  } else if (language === 'fr') {
    content = frenchContent;
  }

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {content[tab]}
    </div>
  );
};

export default LegalDialogContent;
