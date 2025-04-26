
import React from 'react';

const Imprint = () => {
  return (
    <div className="container mx-auto pt-32 px-6 pb-20">
      <h1 className="text-4xl font-bold mb-12">Imprint</h1>
      <div className="prose dark:prose-invert max-w-3xl">
        <p className="text-muted-foreground mb-8">Information according to §5 TMG</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">AIventures GmbH</h2>
          <p className="text-muted-foreground">
            Musterstrasse 123<br />
            2500 Biel/Bienne<br />
            Switzerland
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p className="text-muted-foreground">
            Phone: +41 123 456 789<br />
            Email: info@aiventures.ch
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Commercial Register Entry</h2>
          <p className="text-muted-foreground">
            Registered in the Commercial Register of the Canton of Bern<br />
            Commercial Register Number: CHE-123.456.789
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">VAT ID</h2>
          <p className="text-muted-foreground">
            VAT Identification Number according to §27a of the German VAT Act:<br />
            CHE-123.456.789 MWST
          </p>
        </section>
      </div>
    </div>
  );
};

export default Imprint;
