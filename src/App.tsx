
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Skeleton } from "@/components/ui/skeleton";

// Lazy load all pages for better code splitting
const Index = lazy(() => import("./pages/Index"));
const AutomationServices = lazy(() => import("./pages/AutomationServices"));
const CreativeStudio = lazy(() => import("./pages/CreativeStudio"));
const Academy = lazy(() => import("./pages/Academy"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const NotFound = lazy(() => import("./pages/NotFound"));

// English pages
const ImprintEn = lazy(() => import("./pages/en/Imprint"));
const PrivacyPolicyEn = lazy(() => import("./pages/en/PrivacyPolicy"));
const TermsEn = lazy(() => import("./pages/en/Terms"));
const IndexEn = lazy(() => import("./pages/en/Index"));
const CreativeStudioEn = lazy(() => import("./pages/en/CreativeStudio"));
const AutomationServicesEn = lazy(() => import("./pages/en/AutomationServices"));
const AcademyEn = lazy(() => import("./pages/en/Academy"));

// French pages
const MentionsLegalesFr = lazy(() => import("./pages/fr/MentionsLegales"));
const ConfidentialiteFr = lazy(() => import("./pages/fr/Confidentialite"));
const ConditionsFr = lazy(() => import("./pages/fr/Conditions"));
const IndexFr = lazy(() => import("./pages/fr/Index"));
const CreativeStudioFr = lazy(() => import("./pages/fr/CreativeStudio"));
const AutomationServicesFr = lazy(() => import("./pages/fr/AutomationServices"));
const AcademyFr = lazy(() => import("./pages/fr/Academy"));

// PageLoader component for Suspense fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-full max-w-md">
      <Skeleton className="h-12 w-48 mb-4" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  </div>
);

// Create QueryClient with better caching options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (renamed from cacheTime)
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Root redirect */}
                <Route path="/" element={<Navigate to="/de" replace />} />
                
                {/* German Routes (Default) */}
                <Route path="/de" element={<Index />} />
                <Route path="/de/automation-services" element={<AutomationServices />} />
                <Route path="/de/creative-studio" element={<CreativeStudio />} />
                <Route path="/de/academy" element={<Academy />} />
                <Route path="/de/impressum" element={<Impressum />} />
                <Route path="/de/datenschutz" element={<Datenschutz />} />
                <Route path="/de/agb" element={<AGB />} />
                
                {/* English Routes */}
                <Route path="/en" element={<IndexEn />} />
                <Route path="/en/automation-services" element={<AutomationServicesEn />} />
                <Route path="/en/creative-studio" element={<CreativeStudioEn />} />
                <Route path="/en/academy" element={<AcademyEn />} />
                <Route path="/en/imprint" element={<ImprintEn />} />
                <Route path="/en/privacy-policy" element={<PrivacyPolicyEn />} />
                <Route path="/en/terms" element={<TermsEn />} />
                
                {/* French Routes */}
                <Route path="/fr" element={<IndexFr />} />
                <Route path="/fr/automation-services" element={<AutomationServicesFr />} />
                <Route path="/fr/creative-studio" element={<CreativeStudioFr />} />
                <Route path="/fr/academy" element={<AcademyFr />} />
                <Route path="/fr/mentions-legales" element={<MentionsLegalesFr />} />
                <Route path="/fr/confidentialite" element={<ConfidentialiteFr />} />
                <Route path="/fr/conditions" element={<ConditionsFr />} />
                
                {/* Maintain backwards compatibility for direct links */}
                <Route path="/automation-services" element={<Navigate to="/de/automation-services" replace />} />
                <Route path="/creative-studio" element={<Navigate to="/de/creative-studio" replace />} />
                <Route path="/academy" element={<Navigate to="/de/academy" replace />} />
                <Route path="/impressum" element={<Navigate to="/de/impressum" replace />} />
                <Route path="/datenschutz" element={<Navigate to="/de/datenschutz" replace />} />
                <Route path="/agb" element={<Navigate to="/de/agb" replace />} />
                
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
