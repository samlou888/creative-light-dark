import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Skeleton } from "@/components/ui/skeleton";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));
const En = lazy(() => import("./pages/En"));
const Fr = lazy(() => import("./pages/Fr"));
const AutomationServicesEn = lazy(() => import("./pages/en/AutomationServices"));
const CreativeStudioEn = lazy(() => import("./pages/en/CreativeStudio"));
const AcademyEn = lazy(() => import("./pages/en/Academy"));
const ImprintEn = lazy(() => import("./pages/en/Imprint"));
const PrivacyPolicyEn = lazy(() => import("./pages/en/PrivacyPolicy"));

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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={
                  <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/en" element={<En />} />
                      <Route path="/en/automation" element={<AutomationServicesEn />} />
                      <Route path="/en/creative-studio" element={<CreativeStudioEn />} />
                      <Route path="/en/academy" element={<AcademyEn />} />
                      <Route path="/en/imprint" element={<ImprintEn />} />
                      <Route path="/en/privacy-policy" element={<PrivacyPolicyEn />} />
                      <Route path="/fr" element={<Fr />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                } />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
