
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const { language } = useLanguage();
  
  return <Navigate to={`/${language}`} replace />;
};

export default Index;
