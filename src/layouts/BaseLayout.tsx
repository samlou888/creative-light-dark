
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { PageThemeProvider } from '@/contexts/PageThemeContext';

interface BaseLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const BaseLayout = ({ children, className = '' }: BaseLayoutProps) => {
  return (
    <PageThemeProvider>
      <div className={`min-h-screen flex flex-col ${className}`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </PageThemeProvider>
  );
};

export default BaseLayout;
