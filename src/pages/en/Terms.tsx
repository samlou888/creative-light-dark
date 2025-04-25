
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const Terms = () => {
  return (
    <LegalPageLayout title="General Terms and Conditions">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Scope</h2>
        <p className="mb-4">
          These General Terms and Conditions (hereinafter "GTC") govern the business relationship between AIventures (hereinafter "we" or "us") and our customers (hereinafter "you" or "customer").
        </p>
        <p>
          By commissioning our services or using our website, you agree to these GTC. Deviating conditions of the customer only apply if we have expressly agreed to them in writing.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Service Offering</h2>
        <p className="mb-4">
          Our service offering includes the following areas:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">AI content creation and optimization</li>
          <li className="mb-2">Development of automation solutions with artificial intelligence</li>
          <li className="mb-2">App and web development with AI integration</li>
          <li className="mb-2">Design and creative services with AI support</li>
          <li>Workshops and training in the field of artificial intelligence</li>
        </ul>
        <p className="mt-4">
          The exact scope of services results from the individual agreement with the customer, our offers, or order confirmations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Conclusion of Contract</h2>
        <p className="mb-4">
          The contract between us and the customer is concluded by:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Signing a written offer or contract</li>
          <li className="mb-2">Written order confirmation (also via email)</li>
          <li>Commencement of service provision after verbal or written commissioning</li>
        </ul>
        <p className="mt-4">
          Offers from us are generally non-binding, unless they are expressly marked as binding or contain an acceptance period.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Prices and Payment Terms</h2>
        <p className="mb-4">
          Unless otherwise agreed, our prices current at the time of contract conclusion apply. All prices are in Swiss Francs (CHF) plus statutory value-added tax.
        </p>
        <p className="mb-4">
          For our services, we issue the following invoices:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">For projects: 50% down payment upon order placement, 50% after completion</li>
          <li>For ongoing services: Monthly billing</li>
        </ul>
        <p className="mb-4">
          Invoices are payable within 30 days of invoicing without deduction, unless otherwise agreed.
        </p>
        <p>
          In case of payment default, we are entitled to charge default interest at the rate of 5% p.a. The assertion of further default damages remains reserved.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Customer's Cooperation Obligations</h2>
        <p className="mb-4">
          The customer is obligated to provide us with the information, materials, and access required for service provision in a timely manner and to cooperate in the project implementation.
        </p>
        <p>
          If the customer does not fulfill his cooperation obligations, we are entitled to withdraw from the contract after setting a reasonable grace period and/or to demand compensation.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Delivery Deadlines and Dates</h2>
        <p className="mb-4">
          Delivery deadlines and dates are non-binding unless they have been expressly agreed as binding. We strive to meet the agreed dates, but cannot provide any guarantee.
        </p>
        <p>
          Delays due to delayed information delivery or missing cooperation of the customer extend the delivery time accordingly.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Usage and Copyright Rights</h2>
        <p className="mb-4">
          With full payment of the agreed remuneration, we transfer to the customer the usage rights required for the respective purpose to the services we have provided.
        </p>
        <p className="mb-4">
          Unless otherwise agreed, the customer receives a simple, non-transferable right of use. The processing or modification of our services is only permitted with our prior consent.
        </p>
        <p>
          We reserve the right to use provided services for reference purposes and to include them in our portfolio, provided that no confidential information is affected.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">8. Warranty and Liability</h2>
        <p className="mb-4">
          We provide our services with the utmost care and according to the current state of technology. Nevertheless, we cannot guarantee the error-free nature of AI-based solutions.
        </p>
        <p className="mb-4">
          The customer is obligated to inspect our services immediately upon receipt and to report recognizable defects in writing within 14 days. We will remedy justified defects within a reasonable period.
        </p>
        <p className="mb-4">
          Our liability is limited to intent and gross negligence. Liability for slight negligence is excluded to the extent legally permissible. In any case, our liability is limited to the foreseeable, contract-typical damage.
        </p>
        <p>
          Liability for indirect damages, lost profits, production losses, business interruptions, or the loss of data is excluded to the extent legally permissible.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">9. Data Protection and Confidentiality</h2>
        <p className="mb-4">
          We commit to keeping confidential information of the customer secret and to use it only for the purposes of contract fulfillment.
        </p>
        <p>
          Further information on the handling of personal data can be found in our <a href="/en/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">10. Contract Duration and Termination</h2>
        <p className="mb-4">
          Project contracts end with the acceptance of the agreed services.
        </p>
        <p className="mb-4">
          Continuing obligations can be terminated with a notice period of 30 days to the end of the month, unless otherwise agreed.
        </p>
        <p>
          The right to extraordinary termination for good cause remains unaffected.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">11. Final Provisions</h2>
        <p className="mb-4">
          Swiss law applies exclusively, excluding the UN Convention on Contracts for the International Sale of Goods.
        </p>
        <p className="mb-4">
          Place of jurisdiction for all disputes arising from or in connection with this contract is Biel/Bienne, Switzerland.
        </p>
        <p className="mb-4">
          Should individual provisions of these GTC be or become invalid, the validity of the remaining provisions shall remain unaffected. The invalid provision shall be replaced by a valid one that comes closest to the economic purpose of the invalid provision.
        </p>
        <p>
          Changes or additions to these GTC must be made in writing. This also applies to the amendment of this written form clause.
        </p>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>
    </LegalPageLayout>
  );
};

export default Terms;
