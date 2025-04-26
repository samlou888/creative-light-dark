
import React from 'react';
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyFr = () => {
  return (
    <div className="container mx-auto pt-32 px-6 pb-16">
      <h1 className="text-4xl font-bold mb-8">Politique de confidentialité</h1>
      <p className="text-muted-foreground mb-8">
        Date de mise à jour : avril 2025
      </p>

      <div className="max-w-2xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Informations générales</h2>
          <p className="text-muted-foreground">
            Les informations suivantes donnent un aperçu simple de ce qui se passe avec vos données personnelles lorsque vous visitez notre site web.<br />
            Les données personnelles sont toutes les données permettant de vous identifier personnellement.
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Collecte de données sur notre site web</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Qui est responsable de la collecte des données sur ce site web ?</h3>
              <p className="text-muted-foreground">
                Le traitement des données sur ce site web est effectué par l'exploitant du site.<br />
                Ses coordonnées sont indiquées dans les mentions légales de ce site.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Comment recueillons-nous vos données ?</h3>
              <p className="text-muted-foreground">
                D'une part, vos données sont collectées lorsque vous nous les communiquez.<br />
                Cela peut par exemple être les données que vous saisissez dans un formulaire de contact.<br /><br />
                D'autre part, d'autres données sont automatiquement collectées par nos systèmes informatiques lors de votre visite sur le site.<br />
                Il s'agit principalement de données techniques (par exemple navigateur Internet, système d'exploitation ou heure de consultation des pages).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Pourquoi utilisons-nous vos données ?</h3>
              <p className="text-muted-foreground">
                Une partie des données est collectée pour garantir un fonctionnement sans erreur du site web.<br />
                D'autres données peuvent être utilisées pour analyser votre comportement d'utilisateur.
              </p>
            </div>
          </div>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Vos droits</h2>
          <p className="text-muted-foreground">
            Vous avez à tout moment le droit de demander gratuitement des informations sur l'origine, le destinataire et la finalité de vos données personnelles enregistrées.<br />
            Vous avez également le droit de demander la rectification, le blocage ou la suppression de ces données.<br />
            Pour cela, ainsi que pour toute autre question relative à la protection des données, vous pouvez nous contacter à l'adresse indiquée dans les mentions légales.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyFr;

