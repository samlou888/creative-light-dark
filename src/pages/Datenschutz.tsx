
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const Datenschutz = () => {
  return (
    <LegalPageLayout title="Datenschutzerklärung">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Einleitung</h2>
        <p className="mb-4">
          Der Schutz Ihrer Privatsphäre ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie über die Bearbeitung von Personendaten im Zusammenhang mit unserer Website und unseren Dienstleistungen.
        </p>
        <p>
          Diese Datenschutzerklärung ist auf das Schweizerische Datenschutzgesetz (DSG) ausgerichtet und berücksichtigt die Grundsätze der Europäischen Datenschutz-Grundverordnung (DSGVO).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Verantwortlicher</h2>
        <p>
          Verantwortlich für die Datenbearbeitung ist:<br /><br />
          <strong>AIventures</strong><br />
          Sam Lou<br />
          Bahnhofstrasse 10<br />
          2502 Biel/Bienne<br />
          Schweiz<br /><br />
          E-Mail: <a href="mailto:datenschutz@aiventures.ch" className="text-primary hover:underline">datenschutz@aiventures.ch</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Erhebung und Bearbeitung von Personendaten</h2>
        <p className="mb-4">
          Wir erheben und bearbeiten Personendaten, die Sie uns übermitteln oder die wir bei Ihrem Besuch unserer Website automatisch sammeln:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Kontaktdaten (Name, E-Mail-Adresse, Anschrift)</li>
          <li className="mb-2">Informationen, die Sie in Kontaktformularen, Kommentaren oder bei der Anmeldung zu unseren Dienstleistungen angeben</li>
          <li className="mb-2">Technische Daten wie IP-Adresse, Browsertyp, Zugriffszeiten, Geräteinformationen</li>
          <li className="mb-2">Nutzungsdaten wie besuchte Seiten, Interaktionen und Verweilzeiten</li>
        </ul>
        <p>
          Die Bearbeitung dieser Daten erfolgt zum Zweck der Bereitstellung unserer Dienstleistungen, der Verbesserung unseres Angebots, des Betriebs und der Sicherheit unserer Website sowie für Marketingzwecke.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Rechtsgrundlagen</h2>
        <p>
          Die Bearbeitung Ihrer Personendaten erfolgt auf Grundlage Ihrer Einwilligung, zur Erfüllung eines Vertrags oder vorvertraglicher Massnahmen, aufgrund unserer berechtigten Interessen oder zur Erfüllung rechtlicher Verpflichtungen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Cookies und Tracking-Technologien</h2>
        <p className="mb-4">
          Unsere Website verwendet Cookies und ähnliche Technologien, um die Nutzerfreundlichkeit zu verbessern und bestimmte Funktionen zu ermöglichen. Sie können Ihren Browser so einstellen, dass er Sie über das Setzen von Cookies informiert oder Cookies generell ablehnt.
        </p>
        <p>
          Wir setzen folgende Tracking-Tools ein:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Google Analytics zur Analyse des Nutzerverhaltens</li>
          <li className="mb-2">Facebook Pixel für Marketing- und Werbezwecke</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Datensicherheit</h2>
        <p>
          Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen zum Schutz Ihrer Personendaten vor unbefugtem Zugriff und Missbrauch. Unsere Website ist durch SSL-Verschlüsselung geschützt, erkennbar am Schlosssymbol in Ihrem Browser und der HTTPS-Adresse.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Weitergabe von Daten</h2>
        <p className="mb-4">
          Wir geben Ihre Personendaten nur weiter, wenn dies zur Erfüllung unserer vertraglichen Pflichten notwendig ist, wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben.
        </p>
        <p>
          Mögliche Empfänger sind:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Dienstleister (z.B. Hosting-Provider, Zahlungsdienstleister)</li>
          <li className="mb-2">Partner für die Erbringung unserer Dienstleistungen</li>
          <li>Behörden bei gesetzlicher Verpflichtung</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">8. Datenübertragung ins Ausland</h2>
        <p>
          Einige unserer Dienstleister befinden sich möglicherweise in Ländern ausserhalb der Schweiz oder der EU, in denen das Datenschutzniveau nicht dem der Schweiz oder der EU entspricht. In solchen Fällen gewährleisten wir ein angemessenes Schutzniveau durch vertragliche Vereinbarungen oder andere geeignete Garantien.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">9. Aufbewahrungsdauer</h2>
        <p>
          Wir speichern Ihre Personendaten nur so lange, wie es für die Zwecke, für die sie erhoben wurden, erforderlich ist, oder solange gesetzliche Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">10. Ihre Rechte</h2>
        <p className="mb-4">
          Sie haben folgende Rechte bezüglich Ihrer Personendaten:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Recht auf Auskunft über die bei uns gespeicherten Daten</li>
          <li className="mb-2">Recht auf Berichtigung unrichtiger Daten</li>
          <li className="mb-2">Recht auf Löschung Ihrer Daten</li>
          <li className="mb-2">Recht auf Einschränkung der Bearbeitung</li>
          <li className="mb-2">Recht auf Datenübertragbarkeit</li>
          <li className="mb-2">Recht auf Widerspruch gegen die Bearbeitung</li>
          <li>Recht auf Widerruf erteilter Einwilligungen</li>
        </ul>
        <p className="mt-4">
          Zur Ausübung Ihrer Rechte können Sie uns unter den oben genannten Kontaktdaten erreichen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">11. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen. Die aktuelle Version wird auf unserer Website veröffentlicht.
        </p>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Stand: {new Date().toLocaleDateString('de-CH')}
      </p>
    </LegalPageLayout>
  );
};

export default Datenschutz;
