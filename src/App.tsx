
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import AutomationServices from "./pages/AutomationServices";
import CreativeStudio from "./pages/CreativeStudio";
import Academy from "./pages/Academy";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <BrowserRouter>
          <LanguageProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Default Routes (German) */}
              <Route path="/" element={<Index />} />
              <Route path="/automation-services" element={<AutomationServices />} />
              <Route path="/creative-studio" element={<CreativeStudio />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
              <Route path="/agb" element={<AGB />} />

              {/* Localized Routes for other languages */}
              {/* English Routes */}
              <Route path="/en" element={<Index />} />
              <Route path="/en/automation-services" element={<AutomationServices />} />
              <Route path="/en/creative-studio" element={<CreativeStudio />} />
              <Route path="/en/academy" element={<Academy />} />
              <Route path="/en/impressum" element={<Impressum />} />
              <Route path="/en/datenschutz" element={<Datenschutz />} />
              <Route path="/en/agb" element={<AGB />} />

              {/* French Routes */}
              <Route path="/fr" element={<Index />} />
              <Route path="/fr/automation-services" element={<AutomationServices />} />
              <Route path="/fr/creative-studio" element={<CreativeStudio />} />
              <Route path="/fr/academy" element={<Academy />} />
              <Route path="/fr/impressum" element={<Impressum />} />
              <Route path="/fr/datenschutz" element={<Datenschutz />} />
              <Route path="/fr/agb" element={<AGB />} />

              {/* Italian Routes */}
              <Route path="/it" element={<Index />} />
              <Route path="/it/automation-services" element={<AutomationServices />} />
              <Route path="/it/creative-studio" element={<CreativeStudio />} />
              <Route path="/it/academy" element={<Academy />} />
              <Route path="/it/impressum" element={<Impressum />} />
              <Route path="/it/datenschutz" element={<Datenschutz />} />
              <Route path="/it/agb" element={<AGB />} />

              {/* Spanish Routes */}
              <Route path="/es" element={<Index />} />
              <Route path="/es/automation-services" element={<AutomationServices />} />
              <Route path="/es/creative-studio" element={<CreativeStudio />} />
              <Route path="/es/academy" element={<Academy />} />
              <Route path="/es/impressum" element={<Impressum />} />
              <Route path="/es/datenschutz" element={<Datenschutz />} />
              <Route path="/es/agb" element={<AGB />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </LanguageProvider>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
