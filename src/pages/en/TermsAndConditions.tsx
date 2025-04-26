
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto pt-32 px-6 pb-20">
      <h1 className="text-4xl font-bold mb-12">Terms and Conditions</h1>
      <div className="prose dark:prose-invert max-w-3xl">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Scope of Application</h2>
          <p className="text-muted-foreground">
            These Terms and Conditions (hereinafter referred to as "T&C") apply to all contracts concluded between AIventures GmbH (hereinafter referred to as "Provider") and the customer regarding the use of the offered services and products.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Subject Matter of the Contract</h2>
          <p className="text-muted-foreground">
            The subject of the contract is the use of the AI solutions and services offered by the Provider, as described in the respective product descriptions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Conclusion of Contract</h2>
          <p className="text-muted-foreground">
            The contract is concluded when the Provider accepts the customer's offer.<br />
            Acceptance is given through an order confirmation via email or by granting access to the services.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">4. Prices and Payment Terms</h2>
          <p className="text-muted-foreground">
            Prices are based on the price list valid at the time of contract conclusion or according to an individual agreement.<br />
            Payment is made in accordance with the agreed payment terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">5. Duration and Termination</h2>
          <p className="text-muted-foreground">
            The contract duration and termination periods depend on the selected plan or the individual agreement.<br />
            Termination must be submitted in written form (email or letter).
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">6. Data Protection</h2>
          <p className="text-muted-foreground">
            The Provider processes the customer's personal data in accordance with the Privacy Policy available on the website.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">7. Final Provisions</h2>
          <p className="text-muted-foreground">
            Swiss law applies.<br />
            The exclusive place of jurisdiction for all disputes arising from or in connection with this contract is Biel/Bienne, Switzerland.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
