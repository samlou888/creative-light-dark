
import React from 'react';
import LegalPageLayout from '@/components/layout/LegalPageLayout';

const MentionsLegales = () => {
  return (
    <LegalPageLayout title="Mentions Légales">
      <section>
        <h2 className="text-xl font-semibold mb-4">Informations conformément au droit suisse</h2>
        <p className="mb-4">
          Ce site web est exploité par :
        </p>
        <address className="not-italic mb-6">
          <strong>AIventures</strong><br />
          Sam Lou<br />
          Bahnhofstrasse 10<br />
          2502 Biel/Bienne<br />
          Suisse<br /><br />
          E-mail : <a href="mailto:info@aiventures.ch" className="text-primary hover:underline">info@aiventures.ch</a><br />
          Site web : <a href="https://aiventures.ch" className="text-primary hover:underline">www.aiventures.ch</a>
        </address>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Personne autorisée à représenter</h2>
        <p>
          Sam Lou, Directeur général
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Inscription au registre du commerce</h2>
        <p>
          Inscrit au registre du commerce du canton de Berne<br />
          Numéro d'entreprise : CHE-123.456.789
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Numéro de TVA</h2>
        <p>
          CHE-123.456.789 TVA
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Clause de non-responsabilité</h2>
        <p className="mb-4">
          L'auteur n'assume aucune garantie quant à l'exactitude, la précision, l'actualité, la fiabilité et l'exhaustivité des informations.
        </p>
        <p>
          Les prétentions en responsabilité contre l'auteur en raison de dommages matériels ou immatériels résultant de l'accès ou de l'utilisation ou de la non-utilisation des informations publiées sont exclues.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Droits d'auteur</h2>
        <p>
          Les droits d'auteur et tous les autres droits sur les contenus, images, photos ou autres fichiers sur ce site web appartiennent exclusivement à AIventures ou aux titulaires de droits spécifiquement nommés. Pour la reproduction de tout élément, le consentement écrit préalable des titulaires des droits d'auteur doit être obtenu.
        </p>
      </section>
    </LegalPageLayout>
  );
};

export default MentionsLegales;
