
import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Skeleton } from "@/components/ui/skeleton";
import Index from "./pages/Index"; // Direct import for the Index page

// Lazy load other pages
const NotFound = lazy(() => import("./pages/NotFound"));
const En = lazy(() => import("./pages/En"));
const Fr = lazy(() => import("./pages/Fr"));

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
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/en" element={<En />} />
                  <Route path="/fr" element={<Fr />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            } />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
