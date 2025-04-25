
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const AutomationServices = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-8 text-center">Automation Services - English Version</h1>
          <p className="text-center text-lg text-muted-foreground">
            This page will be implemented in the next phase of the project.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AutomationServices;
