
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import AutomationServices from "./pages/AutomationServices";
import CreativeStudio from "./pages/CreativeStudio";
import Academy from "./pages/Academy";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// This component helps isolate theme context per route
const RouteObserver = () => {
  const location = useLocation();
  
  // Log route changes - useful for debugging theme changes
  React.useEffect(() => {
    console.log(`Route changed to: ${location.pathname}`);
  }, [location]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteObserver />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/automation-services" element={<AutomationServices />} />
            <Route path="/creative-studio" element={<CreativeStudio />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
