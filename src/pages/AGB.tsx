
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const AGB = () => {
  return (
    <LegalPageLayout title="Allgemeine Geschäftsbedingungen">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
        <p className="mb-4">
          Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln die Geschäftsbeziehung zwischen AIventures (nachfolgend "wir" oder "uns") und unseren Kunden (nachfolgend "Sie" oder "Kunde").
        </p>
        <p>
          Mit der Beauftragung unserer Dienstleistungen oder der Nutzung unserer Website erklären Sie sich mit diesen AGB einverstanden. Abweichende Bedingungen des Kunden gelten nur, wenn wir diesen ausdrücklich schriftlich zugestimmt haben.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Leistungsangebot</h2>
        <p className="mb-4">
          Unser Leistungsangebot umfasst folgende Bereiche:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">KI-Content-Erstellung und -Optimierung</li>
          <li className="mb-2">Entwicklung von Automatisierungslösungen mit künstlicher Intelligenz</li>
          <li className="mb-2">App- und Webentwicklung mit KI-Integration</li>
          <li className="mb-2">Design- und Kreativleistungen mit KI-Unterstützung</li>
          <li>Workshops und Schulungen im Bereich künstliche Intelligenz</li>
        </ul>
        <p className="mt-4">
          Der genaue Umfang der Leistungen ergibt sich aus der individuellen Vereinbarung mit dem Kunden, unseren Angeboten oder Auftragsbestätigungen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Vertragsabschluss</h2>
        <p className="mb-4">
          Der Vertrag zwischen uns und dem Kunden kommt zustande durch:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Unterzeichnung eines schriftlichen Angebots oder Vertrags</li>
          <li className="mb-2">Schriftliche Auftragsbestätigung (auch per E-Mail)</li>
          <li>Beginn der Leistungserbringung nach mündlicher oder schriftlicher Beauftragung</li>
        </ul>
        <p className="mt-4">
          Angebote von uns sind grundsätzlich freibleibend und unverbindlich, sofern sie nicht ausdrücklich als verbindlich gekennzeichnet sind oder eine Annahmefrist enthalten.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Preise und Zahlungsbedingungen</h2>
        <p className="mb-4">
          Sofern nicht anders vereinbart, gelten unsere zum Zeitpunkt des Vertragsabschlusses aktuellen Preise. Alle Preise verstehen sich in Schweizer Franken (CHF) zuzüglich der gesetzlichen Mehrwertsteuer.
        </p>
        <p className="mb-4">
          Für unsere Dienstleistungen stellen wir folgende Rechnungen:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Bei Projekten: 50% Anzahlung bei Auftragserteilung, 50% nach Fertigstellung</li>
          <li>Bei fortlaufenden Leistungen: Monatliche Abrechnung</li>
        </ul>
        <p className="mb-4">
          Rechnungen sind innerhalb von 30 Tagen nach Rechnungsstellung ohne Abzug zahlbar, sofern nicht anders vereinbart.
        </p>
        <p>
          Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 5% p.a. zu erheben. Die Geltendmachung weiterer Verzugsschäden bleibt vorbehalten.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Mitwirkungspflichten des Kunden</h2>
        <p className="mb-4">
          Der Kunde ist verpflichtet, uns die zur Leistungserbringung erforderlichen Informationen, Materialien und Zugänge rechtzeitig zur Verfügung zu stellen und an der Projektumsetzung mitzuwirken.
        </p>
        <p>
          Kommt der Kunde seinen Mitwirkungspflichten nicht nach, sind wir nach Setzung einer angemessenen Nachfrist berechtigt, vom Vertrag zurückzutreten und/oder Schadensersatz zu verlangen.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Lieferfristen und Termine</h2>
        <p className="mb-4">
          Lieferfristen und Termine sind unverbindlich, sofern sie nicht ausdrücklich als verbindlich vereinbart wurden. Wir bemühen uns, die vereinbarten Termine einzuhalten, können jedoch keine Garantie übernehmen.
        </p>
        <p>
          Verzögerungen, die durch verspätete Informationslieferung oder fehlende Mitwirkung des Kunden entstehen, verlängern die Lieferzeit entsprechend.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Nutzungs- und Urheberrechte</h2>
        <p className="mb-4">
          Mit vollständiger Bezahlung der vereinbarten Vergütung übertragen wir dem Kunden die für den jeweiligen Zweck erforderlichen Nutzungsrechte an den von uns erbrachten Leistungen.
        </p>
        <p className="mb-4">
          Sofern nicht anders vereinbart, erhält der Kunde ein einfaches, nicht übertragbares Nutzungsrecht. Die Bearbeitung oder Änderung unserer Leistungen ist nur mit unserer vorherigen Zustimmung zulässig.
        </p>
        <p>
          Wir behalten uns das Recht vor, erbrachte Leistungen zu Referenzzwecken zu nutzen und in unser Portfolio aufzunehmen, sofern keine vertraulichen Informationen betroffen sind.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">8. Gewährleistung und Haftung</h2>
        <p className="mb-4">
          Wir erbringen unsere Leistungen mit größter Sorgfalt und nach dem aktuellen Stand der Technik. Dennoch können wir keine Garantie für die Fehlerfreiheit von KI-basierten Lösungen übernehmen.
        </p>
        <p className="mb-4">
          Der Kunde ist verpflichtet, unsere Leistungen unverzüglich nach Erhalt zu prüfen und erkennbare Mängel innerhalb von 14 Tagen schriftlich zu rügen. Wir werden berechtigte Mängel innerhalb angemessener Frist beheben.
        </p>
        <p className="mb-4">
          Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit gesetzlich zulässig. In jedem Fall ist unsere Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
        </p>
        <p>
          Die Haftung für mittelbare Schäden, entgangenen Gewinn, Produktionsausfall, Betriebsunterbrechung oder den Verlust von Daten ist ausgeschlossen, soweit gesetzlich zulässig.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">9. Datenschutz und Vertraulichkeit</h2>
        <p className="mb-4">
          Wir verpflichten uns, vertrauliche Informationen des Kunden geheim zu halten und nur für die Zwecke der Vertragserfüllung zu verwenden.
        </p>
        <p>
          Nähere Informationen zum Umgang mit personenbezogenen Daten finden Sie in unserer <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">10. Vertragsdauer und Kündigung</h2>
        <p className="mb-4">
          Projektverträge enden mit der Abnahme der vereinbarten Leistungen.
        </p>
        <p className="mb-4">
          Dauerschuldverhältnisse können mit einer Frist von 30 Tagen zum Monatsende gekündigt werden, sofern nicht anders vereinbart.
        </p>
        <p>
          Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">11. Schlussbestimmungen</h2>
        <p className="mb-4">
          Es gilt ausschließlich schweizerisches Recht unter Ausschluss des UN-Kaufrechts.
        </p>
        <p className="mb-4">
          Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist Biel/Bienne, Schweiz.
        </p>
        <p className="mb-4">
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung am nächsten kommt.
        </p>
        <p>
          Änderungen oder Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt auch für die Änderung dieser Schriftformklausel.
        </p>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Stand: {new Date().toLocaleDateString('de-CH')}
      </p>
    </LegalPageLayout>
  );
};

export default AGB;
