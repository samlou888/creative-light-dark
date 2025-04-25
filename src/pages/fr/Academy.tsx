
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Academy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Page Académie - Version Française</h1>
          <p className="text-center text-lg text-muted-foreground">
            Cette page sera implémentée dans la prochaine phase du projet.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Academy;
