
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BrainWireframe from "@/components/graphics/BrainWireframe";
import HeroSection from "@/components/academy/HeroSection";
import FormatsSection from "@/components/academy/FormatsSection";
import CoursesSection from "@/components/academy/CoursesSection";
import BenefitsSection from "@/components/academy/BenefitsSection";
import CTASection from "@/components/academy/CTASection";

const AcademyFr = () => {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
              AI Academy
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Apprendre l'IA. Développer votre entreprise.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Ateliers en ligne, formations et coachings – pour les entreprises souhaitant développer les compétences de leurs équipes afin de travailler plus efficacement, plus rapidement et de manière plus intelligente grâce à l'IA.
            </p>
            <Button size="lg" className="rounded-full">
              Réserver votre formation maintenant
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-6">Nos Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nous proposons des solutions sur mesure pour votre entreprise – de la formation professionnelle au conseil personnalisé.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Formations en IA</h3>
                  <p className="text-muted-foreground">
                    Ateliers et formations personnalisés pour donner à votre équipe des compétences pratiques en intelligence artificielle.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Matériel pédagogique</h3>
                  <p className="text-muted-foreground">
                    Documentation complète et supports d'apprentissage pratiques pour l'autoformation efficace.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Conseil</h3>
                  <p className="text-muted-foreground">
                    Accompagnement personnalisé pour intégrer l'IA dans vos processus et stratégies existants.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[600px]">
              <BrainWireframe className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Formations & Ateliers pour Entreprises</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Réservez un entretien en ligne gratuit.<br />
              Nous vous montrons comment exploiter l'intelligence artificielle pour rendre votre entreprise plus efficace et plus rentable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Réserver votre formation maintenant
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default AcademyFr;
