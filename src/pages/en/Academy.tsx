
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import BrainWireframe from "@/components/graphics/BrainWireframe";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/academy/HeroSection";
import FormatsSection from "@/components/academy/FormatsSection";
import CoursesSection from "@/components/academy/CoursesSection";
import BenefitsSection from "@/components/academy/BenefitsSection";
import CTASection from "@/components/academy/CTASection";

const AcademyEn = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto max-w-7xl px-6 py-12">
        <section className="pt-24">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="p-8">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-none px-4 py-1">
                AI Academy
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Learn AI. Scale Your Business.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Online workshops, training sessions, and coaching – for companies looking to empower their employees to work more efficiently, faster, and smarter with AI.
              </p>
              <Button size="lg" className="rounded-full">
                Book Your Training Now
              </Button>
            </div>
          </Card>
        </section>

        <section className="py-20">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="p-8">
              <CoursesSection />
            </div>
          </Card>
        </section>

        <section className="py-20">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="p-8">
              <FormatsSection />
            </div>
          </Card>
        </section>

        <section className="py-20">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="p-8">
              <BenefitsSection />
            </div>
          </Card>
        </section>

        <section className="py-20">
          <Card className="overflow-hidden rounded-2xl border-primary/20">
            <div className="p-8">
              <CTASection />
            </div>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AcademyEn;
