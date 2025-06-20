
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Contract from "./pages/Contract";
import Dashboard from "./pages/Dashboard";
import Journal from "./pages/Journal";
import Coach from "./pages/Coach";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import Rewards from "./pages/Rewards";
import Community from "./pages/Community";
import Partners from "./pages/Partners";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";

const App = () => {
  // Create QueryClient inside the component to avoid React context issues
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen">
            <Navigation />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/contract" element={<Contract />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/coach" element={<Coach />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/rewards" element={<Rewards />} />
              <Route path="/community" element={<Community />} />
              <Route path="/leaderboard" element={<Community />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
