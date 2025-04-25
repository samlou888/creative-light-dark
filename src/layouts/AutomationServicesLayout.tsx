
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface AutomationServicesLayoutProps {
  children: React.ReactNode;
}

const AutomationServicesLayout = ({ children }: AutomationServicesLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default AutomationServicesLayout;
