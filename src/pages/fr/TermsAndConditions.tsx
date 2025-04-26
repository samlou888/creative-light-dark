
import React from 'react';
import { Separator } from "@/components/ui/separator";

const TermsAndConditionsFr = () => {
  return (
    <div className="container mx-auto pt-32 px-6 pb-16">
      <h1 className="text-4xl font-bold mb-8">Conditions générales</h1>

      <div className="max-w-2xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Champ d'application</h2>
          <p className="text-muted-foreground">
            Les présentes Conditions générales (ci-après « CG ») s'appliquent à tous les contrats conclus entre AIventures GmbH (ci-après « Fournisseur ») et le client concernant l'utilisation des services et produits proposés.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Objet du contrat</h2>
          <p className="text-muted-foreground">
            L'objet du contrat est l'utilisation des solutions et services d'IA proposés par le Fournisseur, conformément aux descriptions des produits respectifs.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Conclusion du contrat</h2>
          <p className="text-muted-foreground">
            Le contrat est conclu lorsque le Fournisseur accepte l'offre du client.<br />
            L'acceptation a lieu par une confirmation de commande par e-mail ou par l'activation de l'accès aux services.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Prix et conditions de paiement</h2>
          <p className="text-muted-foreground">
            Les prix sont basés sur la liste de prix en vigueur au moment de la conclusion du contrat ou selon un accord individuel.<br />
            Le paiement s'effectue conformément aux conditions de paiement convenues.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Durée et résiliation</h2>
          <p className="text-muted-foreground">
            La durée du contrat et les délais de résiliation dépendent du tarif choisi ou d'un accord individuel.<br />
            La résiliation doit être faite par écrit (e-mail ou lettre).
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Protection des données</h2>
          <p className="text-muted-foreground">
            Le Fournisseur traite les données personnelles du client conformément à la Politique de confidentialité disponible sur le site web.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Dispositions finales</h2>
          <p className="text-muted-foreground">
            Le droit suisse s'applique.<br />
            Le for exclusif pour tous les litiges découlant de ou liés au présent contrat est Biel/Bienne, Suisse.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionsFr;
