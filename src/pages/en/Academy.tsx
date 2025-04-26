
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BrainWireframe from "@/components/graphics/BrainWireframe";
import HeroSection from "@/components/academy/HeroSection";
import FormatsSection from "@/components/academy/FormatsSection";
import CoursesSection from "@/components/academy/CoursesSection";
import BenefitsSection from "@/components/academy/BenefitsSection";
import CTASection from "@/components/academy/CTASection";

const AcademyEn = () => {
  return (
    <main className="pt-20">
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-6">Our Services</h2>
              <p className="text-lg text-muted-foreground mb-8">
                We offer customized solutions for your company – from professional training to tailored consulting.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Training</h3>
                  <p className="text-muted-foreground">
                    Tailor-made workshops and training sessions to equip your team with practical AI skills.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Learning Materials</h3>
                  <p className="text-muted-foreground">
                    Comprehensive documentation and hands-on learning materials for effective self-study.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consulting</h3>
                  <p className="text-muted-foreground">
                    Personalized advice on how to integrate AI into your existing processes and strategies.
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
            <h2 className="text-3xl font-bold mb-6">Training & Workshops for Companies</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free online consultation.<br />
              We'll show you how to leverage Artificial Intelligence to make your business more efficient and profitable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Book Your Training Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
};

export default AcademyEn;
