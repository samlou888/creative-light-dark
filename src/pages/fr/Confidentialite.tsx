
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const Confidentialite = () => {
  return (
    <LegalPageLayout title="Politique de Confidentialité">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          La protection de votre vie privée est importante pour nous. Avec cette politique de confidentialité, nous vous informons sur le traitement des données personnelles en relation avec notre site web et nos services.
        </p>
        <p>
          Cette politique de confidentialité est alignée sur la loi suisse sur la protection des données (LPD) et prend en compte les principes du Règlement général européen sur la protection des données (RGPD).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Responsable</h2>
        <p>
          Responsable du traitement des données :<br /><br />
          <strong>AIventures</strong><br />
          Sam Lou<br />
          Bahnhofstrasse 10<br />
          2502 Biel/Bienne<br />
          Suisse<br /><br />
          E-mail : <a href="mailto:datenschutz@aiventures.ch" className="text-primary hover:underline">datenschutz@aiventures.ch</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Collecte et traitement des données personnelles</h2>
        <p className="mb-4">
          Nous collectons et traitons les données personnelles que vous nous transmettez ou que nous recueillons automatiquement lors de votre visite sur notre site web :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Coordonnées (nom, adresse e-mail, adresse postale)</li>
          <li className="mb-2">Informations que vous fournissez dans les formulaires de contact, commentaires ou lors de l'inscription à nos services</li>
          <li className="mb-2">Données techniques telles que l'adresse IP, le type de navigateur, les heures d'accès, les informations sur l'appareil</li>
          <li className="mb-2">Données d'utilisation telles que les pages visitées, les interactions et les durées de séjour</li>
        </ul>
        <p>
          Le traitement de ces données est effectué dans le but de fournir nos services, d'améliorer notre offre, d'exploiter et de sécuriser notre site web, ainsi qu'à des fins de marketing.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Base juridique</h2>
        <p>
          Le traitement de vos données personnelles est basé sur votre consentement, pour l'exécution d'un contrat ou de mesures précontractuelles, en raison de nos intérêts légitimes ou pour remplir des obligations légales.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Cookies et technologies de suivi</h2>
        <p className="mb-4">
          Notre site web utilise des cookies et des technologies similaires pour améliorer la convivialité et permettre certaines fonctions. Vous pouvez configurer votre navigateur pour qu'il vous informe de la mise en place de cookies ou les rejette de manière générale.
        </p>
        <p>
          Nous utilisons les outils de suivi suivants :
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Google Analytics pour analyser le comportement des utilisateurs</li>
          <li className="mb-2">Facebook Pixel à des fins de marketing et de publicité</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Sécurité des données</h2>
        <p>
          Nous prenons des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre l'accès non autorisé et l'abus. Notre site web est protégé par un cryptage SSL, reconnaissable au symbole de cadenas dans votre navigateur et à l'adresse HTTPS.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Transmission des données</h2>
        <p className="mb-4">
          Nous ne transmettons vos données personnelles que si cela est nécessaire pour remplir nos obligations contractuelles, si nous y sommes légalement obligés ou si vous y avez consenti.
        </p>
        <p>
          Les destinataires possibles sont :
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Prestataires de services (par ex., fournisseurs d'hébergement, prestataires de services de paiement)</li>
          <li className="mb-2">Partenaires pour la fourniture de nos services</li>
          <li>Autorités en cas d'obligation légale</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">8. Transfert de données à l'étranger</h2>
        <p>
          Certains de nos prestataires de services peuvent se trouver dans des pays en dehors de la Suisse ou de l'UE, où le niveau de protection des données ne correspond pas à celui de la Suisse ou de l'UE. Dans de tels cas, nous assurons un niveau de protection adéquat par le biais d'accords contractuels ou d'autres garanties appropriées.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">9. Durée de conservation</h2>
        <p>
          Nous ne conservons vos données personnelles que le temps nécessaire aux fins pour lesquelles elles ont été collectées ou aussi longtemps que des obligations légales de conservation existent.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">10. Vos droits</h2>
        <p className="mb-4">
          Vous disposez des droits suivants concernant vos données personnelles :
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Droit à l'information sur les données stockées chez nous</li>
          <li className="mb-2">Droit à la rectification des données incorrectes</li>
          <li className="mb-2">Droit à l'effacement de vos données</li>
          <li className="mb-2">Droit à la limitation du traitement</li>
          <li className="mb-2">Droit à la portabilité des données</li>
          <li className="mb-2">Droit d'opposition au traitement</li>
          <li>Droit de retirer les consentements donnés</li>
        </ul>
        <p className="mt-4">
          Pour exercer vos droits, vous pouvez nous contacter aux coordonnées mentionnées ci-dessus.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">11. Modifications de cette politique de confidentialité</h2>
        <p>
          Nous nous réservons le droit d'adapter cette politique de confidentialité à tout moment. La version actuelle sera publiée sur notre site web.
        </p>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </p>
    </LegalPageLayout>
  );
};

export default Confidentialite;
