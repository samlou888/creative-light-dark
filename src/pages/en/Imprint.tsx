
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const Imprint = () => {
  return (
    <LegalPageLayout title="Imprint">
      <section>
        <h2 className="text-xl font-semibold mb-4">Information according to Swiss Law</h2>
        <p className="mb-4">
          This website is operated by:
        </p>
        <address className="not-italic mb-6">
          <strong>AIventures</strong><br />
          Sam Lou<br />
          Bahnhofstrasse 10<br />
          2502 Biel/Bienne<br />
          Switzerland<br /><br />
          Email: <a href="mailto:info@aiventures.ch" className="text-primary hover:underline">info@aiventures.ch</a><br />
          Website: <a href="https://aiventures.ch" className="text-primary hover:underline">www.aiventures.ch</a>
        </address>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Authorized Representative</h2>
        <p>
          Sam Lou, Managing Director
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Commercial Register Entry</h2>
        <p>
          Registered in the Commercial Register of the Canton of Bern<br />
          Company number: CHE-123.456.789
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">VAT Number</h2>
        <p>
          CHE-123.456.789 VAT
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The author assumes no liability for the correctness, accuracy, timeliness, reliability and completeness of the information.
        </p>
        <p>
          Liability claims against the author for material or immaterial damages resulting from access to or use or non-use of the published information are excluded.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Copyrights</h2>
        <p>
          The copyright and all other rights to content, images, photos, or other files on this website belong exclusively to AIventures or the specifically named rights holders. For the reproduction of any elements, the written consent of the copyright holders must be obtained in advance.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default Imprint;
