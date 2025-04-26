
import React from 'react';
import { Link } from 'react-router-dom';

const Fr = () => {
  return (
    <div className="container mx-auto pt-32 px-6">
      <h1 className="text-4xl font-bold mb-4">Version Française</h1>
      <p className="text-muted-foreground mb-4">
        Bienvenue sur la version française du site.
      </p>
      <div className="flex gap-4">
        <Link 
          to="/fr/automation" 
          className="text-primary hover:underline"
        >
          Services d'Automatisation
        </Link>
      </div>
    </div>
  );
};

export default Fr;
