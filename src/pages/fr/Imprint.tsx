
import React from 'react';
import { Separator } from "@/components/ui/separator";

const ImprintFr = () => {
  return (
    <div className="container mx-auto pt-32 px-6 pb-16">
      <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>
      <p className="text-muted-foreground mb-2">
        Informations conformément à l'article §5 TMG
      </p>

      <div className="max-w-2xl space-y-8 mt-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">AIventures GmbH</h2>
          <p className="text-muted-foreground">
            Musterstrasse 123<br />
            2500 Biel/Bienne<br />
            Suisse
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted-foreground">
            Téléphone : +41 123 456 789<br />
            Email : info@aiventures.ch
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Inscription au registre du commerce</h2>
          <p className="text-muted-foreground">
            Inscrit au registre du commerce du canton de Berne<br />
            Numéro du registre du commerce : CHE-123.456.789
          </p>
        </section>

        <Separator />

        <section>
          <h2 className="text-2xl font-semibold mb-4">Numéro de TVA</h2>
          <p className="text-muted-foreground">
            Numéro d'identification à la TVA selon §27a de la loi allemande sur la TVA :<br />
            CHE-123.456.789 MWST
          </p>
        </section>
      </div>
    </div>
  );
};

export default ImprintFr;
