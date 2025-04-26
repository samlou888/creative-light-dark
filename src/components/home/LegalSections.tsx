import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LegalSections = () => {
  return (
    <section id="legal" className="py-16 bg-muted/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Rechtliches</h2>
        
        <Tabs defaultValue="impressum" className="max-w-4xl mx-auto">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="impressum">Impressum</TabsTrigger>
            <TabsTrigger value="datenschutz">Datenschutz</TabsTrigger>
            <TabsTrigger value="agb">AGB</TabsTrigger>
          </TabsList>
          
          <TabsContent value="impressum" className="prose prose-lg dark:prose-invert max-w-none">
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
          </TabsContent>
          
          <TabsContent value="datenschutz" className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4">1. Einleitung</h2>
            <p className="mb-4">
              Der Schutz Ihrer Privatsphäre ist uns ein wichtiges Anliegen. Mit dieser Datenschutzerklärung informieren wir Sie über die Bearbeitung von Personendaten im Zusammenhang mit unserer Website und unseren Dienstleistungen.
            </p>
            <p>
              Diese Datenschutzerklärung ist auf das Schweizerische Datenschutzgesetz (DSG) ausgerichtet und berücksichtigt die Grundsätze der Europäischen Datenschutz-Grundverordnung (DSGVO).
            </p>
          
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
          </TabsContent>
          
          <TabsContent value="agb" className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4">1. Geltungsbereich</h2>
            <p className="mb-4">
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") regeln die Geschäftsbeziehung zwischen AIventures (nachfolgend "wir" oder "uns") und unseren Kunden (nachfolgend "Sie" oder "Kunde").
            </p>
            <p>
              Mit der Beauftragung unserer Dienstleistungen oder der Nutzung unserer Website erklären Sie sich mit diesen AGB einverstanden. Abweichende Bedingungen des Kunden gelten nur, wenn wir diesen ausdrücklich schriftlich zugestimmt haben.
            </p>
          
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
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LegalSections;
