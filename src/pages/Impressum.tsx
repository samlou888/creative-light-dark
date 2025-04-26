
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const Impressum = () => {
  return (
    <LegalPageLayout title="Impressum">
      <section>
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
      </section>

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
    </LegalPageLayout>
  );
};

export default Impressum;
