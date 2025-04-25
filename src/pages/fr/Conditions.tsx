
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const Conditions = () => {
  return (
    <LegalPageLayout title="Conditions Générales">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Champ d'application</h2>
        <p className="mb-4">
          Ces Conditions Générales (ci-après "CG") régissent la relation commerciale entre AIventures (ci-après "nous" ou "notre") et nos clients (ci-après "vous" ou "client").
        </p>
        <p>
          En commandant nos services ou en utilisant notre site web, vous acceptez ces CG. Les conditions divergentes du client ne s'appliquent que si nous y avons expressément consenti par écrit.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Offre de services</h2>
        <p className="mb-4">
          Notre offre de services comprend les domaines suivants :
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Création et optimisation de contenu IA</li>
          <li className="mb-2">Développement de solutions d'automatisation avec l'intelligence artificielle</li>
          <li className="mb-2">Développement d'applications et de sites web avec intégration d'IA</li>
          <li className="mb-2">Services de design et de création avec support IA</li>
          <li>Ateliers et formations dans le domaine de l'intelligence artificielle</li>
        </ul>
        <p className="mt-4">
          L'étendue exacte des services résulte de l'accord individuel avec le client, de nos offres ou des confirmations de commande.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Conclusion du contrat</h2>
        <p className="mb-4">
          Le contrat entre nous et le client est conclu par :
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Signature d'une offre ou d'un contrat écrit</li>
          <li className="mb-2">Confirmation de commande écrite (également par e-mail)</li>
          <li>Commencement de la prestation de services après commande verbale ou écrite</li>
        </ul>
        <p className="mt-4">
          Les offres de notre part sont généralement sans engagement, sauf si elles sont expressément marquées comme contraignantes ou contiennent un délai d'acceptation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Prix et modalités de paiement</h2>
        <p className="mb-4">
          Sauf accord contraire, nos prix en vigueur au moment de la conclusion du contrat s'appliquent. Tous les prix sont en francs suisses (CHF) plus la taxe sur la valeur ajoutée légale.
        </p>
        <p className="mb-4">
          Pour nos services, nous émettons les factures suivantes :
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Pour les projets : 50% d'acompte à la commande, 50% après achèvement</li>
          <li>Pour les services continus : Facturation mensuelle</li>
        </ul>
        <p className="mb-4">
          Les factures sont payables dans les 30 jours suivant la facturation sans déduction, sauf accord contraire.
        </p>
        <p>
          En cas de retard de paiement, nous sommes en droit de facturer des intérêts de retard au taux de 5% p.a. La revendication d'autres dommages de retard reste réservée.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Obligations de coopération du client</h2>
        <p className="mb-4">
          Le client est tenu de nous fournir en temps utile les informations, matériaux et accès nécessaires à la prestation de services et de coopérer à la mise en œuvre du projet.
        </p>
        <p>
          Si le client ne remplit pas ses obligations de coopération, nous sommes en droit, après fixation d'un délai supplémentaire raisonnable, de résilier le contrat et/ou d'exiger des dommages et intérêts.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Délais de livraison et échéances</h2>
        <p className="mb-4">
          Les délais de livraison et échéances sont sans engagement, sauf s'ils ont été expressément convenus comme contraignants. Nous nous efforçons de respecter les dates convenues, mais ne pouvons donner aucune garantie.
        </p>
        <p>
          Les retards dus à une livraison tardive d'informations ou à un manque de coopération du client prolongent le délai de livraison en conséquence.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Droits d'usage et d'auteur</h2>
        <p className="mb-4">
          Avec le paiement intégral de la rémunération convenue, nous transférons au client les droits d'usage nécessaires pour l'objectif respectif sur les services que nous avons fournis.
        </p>
        <p className="mb-4">
          Sauf accord contraire, le client reçoit un droit d'usage simple, non transférable. Le traitement ou la modification de nos services n'est autorisé qu'avec notre consentement préalable.
        </p>
        <p>
          Nous nous réservons le droit d'utiliser les services fournis à des fins de référence et de les inclure dans notre portfolio, à condition qu'aucune information confidentielle ne soit concernée.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">8. Garantie et responsabilité</h2>
        <p className="mb-4">
          Nous fournissons nos services avec le plus grand soin et selon l'état actuel de la technique. Néanmoins, nous ne pouvons garantir l'absence d'erreurs des solutions basées sur l'IA.
        </p>
        <p className="mb-4">
          Le client est tenu d'examiner nos services immédiatement après réception et de signaler par écrit les défauts reconnaissables dans un délai de 14 jours. Nous remédierons aux défauts justifiés dans un délai raisonnable.
        </p>
        <p className="mb-4">
          Notre responsabilité est limitée à l'intention et à la négligence grave. La responsabilité pour négligence légère est exclue dans la mesure où la loi le permet. Dans tous les cas, notre responsabilité est limitée au dommage prévisible et typique du contrat.
        </p>
        <p>
          La responsabilité pour les dommages indirects, le manque à gagner, les pertes de production, les interruptions d'activité ou la perte de données est exclue dans la mesure où la loi le permet.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">9. Protection des données et confidentialité</h2>
        <p className="mb-4">
          Nous nous engageons à garder confidentielles les informations du client et à ne les utiliser que pour les besoins de l'exécution du contrat.
        </p>
        <p>
          Des informations supplémentaires sur le traitement des données personnelles se trouvent dans notre <a href="/fr/confidentialite" className="text-primary hover:underline">Politique de confidentialité</a>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">10. Durée du contrat et résiliation</h2>
        <p className="mb-4">
          Les contrats de projet prennent fin avec l'acceptation des services convenus.
        </p>
        <p className="mb-4">
          Les relations contractuelles continues peuvent être résiliées moyennant un préavis de 30 jours pour la fin du mois, sauf accord contraire.
        </p>
        <p>
          Le droit à la résiliation extraordinaire pour motif grave reste inchangé.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">11. Dispositions finales</h2>
        <p className="mb-4">
          Le droit suisse s'applique exclusivement, à l'exclusion de la Convention des Nations Unies sur les contrats de vente internationale de marchandises.
        </p>
        <p className="mb-4">
          Le for juridique pour tous les litiges découlant du présent contrat ou en relation avec celui-ci est Biel/Bienne, Suisse.
        </p>
        <p className="mb-4">
          Si des dispositions individuelles de ces CG sont ou deviennent invalides, la validité des dispositions restantes n'en est pas affectée. La disposition invalide doit être remplacée par une disposition valide qui se rapproche le plus possible de l'objectif économique de la disposition invalide.
        </p>
        <p>
          Les modifications ou ajouts à ces CG doivent être faits par écrit. Cela s'applique également à la modification de cette clause de forme écrite.
        </p>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
      </p>
    </LegalPageLayout>
  );
};

export default Conditions;
