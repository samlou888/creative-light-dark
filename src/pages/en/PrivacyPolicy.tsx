
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <section>
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4">
          Protecting your privacy is important to us. With this privacy policy, we inform you about the processing of personal data in connection with our website and our services.
        </p>
        <p>
          This privacy policy is aligned with the Swiss Data Protection Act (DSG) and takes into account the principles of the European General Data Protection Regulation (GDPR).
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">2. Responsible Entity</h2>
        <p>
          Responsible for data processing is:<br /><br />
          <strong>AIventures</strong><br />
          Sam Lou<br />
          Bahnhofstrasse 10<br />
          2502 Biel/Bienne<br />
          Switzerland<br /><br />
          Email: <a href="mailto:datenschutz@aiventures.ch" className="text-primary hover:underline">datenschutz@aiventures.ch</a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">3. Collection and Processing of Personal Data</h2>
        <p className="mb-4">
          We collect and process personal data that you transmit to us or that we automatically collect during your visit to our website:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Contact information (name, email address, postal address)</li>
          <li className="mb-2">Information that you provide in contact forms, comments, or when registering for our services</li>
          <li className="mb-2">Technical data such as IP address, browser type, access times, device information</li>
          <li className="mb-2">Usage data such as visited pages, interactions, and dwell times</li>
        </ul>
        <p>
          The processing of this data is carried out for the purpose of providing our services, improving our offerings, operating and securing our website, and for marketing purposes.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">4. Legal Basis</h2>
        <p>
          The processing of your personal data is based on your consent, for the fulfillment of a contract or pre-contractual measures, due to our legitimate interests, or to fulfill legal obligations.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
        <p className="mb-4">
          Our website uses cookies and similar technologies to improve user-friendliness and enable certain functions. You can set your browser to inform you about the setting of cookies or to reject cookies in general.
        </p>
        <p>
          We use the following tracking tools:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Google Analytics for analyzing user behavior</li>
          <li className="mb-2">Facebook Pixel for marketing and advertising purposes</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">6. Data Security</h2>
        <p>
          We take appropriate technical and organizational security measures to protect your personal data from unauthorized access and misuse. Our website is protected by SSL encryption, recognizable by the lock symbol in your browser and the HTTPS address.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">7. Data Sharing</h2>
        <p className="mb-4">
          We only share your personal data if this is necessary to fulfill our contractual obligations, if we are legally obligated to do so, or if you have given your consent.
        </p>
        <p>
          Possible recipients are:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Service providers (e.g., hosting providers, payment service providers)</li>
          <li className="mb-2">Partners for providing our services</li>
          <li>Authorities if legally obligated</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">8. Data Transfer Abroad</h2>
        <p>
          Some of our service providers may be located in countries outside Switzerland or the EU where the data protection level does not correspond to that of Switzerland or the EU. In such cases, we ensure an adequate level of protection through contractual agreements or other suitable guarantees.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">9. Retention Period</h2>
        <p>
          We store your personal data only as long as necessary for the purposes for which they were collected, or as long as legal retention obligations exist.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">10. Your Rights</h2>
        <p className="mb-4">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-disc pl-6">
          <li className="mb-2">Right to information about data stored with us</li>
          <li className="mb-2">Right to rectification of incorrect data</li>
          <li className="mb-2">Right to deletion of your data</li>
          <li className="mb-2">Right to restriction of processing</li>
          <li className="mb-2">Right to data portability</li>
          <li className="mb-2">Right to object to processing</li>
          <li>Right to withdraw given consents</li>
        </ul>
        <p className="mt-4">
          To exercise your rights, you can reach us at the contact details mentioned above.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">11. Changes to this Privacy Policy</h2>
        <p>
          We reserve the right to adjust this privacy policy at any time. The current version will be published on our website.
        </p>
      </section>

      <p className="mt-8 text-sm text-muted-foreground">
        Last updated: {new Date().toLocaleDateString('en-US')}
      </p>
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
